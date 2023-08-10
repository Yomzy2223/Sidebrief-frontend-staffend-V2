import { changePassword, forgotPassword, signIn, signUp } from "@/api/authApi";
import { handleError, handleSuccess } from "@/lib/globalFunctions";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      localStorage.setItem("userInfo", data.data);
      router.push("/");
      handleSuccess(data);
    },
    retry: 3,
  });

  const signInMutation = useMutation({
    mutationFn: signIn,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      console.log(data);
      router.push("/");
      localStorage.setItem("userInfo", data.data);
      handleSuccess(data);
    },
    retry: 3,
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPassword,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      router.push("/auth/new-password");
      handleSuccess(data);
    },
    retry: 3,
  });

  const changePasswordMutation = useMutation({
    mutationFn: changePassword,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      handleSuccess(data);
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
