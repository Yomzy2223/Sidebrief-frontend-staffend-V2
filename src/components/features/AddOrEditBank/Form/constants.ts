import * as z from "zod";

export const formSchema = z.object({
  name: z.string().nonempty(),
  logo: z.string().nonempty(),
  color: z.string().nonempty(),
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
