import { Link } from "iconsax-react";
import React, { useState } from "react";
import { Form, useForm } from "react-hook-form";
import Button from "../ui/Button";
import Image from "next/image";
import * as z from "zod";

const CreateProjectForm = () => {
  const form = useForm({});
  return (
    <>
      <Form {...form}></Form>
    </>
  );
};

export default CreateProjectForm;
