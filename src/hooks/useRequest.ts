import { deleteRequest, getAllRequests } from "@/api/requestApi";
import { handleError, handleSuccess } from "@/lib/globalFunctions";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useRequest = () => {
	const viewAllRequestQuery = () =>
		useQuery({
			queryKey: ["All Request"],
			queryFn: getAllRequests,
		});

	return {
		viewAllRequestQuery,
	};
};
