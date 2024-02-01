import AllAuthRightSection from "@/components/auth";
import React from "react";

import { ArrowLeft } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";
import CreateNewPasswodForm from "./createNewPasswordForm";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder></Toaster>

      <div className="grid lg:grid-cols-2 h-full grid-cols-1 lg:p-2 bg-greed-700 lg:bg-[#ffffff] ">
        <div
          className="py-4 flex flex-col px-5 justify-center items-center lg:items-start 
          h-full relative w-screen lg:w-full lg:mb-0 -translate-y-8  lg:translate-y-3 lg:px-24  bg-[#ffffff] lg:h-full"
        >
          <Link
            href="/auth/signin"
            className="absolute top-14 left-4 md:left-24 lg:top-3"
          >
            <ArrowLeft size="32" color="#1B0354" className="" />
          </Link>

          <Link href="/">
            <Image
              src="/assets/Logo_primary.svg"
              width={300}
              height={300}
              alt="Traverse logon h-full w-full"
            />
          </Link>
          <h1 className=" text-2xl lg:text-[36px] text-[#1B0354]  font-bold w-full  mb-2">
            Create New Password
          </h1>

          <p className="text-sm lg:text-[15px] text-[#6B7B8F]  mb-4 lg:mb-4 text-start ">
            Enter new password for your account
          </p>

          <CreateNewPasswodForm />
        </div>

        <div className="caption_image hidden md:block lg:h-full relative">
          <AllAuthRightSection />
        </div>
      </div>
    </>
  );
};

export default page;
