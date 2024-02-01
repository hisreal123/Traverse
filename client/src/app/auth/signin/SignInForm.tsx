"use client";
import Link from "next/link";
import React from "react";

const SignInForm: React.FC = () => {
  const [email, setEmail] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");

  const handleSubmitLogin = () => {
    if (!password || !email) {
      console.log("Email or Password not correct !!");
    }
    console.log(email, password);
  };

  return (
    <>
      <form
        action=""
        className="form  relative w-full "
        onSubmit={handleSubmitLogin}
      >
        <div className="wrap flex flex-col">
          <label htmlFor="Email Address" className="mb-1 text-sm lg:md">
            Email Adress
          </label>
          <input
            type="text"
            placeholder="Enter Email Adress"
            name="email"
            required
            className="p-2 placeholder:text-sm outline:none border border-[#DAE0E6] mb-8 lg:mb-5 rounded-md"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="wrap flex flex-col">
          <label htmlFor="Password" className="mb-1 text-sm lg:md">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            className="p-2 placeholder:text-sm outline:none border border-[#DAE0E6] rounded-md"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <span className="text-xs text-left  text-[#1B0354]">
            Forgot password?
            <Link
              href="/auth/forgotPassword"
              className="text-[#352DC8] ml-1 mt-1"
            >
              reset
            </Link>
          </span>
        </div>

        <button
          type="submit"
          className="bg-[#33059F] mt-6 w-full p-2 lg:p-3 text-white font-bold  rounded-md"
        >
          Signin
        </button>

        <span className="text-xs lg:text-sm text-center text-gray-500 mx-auto w-full relative block mt-2">
          Don&lsquo;t have an Account?
          <Link href="/auth/signup" className="text-[#352DC8]">
            Signup
          </Link>
        </span>
      </form>
    </>
  );
};

export default SignInForm;

