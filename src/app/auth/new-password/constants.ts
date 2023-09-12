import * as z from "zod";

export const newPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, "Password must be 6 or more characters")
      .nonempty("Enter your password"),
    confirmPassword: z.string().nonempty("Must match your new password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type newPasswordType = z.infer<typeof newPasswordSchema>;
