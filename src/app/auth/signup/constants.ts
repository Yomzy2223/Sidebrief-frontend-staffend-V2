import * as z from "zod";

export const signUpSchema = z.object({
  firstName: z.string().nonempty("Enter your first name"),
  lastName: z.string().nonempty("Enter your last name"),
  email: z
    .string()
    .email("Enter a valid email")
    .nonempty("Enter your email address"),
  password: z
    .string()
    .min(6, "Password must be 6 or more characters")
    .nonempty("Enter your password"),
});

export type signUpType = z.infer<typeof signUpSchema>;
