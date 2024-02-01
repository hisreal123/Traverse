import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tab } from "@/components/Tabs";

const page = () => {
  // Dummy data

  const project_data = {
    Todo: {
      projectTitle: "",
      timeCreated: "",
    },
    inProgress: {},
  };

  return (
    <div className="">
      <div className="top-section flex justify-between flex-wrap p-4 wrapper_div bg-[#efeff149] border-b border-grey-300">
        <div className="rght ">
          <div className="tp flex">
            <h1 className="font-bold text-[1rem] text-[#1B0354] lg:text-[36px] text-md dark:text-white">
              Awesome Project
            </h1>

            <div className="flex bg-[#EFEFF1] hover:bg-[#f3f3f3] p-[4px] lg:p-[10px] items-center rounded-[10px] ml-2 lg:space-x-3">
              <Image
                src="assets/loading.svg"
                alt="time_loading"
                height={100}
                width={100}
                sizes="responsive"
                className="lg:h-[24px] lg:w-[24px] h-[14px] w-[14px]"
              />
              <p className="lg:text-[14px] text-[10px] ml-1 lg:ml-0">
                10 Hours
              </p>
            </div>
            <div className="flex bg-[#EFEFF1] hover:bg-[#f3f3f3] p-[4px] lg:p-[10px] items-center rounded-[10px] ml-2 lg:space-x-3">
              <Image
                src="assets/dollar-circle.svg"
                alt="time_loading"
                height={100}
                width={100}
                sizes="responsive"
                className="lg:h-[24px] lg:w-[24px] h-[14px] w-[14px]"
              />
              <p className="lg:text-[14px] text-[10px] ml-1 lg:ml-0">250</p>
            </div>
          </div>
          <p className="desc text-[16px] text-[#6B7B8F] lg:truncate relative lg:w-[70%] my-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            dicta quae saepe officiis rerum ducimus,
          </p>
        </div>

        <div className="flex fle-col lg:flex-row space-x-2 h-fit">
          <button className=" px-2 py-1 rounded-[8px] lg:text-[16px] bg-[#33059F] hover:bg-[#33059F]/80 text-white lg:py-[12px] lg:px-[20px]">
            See Live Demo
          </button>
          <button className="  px-2 py-1 rounded-[8px] lg:text-[16px] bg-[#ECEBFF] hover:bg-[#ECEBFF]/80 lg:text-[#463EE3] lg:py-[12px] lg:px-[20px]">
            View More
          </button>
        </div>
      </div>

      {/* Tab Sections */}
      <div className="Tab sections mt-3 px-4">
        <Tab />
      </div>
    </div>
  );
};

export default page;
