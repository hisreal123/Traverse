"use client";
import Link from "next/link";
import React, { useState } from "react";

interface VerificationFormProps {}

const VerificationForm: React.FC<VerificationFormProps> = (
  VerificationForm
): JSX.Element => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  const handleSubmitOtp = async (
    target: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // const { value } = target;
    // const val = value.substring(value.length - 1);
  };

  return (
    <form
      action=""
      className="form  relative w-full "
      // onSubmit={handleSubmitOtp}
    >
      {otp.map((_, index) => {
        return (
          <>
            <input
              type="text"
              className="otp-field"
              key={index}
              name="otp"
              onChange={(e) => handleSubmitOtp(e, index)}
              onFocus={(e) => e.target.select()}
            />

            {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
            )}
          </>
        );
      })}
      <button
        type="submit"
        className="bg-[#33059F] mt-6 w-full p-2 lg:p-3 text-white font-bold  rounded-md"
      >
        Verify
      </button>

      <span className="text-xs lg:text-sm text-center text-gray-500 mx-auto w-full relative block mt-2">
        Don&lsquo;t have an Account?
        <Link href="/auth/signup" className="text-[#352DC8]">
          Signup
        </Link>
      </span>
    </form>
  );
};

export default VerificationForm;
