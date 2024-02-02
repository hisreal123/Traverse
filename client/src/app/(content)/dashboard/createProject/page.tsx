import CreateProjectForm from "@/components/forms/CreateProject";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="relative py-4 md:py-6 rounded-[16px] bg-white shadow-lg px-4 sm:px-6 md:shadow-none z-20 w-full max-w-[600px] mx-auto">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/Back.svg"
            width={20}
            height={20}
            alt="Email box "
          />
          <span>Back</span>
        </div>
        <h2 className="text-3xl font-bold text-[#1B0354]">
          Create a new project
        </h2>

        <CreateProjectForm />
      </div>
    </>
  );
};

export default page;
