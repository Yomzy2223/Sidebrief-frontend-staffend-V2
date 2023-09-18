import * as z from "zod";
import tinycolor from "tinycolor2";

const MAX_FILE_SIZE = 500000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const formSchema = z.object({
  name: z.string().nonempty("This field is required"),
  // logo: z.string().nonempty("upload a logo"),
  logo: z
    .custom<File>()
    .refine((file) => file instanceof File, "Image is required.")
    .refine((file) => file?.size! <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type!),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  color: z
    .string()
    .nonempty("Enter the brand color")
    .refine((color) => tinycolor(color).isValid(), {
      message: "Invalid color",
    }),
  adminEmail: z.string().email().nonempty("This field is required"),
  address: z.string().nonempty("This field is required"),
});

export const editFormSchema = z.object({
  name: z.string().nonempty("This field is required"),
  // logo: z.string().nonempty("upload a logo"),
  logo: z
    .custom<File>()
    .optional()
    .refine((file) => file instanceof File || file === undefined, "Image is required.")
    .refine((file) => file?.size! <= MAX_FILE_SIZE || file === undefined, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type!) || file === undefined,
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  color: z
    .string()
    .nonempty("Enter the brand color")
    .refine((color) => tinycolor(color).isValid(), {
      message: "Invalid color",
    }),
  adminEmail: z.string().email().nonempty("This field is required"),
  address: z.string().nonempty("This field is required"),
});
