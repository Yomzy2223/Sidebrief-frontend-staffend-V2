import { client } from "@/lib/config";

interface signInType {
  email: string;
  password: string;
}

interface signUpType extends signInType {
  firstName: string;
  lastName: string;
  phone: string;
}

interface changePasswordType extends signInType {}

// STAFF AUTH API
// --------------------------------------------------------------------------------
// Sign staff in
export const signIn = async (formInfo: signInType) => {
  return await client.post("/staffs/login", formInfo);
};

// Sign staff up
export const signUp = async (formInfo: signUpType) => {
  return await client.post("/staffs", formInfo);
};

// Forgot staff password
export const forgotPassword = async (formInfo: { email: string }) => {
  return await client.post("/staffs/forgotpassword", formInfo);
};

// Change staff password
export const changePassword = async (formInfo: changePasswordType) => {
  return await client.post("/staffs/passwordreset", formInfo);
};
