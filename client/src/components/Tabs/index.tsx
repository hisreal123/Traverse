"use client";
import { Completed_project } from "@/app/(content)/client-dashboard/completed";
import { InProgress_project } from "@/app/(content)/client-dashboard/inProgress";
import { Todo_Projects } from "@/app/(content)/client-dashboard/todo";
import React, { useState } from "react";

export const Tab: React.FC = () => {
  const [tabActive, setTabActive] = useState<string>("todo");

  const handleTabChange = (tab: string) => {
    setTabActive(tab);
  };

  return (
    <div className="">
      <button
        onClick={() => handleTabChange("todo")}
        className={
          tabActive === "todo"
            ? "todo bg-[#463EE3] py-1 text-white px-2"
            : "bg-[#f3f3f3] px-2 py-1"
        }
      >
        To Do
      </button>
      <button
        onClick={() => handleTabChange("inProgress")}
        className={
          tabActive === "inProgress"
            ? "inProgress bg-[#463EE3] py-1 text-white px-2"
            : "bg-[#f3f3f3] px-2 py-1"
        }
      >
        In Progress
      </button>
      <button
        onClick={() => handleTabChange("completed")}
        className={
          tabActive === "completed"
            ? "completed bg-[#463EE3] py-1 text-white px-2"
            : "bg-[#f3f3f3] px-2 py-1"
        }
      >
        Completed
      </button>

      <div className="mt-3">
        {tabActive === "todo" && (
          <div className="">
            <Todo_Projects />
          </div>
        )}
        {tabActive === "inProgress" && (
          <div className="">
            <InProgress_project />
          </div>
        )}
        {tabActive === "completed" && (
          <div className="">
            <Completed_project />
          </div>
        )}
      </div>
    </div>
  );
};
