import React from "react";
import SignInForm from "../signin/SignInForm";
import AllAuthRightSection from "@/components/auth";

const page = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 h-full grid-cols-1 lg:p-2 bg-greed-700 lg:bg-[#ffffff] ">
        <div
          className="py-4 flex flex-col px-5 justify-center items-center lg:items-start 
              h-full relative w-screen lg:w-full lg:mb-0 -translate-y-8  lg:translate-y-3 lg:px-24  bg-[#ffffff] lg:h-full"
        >
          {/* this is a placement till logo will be ready */}
          <h1 className="logo text-xl font-bold  mb-4 -translate-y-5">Logo</h1>
          <h1 className="lg:text-[36px] text-[#1B0354] font-bold w-full  mb-2 lg:mb-3 text-lg lg:text-md">
            One final step! we need to verify your email
          </h1>

          <p className="text-sm lg:text-[15px] text-[#6B7B8F]  mb-4 lg:mb-4 text-start ">
            Please check your invoice for verification code sent to
            <span className="font-bold ml-2"> ojuolapeade@gmail.com</span>
          </p>

          {/* verificationForm in here  */}
        </div>

        <div className="caption_image hidden md:block lg:h-full relative">
          <AllAuthRightSection />
        </div>
      </div>
    </>
  );
};

export default page;
