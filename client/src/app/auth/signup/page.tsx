import React from "react";
import SignUpForm from "./SignUpForm";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import AllAuthRightSection from "@/components/auth";

const page = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder></Toaster>

      <div className="grid lg:grid-cols-2 h-full grid-cols-1 lg:p-2 bg-greed-700 lg:bg-[#ffffff] ">
        <div
          className="py-4 flex flex-col px-5 justify-center items-center lg:items-start
          h-full relative  w-screen lg:w-full lg:mb-0 -translate-y-8 lg:-translate-y-0 lg:px-24 bg-[#ffffff] lg:h-fit"
        >
          {/* this is a placement till logo will be ready */}
          <h1 className="logo text-xl font-bold  mb-4"> Logo </h1>

          <h1 className=" text-2xl lg:text-[36px] text-[#1B0354]  font-bold w-full ">
            Create an Account
          </h1>

          <p className="text-sm lg:text-[15px] text-[#6B7B8F]  mb-4 lg:mb-4  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <SignUpForm />
        </div>

        <div className="caption_image hidden md:block lg:h-full relative">
          <AllAuthRightSection />
        </div>
      </div>
    </>
  );
};

export default page;
