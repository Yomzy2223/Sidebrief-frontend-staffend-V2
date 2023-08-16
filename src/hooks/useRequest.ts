import { deleteRequest, getAllRequests, getRequestdocument } from "@/api/requestApi";
import { handleError, handleSuccess } from "@/lib/globalFunctions";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useRequest = () => {
  const useViewAllRequestQuery = () =>
    useQuery({
      queryKey: ["All Request"],
      queryFn: getAllRequests,
    });

  const useLazyGetRequestDocumentQuery = (requestId: string) =>
    useQuery({
      queryKey: ["Request Document", requestId],
      queryFn: ({ queryKey }) => getRequestdocument(queryKey[1]),
      enabled: !!requestId,
    });

  return {
    useViewAllRequestQuery,
    useLazyGetRequestDocumentQuery,
  };
};
