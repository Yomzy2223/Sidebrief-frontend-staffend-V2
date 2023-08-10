import { client } from "@/lib/config";

// REQUESTS API
// --------------------------------------------------------------------------------
// Get all corporate requests
export const getAllRequests = async () => {
  return await client.get("/diligence/allRequests");
};

// Delete a corporate requests
export const deleteRequest = async (requestId: string) => {
  return await client.delete(`/diligence/request/${requestId}`);
};
