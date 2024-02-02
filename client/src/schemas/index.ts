import * as z from "zod";
// import validator from "validator";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, {
    message: "Password is required",
  }),
});

export const createProjectSchema = z.object({
  name: z.string().min(3),
  summary: z.string().min(10),
  objective: z.string(),
  currentPhase: z.string(),
  // currentStatus: z.array(),
});
