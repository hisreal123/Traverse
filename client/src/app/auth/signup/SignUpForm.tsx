"use client";
import { RegistrationDataProps } from "@/types";
import { registrationSchema } from "@/utils/registerSchema";
import Link from "next/link";
import React from "react";
import { ZodError } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { useStateCtx } from "@/context/StateCtx";
import OTPModal from "@/components/modals/VerifyModal";
import { redirect } from "next/navigation";

const SignUpForm: React.FC = () => {
  const [name, setName] = React.useState<String>("");
  const [email, setEmail] = React.useState<String>("");
  const [companyName, setCompanyName] = React.useState<String>("");
  const [website, setWebsite] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");
  const [confirmPassword, setConfirmPassword] = React.useState<String>("");
  const { setOTPModal } = useStateCtx();

  const handleSubmitLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const baseURL = process.env.NEXT_PUBLIC_API_KEY;

    if (password !== confirmPassword) {
      toast.error("Password does't match!!");
      console.log("Toast problemm !!");
      return;
    }

    try {
      const validatedData: RegistrationDataProps = registrationSchema.parse({
        name,
        email,
        companyName,
        website,
        password,
        confirmPassword,
      });

      const response = await fetch(`${baseURL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Registration Sucessfull: ");
        setOTPModal(true);
        setName(" ");
        setEmail(" ");
        setCompanyName(" ");
        setWebsite(" ");
        setPassword(" ");
        setConfirmPassword(" ");

        redirect("/validatePin");
      } else {
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(
          `Input errors: ${error.errors.map((err) => err.message).join(", ")}`
        );
      }
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <form className="form relative w-full " onSubmit={handleSubmitLogin}>
        <div className="wrap flex flex-col mb-3 lg:mb-4 text-sm lg:md">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            className="p-2 lg:p-3 placeholder:text-sm outline:none border border-[#DAE0E6] rounded-md"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="wrap flex flex-col ">
          <label htmlFor="email" className="mb-1 text-sm lg:md">
            {" "}
            Email Adress
          </label>
          <input
            type="text"
            placeholder="Enter Email Adresss"
            name="email"
            required
            className="p-2 placeholder:text-sm outline:none border border-[#DAE0E6] mb-3 rounded-md"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="wrap flex flex-col">
          <label htmlFor="Company Name" className="mb-1 text-sm lg:md">
            Company Name
          </label>
          <input
            type="text"
            placeholder="Enter Company Name"
            name="company name"
            className="p-2 placeholder:text-sm outline:none border border-[#DAE0E6] mb-3 rounded-md"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCompanyName(e.target.value);
            }}
          />
        </div>
        <div className="wrap flex flex-col ">
          <label htmlFor="Website Name" className="mb-1 text-sm lg:md">
            Website Name (Optional)
          </label>
          <input
            type="text"
            placeholder="Enter Website Name"
            name="website name"
            className="p-2 placeholder:text-sm outline:none border border-[#DAE0E6] mb-3 rounded-md"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setWebsite(e.target.value);
            }}
          />
        </div>
        <div className="wrap flex flex-col ">
          <label htmlFor="Password" className="mb-1 text-sm lg:md">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="p-2 placeholder:text-sm outline:none border border-[#DAE0E6] mb-3 rounded-md"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="wrap w-full flex flex-col ">
          <label htmlFor="Confirm Password" className="mb-1 text-sm lg:md">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm password"
            className="p-2 placeholder:text-sm outline:none border border-[#DAE0E6] mb-3 rounded-md"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="bg-[#33059F] mt-1 w-full p-2 lg:p-3 text-white font-bold  rounded-md"
        >
          Signup
        </button>

        <span className="text-xs lg:text-sm text-center text-[#1B0354] mx-auto w-full relative block ">
          Already have an Account?
          <Link href="/auth/signin" className="text-[#352DC8]">
            Signin
          </Link>
        </span>
      </form>
    </>
  );
};

export default SignUpForm;
