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
import {
	useMutation,
	useQuery,
	UseMutationOptions,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useEnterprise = () => {
	const createEnterpriseMutation = () =>
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

	const viewEnterpriseByEmailQuery = (adminEmail: string) =>
		useQuery({
			queryKey: ["Single Enterprise By Email", adminEmail],
			queryFn: ({ queryKey }) => viewEnterpriseByEmail(queryKey[1]),
		});

	const viewEnterpriseByIdQuery = (id: string) =>
		useQuery({
			queryKey: ["Single Enterprise By Id", id],
			queryFn: ({ queryKey }) => viewEnterpriseById(queryKey[1]),
		});

	const viewAllEnterpriseQuery = () =>
		useQuery({
			queryKey: ["All Enterprise"],
			queryFn: () => viewAllEnterprise,
		});

	const getNigerianBanksQuery = () =>
		useQuery({
			queryKey: ["Nigerian Banks"],
			queryFn: getNigerianbanks,
		});

	return {
		createEnterpriseMutation,
		// createEnterprise: createEnterpriseMutation.mutate,
		updateEnterpriseMutation,
		updateEnterprise: updateEnterpriseMutation.mutate,
		deleteEnterpriseMutation,
		deleteEnterprise: deleteEnterpriseMutation.mutate,
		viewEnterpriseByEmailQuery,
		viewEnterpriseByIdQuery,
		viewAllEnterpriseQuery,
		getNigerianBanksQuery,
	};
};
