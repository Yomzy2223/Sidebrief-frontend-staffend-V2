import { client } from "@/lib/config";

// CORPORATE REQUEST FUNCTIONS
// --------------------------------------------------------------------------------
// Function to sign in
export const signIn = (formInfo: any) => {
  return client.post("", formInfo);
};

// Function to sign up
export const signUp = (formInfo: any) => {
  return client.post("", formInfo);
};

// Function to forgot password
export const forgotPassword = (formInfo: any) => {
  return client.post("", formInfo);
};

// Function to change password
export const changePassword = (formInfo: any) => {
  return client.post("", formInfo);
};
