"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const CreateNewPasswodForm: React.FC = () => {
  const [newPassword, setNewPassword] = React.useState<String>("");
  const [confirmPassword, setConfirmPassword] = React.useState<String>("");

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Password Does'nt match !!!");
    } else {
      toast.success("Password Does'nt match !!!");
    }
  };

  return (
    <form className="form  relative w-full " onSubmit={handleSubmitEmail}>
      <div className="wrap flex flex-col">
        <input
          type="password"
          placeholder="New Password"
          name="New Password"
          required
          className="p-2 placeholder:text-sm outline:none border border-[#DAE0E6] rounded-md"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewPassword(e.target.value);
          }}
        />
      </div>
      <div className="wrap flex flex-col mt-5">
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm Password"
          required
          className="p-2 placeholder:text-sm outline:none border border-[#DAE0E6] rounded-md"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>

      <button
        type="submit"
        className="bg-[#33059F] mt-6 w-full p-2 lg:p-3 text-white font-bold  rounded-md"
      >
        Reset Password
      </button>
    </form>
  );
};

export default CreateNewPasswodForm;
