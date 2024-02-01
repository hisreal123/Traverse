import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { signinUser } from "./data/inddex";
import Google from "next-auth/providers/google";
import { login } from "@/app/actions/auth";

export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await signinUser({ email, password });
          if (!user) return null;

          return user.res;
        }
        return null;
      },
      credentials: undefined,
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (token) {
        token.accessToken = token.token!;
        token.exp = token.exp!;
      }
      return token;
    },
  },
} satisfies NextAuthConfig;
