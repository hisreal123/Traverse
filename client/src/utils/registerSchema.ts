// registrationSchema.ts
import { string, z } from "zod";
import { toast } from "react-hot-toast";

const hasNumber = (value: string) => /\d/.test(value);
const hasCapitalLetter = (value: string) => /[A-Z]/.test(value);

const minLengthValidation = (
  value: string,
  minLength: number,
  errorMessage: string
) => {
  if (value.length < minLength) {
    toast.error(errorMessage);
    return false;
  }
  return true;
};
const registrationSchema = z.object({
  name: z
    .string()
    .refine((value) =>
      minLengthValidation(value, 3, "Name must be 3 or more characters long")
    ),
  email: z.string().email(),
  companyName: z
    .string()
    .refine((value) =>
      minLengthValidation(
        value,
        3,
        "Company name must be 3 or more characters long"
      )
    ),
  website: z.string().optional(),
    password: z.string().min(6, {
    message: 'Password must be at least 6 characters'
  }),
  confirmPassword: z.string().min(6),
});

export { registrationSchema };
