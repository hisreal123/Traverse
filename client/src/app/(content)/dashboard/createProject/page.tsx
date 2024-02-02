import ProjectForm from "@/components/forms/CreateProject";
import React from "react";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder></Toaster>

      <div className="w-full p-4 ">
        <h1 className=" text-lg md:text-xl mb-4">Create Project</h1>
        <div className="main flex ">
          <ProjectForm />
        </div>
      </div>
    </>
  );
};

export default page;
