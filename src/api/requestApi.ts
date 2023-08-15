import { client } from "@/lib/config";
import type { IRequest, IDocument } from "@/types/returns";
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

// Get Request Document
export const getRequestdocument = async (requestId: string) => {
  return await client.get<dataReturntype<IDocument[]>>(`/diligence/document/${requestId}`);
};
