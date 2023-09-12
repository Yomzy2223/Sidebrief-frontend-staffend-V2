import * as z from "zod";
import googleIcon from "@/assets/icons/google.svg";
import yahooIcon from "@/assets/icons/yahoo.svg";

export const signUpSchema = z.object({
  firstName: z.string().nonempty("Enter your first name"),
  lastName: z.string().nonempty("Enter your last name"),
  phone: z
    .string({
      required_error: "Enter your phone number",
    })
    .refine((phone) => phone.length === 11, { message: "Enter a valid phone number" }),
  email: z.string().email("Enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be 6 or more characters")
    .nonempty("Enter your password"),
});

export type signUpType = z.infer<typeof signUpSchema>;

export const signUpOptions = [
  {
    icon: googleIcon,
    text: "Sign up with Google",
  },
  {
    icon: yahooIcon,
    text: "Sign up with Yahoo",
  },
];
