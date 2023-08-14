import { client } from "@/lib/config";
import type { IRequest } from "@/types/returns";
import type { dataReturntype } from "@/types";

// REQUESTS API
// --------------------------------------------------------------------------------
// Get all corporate requests
export const getAllRequests = async () => {
	return await client.get<dataReturntype<IRequest[]>>("/diligence/request");
};

// Delete a corporate requests
export const deleteRequest = async (requestId: string) => {
	return await client.delete(`/diligence/request/${requestId}`);
};
