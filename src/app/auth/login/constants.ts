import * as z from "zod";
import googleIcon from "@/assets/icons/google.svg";
import yahooIcon from "@/assets/icons/yahoo.svg";

export const signInSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().nonempty("Enter your password"),
});

export type signUpType = z.infer<typeof signInSchema>;

export const signInOptions = [
  {
    icon: googleIcon,
    text: "Sign in with Google",
  },
  {
    icon: yahooIcon,
    text: "Sign in with Yahoo",
  },
];
