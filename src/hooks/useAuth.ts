import { changePassword, forgotPassword, signIn, signUp } from "@/api/authApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useResponse } from "./useResponse";

export const useAuth = () => {
  const { handleError, handleSuccess } = useResponse();
  const router = useRouter();

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onError(error, variables, context) {
      handleError({ title: "Sign up failed", error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
      localStorage.setItem("userInfo", JSON.stringify(data.data));
      // router.push("/");
    },
    retry: 3,
  });

  const signInMutation = useMutation({
    mutationFn: signIn,
    onError(error, variables, context) {
      handleError({ title: "Login failed", error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
      localStorage.setItem("userInfo", JSON.stringify(data.data));
      // router.push("/");
    },
    retry: 3,
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPassword,
    onError(error, variables, context) {
      handleError({ title: "Failed", error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
      router.push("/auth/forgot-password");
    },
    retry: 3,
  });

  const changePasswordMutation = useMutation({
    mutationFn: changePassword,
    onError(error, variables, context) {
      handleError({ title: "Failed", error });
    },
    onSuccess(data, variables, context) {
      handleSuccess({ data });
    },
    retry: 3,
  });

  return {
    signUpMutation,
    signUp: signUpMutation.mutate,
    signInMutation,
    signIn: signInMutation.mutate,
    forgotPasswordMutation,
    forgotPassword: forgotPasswordMutation.mutate,
    changePasswordMutation,
    changePassword: changePasswordMutation.mutate,
  };
};
