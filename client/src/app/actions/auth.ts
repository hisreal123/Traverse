"use server";
import Calls from "@/authinstance";

import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { cookies } from "next/headers";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { jwtDecode } from "jwt-decode";
import { UserDetails } from "@/types";

const BaseUrl =
  process.env.AUTH_BASEURL ?? "https://traverse-pgpw.onrender.com/api/v1/auth/";

  const $http = Calls(BaseUrl);

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const cookie = cookies();
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Login Failed. Please check your email and password.",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const data = await fetch(`${BaseUrl}/auth/login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        credentials: "include",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log(data.status);
    const res = await data.json();
    if (data.status === 200 || res.ok) {
      cookie.set("access_token", res.token, {
        maxAge: 60 * 60 * 1 * 1, // 1 hour
        httpOnly: true,
        path: "/",
        priority: "high",
      });
      const decodedToken = jwtDecode(res.token) as UserDetails;
      if (decodedToken) {
        const user = {
          email: decodedToken.email,
          name: decodedToken.name,
          accountId: decodedToken.accountId,
          role: decodedToken.role,
        };
        cookie.set("user", JSON.stringify(user), {
          maxAge: 60 * 60 * 24 * 1, // 1 day

          path: "/",
          priority: "high",
        });
      }
      console.log(res);

      return {
        success: "Login successful!",
        redirect: DEFAULT_LOGIN_REDIRECT,
        user: decodedToken,
      };
    }
    if (data.status === 400) {
      return {
        error: "Email or Phone number already exist",
      };
    }
    if (data.status === 404) {
      return {
        error: "User not found, sign up instead!",
      };
    }
    if (data.status === 500) {
      return {
        error: "Something went wrong.",
      };
    }

    return {
      error: res.message,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong.",
    };
  }
};

export const activateUser = async (licence: string) => {
  try {
    const res = await $http.post("/activate", { licence });

    if (res.status === 201) {
      console.log("Activation successful");
      console.log("Activation response", res);
      return { success: "User activated successfully" };
    } else {
      throw new Error("Unexpected response from server");
    }
  } catch (e: any) {
    console.log("Activate call error from API call", e);
    if (e?.response?.status === 401) {
      return { error: "Unauthorized. Invalid license." };
    } else if (e?.response?.status === 404) {
      return { error: "Unable to activate. License not found." };
    } else if (e?.response?.status === 500) {
      return { error: "Internal server error" };
    } else {
      return {
        error:
          e?.response?.data ??
          "Unknown error occurred. Please try again later.",
      };
    }
  }
};
