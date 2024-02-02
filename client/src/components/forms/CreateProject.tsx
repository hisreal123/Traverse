"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface ProjectFormProps {}

const ProjectForm: React.FC<ProjectFormProps> = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [teamMembers, setTeamMembers] = useState("");
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-02-01");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().split("T")[0];

    const baseURL = "https://traverse-pgpw.onrender.com/api/v1/project";

    const data = {
      title,
      description,
      price,
      teamMembers,
      startDate: formattedCurrentDate,
      endDate,
    };

    try {
      const response = await axios.post(baseURL, data);
      console.log("Server Response:", response.data);
      toast.success("Project Created ");
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error("Error creating Project !!!");
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col w-[80%] relative ">
        <div className="mb-4 flex  space-x-2 lg:space-x-5">
          <label className="block">Title:</label>
          <input
            type="text"
            value={title}
            className="py-1 border border-gray-400 rounded-md px-2"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block">Description:</label>
          <textarea
            value={description}
            className="py-1 border border-gray-400 rounded-md"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block">Price:</label>
          <input
            type="text"
            value={price}
            className="py-1 border border-gray-400 rounded-md"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block">Team Members:</label>
          <input
            type="text"
            value={teamMembers}
            className="py-1 border border-gray-400 rounded-md"
            onChange={(e) => setTeamMembers(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block">Start Date:</label>
          <input
            type="text"
            value={startDate}
            className="py-1 border border-gray-400 rounded-md"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block">End Date:</label>
          <input
            type="text"
            value={endDate}
            className="py-1 border border-gray-400 rounded-md"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
