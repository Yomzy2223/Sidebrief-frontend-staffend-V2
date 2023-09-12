import * as z from "zod";
import tinycolor from "tinycolor2";

export const formSchema = z.object({
  name: z.string().nonempty("This field is required"),
  logo: z.string().nonempty("upload a logo"),
  color: z
    .string()
    .nonempty("Enter the brand color")
    .refine((color) => tinycolor(color).isValid(), {
      message: "Invalid color",
    }),

  // bank: z.string().nonempty("This field is required"),
  // adminName: z.string().nonempty("This field is required"),
  adminEmail: z.string().email().nonempty("This field is required"),
  address: z.string().nonempty("This field is required"),
});

// {
//   "name": "string",
//   "address": "string",
//   "logo": "string",
//   "color": "string"
// }
