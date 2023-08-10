import {
  createEnterprise,
  deleteEnterprise,
  updateEnterprise,
  viewEnterpriseByEmail,
} from "@/api/enterpriseApi";
import { handleError, handleSuccess } from "@/lib/globalFunctions";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useEnterprise = () => {
  const createEnterpriseMutation = useMutation({
    mutationFn: createEnterprise,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      console.log(data);
      handleSuccess(data);
      invalid;
    },
    retry: 3,
  });

  const updateEnterpriseMutation = useMutation({
    mutationFn: updateEnterprise,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      console.log(data);
      handleSuccess(data);
    },
    retry: 3,
  });

  const deleteEnterpriseMutation = useMutation({
    mutationFn: deleteEnterprise,
    onError(error, variables, context) {
      handleError(error);
    },
    onSuccess(data, variables, context) {
      console.log(data);
      handleSuccess(data);
    },
    retry: 3,
  });

  const viewEnterpriseByEmailQuery = useQuery({
    queryKey: "Single Enterprise",
    queryFn: viewEnterpriseByEmail,
  });

  const viewEnterpriseByIdQuery = useQuery({
    queryKey: ["Single Enterprise"],
    queryFn: viewEnterpriseByEmail,
  });

  const viewAllEnterpriseQuery = useQuery({
    queryKey: ["ALL Enterprise"],
    queryFn: viewEnterpriseByEmail,
  });

  return {
    createEnterpriseMutation,
    createEnterprise: createEnterpriseMutation.mutate,
    updateEnterpriseMutation,
    updateEnterprise: updateEnterpriseMutation.mutate,
    deleteEnterpriseMutation,
    deleteEnterprise: deleteEnterpriseMutation.mutate,
    viewEnterpriseByEmailQuery,
    viewEnterpriseByIdQuery,
    viewAllEnterpriseQuery,
  };
};
