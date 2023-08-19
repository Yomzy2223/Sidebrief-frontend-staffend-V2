import {
  createEnterprise,
  deleteEnterprise,
  updateEnterprise,
  viewEnterpriseByEmail,
  viewEnterpriseById,
  viewAllEnterprise,
  getNigerianbanks,
} from "@/api/enterpriseApi";
import { handleError, handleSuccess } from "@/lib/globalFunctions";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useEnterprise = () => {
  const useCreateEnterpriseMutation = () =>
    useMutation({
      mutationFn: createEnterprise,
      onError(error, variables, context) {
        handleError(error);
      },
      onSuccess(data, variables, context) {
        handleSuccess(data);
        // invalid;
      },
      retry: 3,
    });

  const useUpdateEnterpriseMutation = () =>
    useMutation({
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

  const useViewEnterpriseByEmailQuery = (adminEmail: string) =>
    useQuery({
      queryKey: ["Single Enterprise By Email", adminEmail],
      queryFn: ({ queryKey }) => viewEnterpriseByEmail(queryKey[1]),
    });

  const useViewEnterpriseByIdQuery = (id: string) =>
    useQuery({
      queryKey: ["Single Enterprise By Id", id],
      queryFn: ({ queryKey }) => viewEnterpriseById(queryKey[1]),
    });

  const useViewAllEnterpriseQuery = () =>
    useQuery({
      queryKey: ["All Enterprise"],
      queryFn: () => viewAllEnterprise(),
    });

  const useGetNigerianBanksQuery = () =>
    useQuery({
      queryKey: ["Nigerian Banks"],
      queryFn: getNigerianbanks,
    });

  return {
    useCreateEnterpriseMutation,
    // createEnterprise: useCreateEnterpriseMutation.mutate,
    useUpdateEnterpriseMutation,
    // updateEnterprise: updateEnterpriseMutation.mutate,
    deleteEnterpriseMutation,
    // deleteEnterprise: deleteEnterpriseMutation.mutate,
    useViewEnterpriseByEmailQuery,
    useViewEnterpriseByIdQuery,
    useViewAllEnterpriseQuery,
    useGetNigerianBanksQuery,
  };
};
