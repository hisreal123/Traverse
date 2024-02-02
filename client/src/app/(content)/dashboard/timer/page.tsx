"use client";
// import ProjectTimer from "@/components/miscellaneous/Timer";
// import ProjectDate from "@/components/miscellaneous/Timer";
import { Play } from "iconsax-react";
import React from "react";
import Select from "react-select";

const page = () => {
  const options = [
    { value: "Travere1", label: "Traverse_1" },
    { value: "Traverse_2", label: "Traverse_2" },
  ];
  return (
    <>
      <div className="p-4">
        <div className="tp">
          <div className="tp flex justify-between items-center ">
            <h1 className="font-bold text-[1rem] text-[#1B0354] lg:text-[36px] text-md dark:text-white">
              Timer
            </h1>

            <div className="date section">
              <span className="timer-counter bg-[#ECEBFF] font-bold p-1 ml-1 italic md:text-lg lg:text-xl text-md rounded-md">
                00
              </span>
              <span className="timer-counter bg-[#ECEBFF] font-bold p-1 ml-1 italic md:text-lg lg:text-xl text-md rounded-md">
                00
              </span>
              <span className="timer-counter bg-[#ECEBFF] font-bold p-1 ml-1 italic md:text-lg lg:text-xl text-md rounded-md">
                00
              </span>
            </div>
          </div>
        </div>

        {/* Choose projects */}
        <Select options={options} className="w-full md:w-1/2 lg:w-[30%]" />

        {/* start timmer  */}
        <div className="set_timmer mt-2 bg-[#ECEBFF] flex items-center p-2 lg:p-3 justify-between rounded-md border-2 border-[#b3b3bb]">
          <p className="text-xs md:textsm lg:text-sm font-bold">
            Would you like to start working now?
          </p>

          <button
            type="button"
            className="flex items-center text-xs md:text-sm lg:text-sm bg-[#1B0354] text-[#ECEBFF] rounded-md p-1 md:p-2 "
          >
            <Play height={10} width={10} />
            <span>Start Timer</span>
          </button>
        </div>

        {/* Tash section  */}
        <h2> project details comes in here. </h2>
      </div>
    </>
  );
};

export default page;
