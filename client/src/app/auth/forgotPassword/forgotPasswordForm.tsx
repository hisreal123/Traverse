"use client";
import Image from "next/image";
import React from "react";

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = React.useState<String>("");

  const handleSubmitEmail = () => {
    if (!email) {
      console.log("Email");
    }
    console.log(email);
  };

  return (
    <form
      action=""
      className="form  relative w-full "
      onSubmit={handleSubmitEmail}
    >
      <div className="wrap flex flex-col">
        <div className="rounded-md flex item-center  border border-[#DAE0E6] pl-2 mt-6 overflow-x-hidden">
          <Image
            src="/assets/messageBox.svg"
            width={20}
            height={20}
            alt="Email box "
          />
          <input
            type="text"
            placeholder="tosinfrank976@gmail.com"
            name="email"
            required
            className="py-3 pl-2 ml-2 placeholder:font-bold text-sm relative w-full outline-none font-bold text-[#58616d]"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-[#33059F] mt-6 w-full p-2 lg:p-3 text-white font-bold  rounded-md"
      >
        Continue
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
