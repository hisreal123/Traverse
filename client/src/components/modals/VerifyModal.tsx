"use client";

import React, { useState, useTransition } from "react";
import { useStateCtx } from "@/context/StateCtx";
import Input from "../ui/Input";
import { cn } from "@/utils";
import { X } from "lucide-react";
import { activateUser } from "@/app/actions/auth";
import Button from "../ui/Button";

const OTPModal = () => {
  const { OTPModal, setOTPModal } = useStateCtx();
  const [licence, setLicence] = useState("");
  const [activationResult, setActivationResult] = useState<{
    success?: string;
    error?: string;
  } | null>(null);
  const [isLoading] = useTransition();

  const handleActivate = async () => {
    try {
      const result = await activateUser(licence);
      setActivationResult(result);
    } catch (error) {
      console.error("Error during activation:", error);
      setActivationResult({
        error: "An unexpected error occurred during activation.",
      });
    }
  };

  return (
    <>
      <div
        aria-hidden
        className={cn(
          " fixed min-h-screen w-full bg-black/40 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]",
          OTPModal
            ? "opacity-100 duration-500"
            : "opacity-0 duration-200 pointer-events-none"
        )}
        // onClick={() => {
        //   setOTPModal(false);
        // }}
      >
        <div
          role="dialog"
          aria-labelledby="OTP"
          className={cn(
            "py-6   flex flex-col w-[360px] h-[500px] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[300px] justify-between items-center bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none -translate-x-1/2",
            OTPModal
              ? "scale-100  duration-700 opacity-100 rounded-xl md:rounded-2xl"
              : "scale-0 translate-y-full duration-300 pointer-events-none"
          )}
        >
          <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
            <h3>Verify Your Account</h3>
            <button
              type="button"
              tabIndex={0}
              aria-label="Close"
              onClick={() => {
                setOTPModal(false);
              }}
              className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center w-full px-6">
            <div className="flex items-center justify-center w-full">
              {/* <img src="assets/logo.svg" alt="logo" className="w-16 h-16" /> */}
            </div>
            <div className="flex items-center justify-center w-full mt-4">
              <Input
                placeholder="Enter OTP"
                value={licence}
                onChange={(e) => setLicence(e.target.value)}
                className="w-full"
                id={""}
                type="text"
                label={"Verify Linces"}
              />
            </div>
          </div>

          <button
            onClick={handleActivate}
            className="bg-[#33059F] mt-1 p-2 lg:p-3 text-white font-bold  rounded-md"
          >
            Activate User
          </button>
          {activationResult && (
            <div>
              {activationResult.success && <p>{activationResult.success}</p>}
              {activationResult.error && <p>Error: {activationResult.error}</p>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OTPModal;
