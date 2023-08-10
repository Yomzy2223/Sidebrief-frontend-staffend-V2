import { client } from "@/lib/config";

interface createType {
  name: string;
  address: string;
  adminEmail: string;
  logo?: string;
  color?: string;
}

interface updateType extends createType {
  enterpriseId: string;
}

// ENTERPRISE API
// --------------------------------------------------------------------------------
// Create an enterprise
export const createEnterprise = async (formInfo: createType) => {
  return await client.post("/diligence/enterprise", formInfo);
};

// Update an enterprise
export const updateEnterprise = async (formInfo: updateType) => {
  return await client.put(
    `/diligence/enterprise/${formInfo.enterpriseId}`,
    formInfo
  );
};

// Delete an enterprise
export const deleteEnterprise = async (enterpriseId: string) => {
  return await client.delete(`/diligence/enterprise/${enterpriseId}`);
};

// View an enterprise email
export const viewEnterpriseByEmail = async (adminEmail: string) => {
  return await client.get(`/diligence/enterpriseByEmail/${adminEmail}`);
};

// View an enterprise by enterprise id
export const viewEnterpriseById = async (enterpriseId: string) => {
  return await client.get(`/diligence/enterpriseByEmail/${enterpriseId}`);
};

// View all enterprise
export const viewAllEnterprise = async () => {
  return await client.post("/diligence/enterprises");
};
