import { client } from "@/lib/config";
import type { IBank, IEnterprise } from "@/types/returns";
import type { dataReturntype } from "@/types";

interface createType {
  name: string;
  address: string;
  adminEmail: string;
  logo?: string;
  color?: string | null;
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
  return await client.put(`/diligence/enterprise/${formInfo.enterpriseId}`, formInfo);
};

// Delete an enterprise
export const deleteEnterprise = async (enterpriseId: string) => {
  return await client.delete(`/diligence/enterprise/${enterpriseId}`);
};

// View an enterprise email
export const viewEnterpriseByEmail = async (adminEmail: string) => {
  return await client.get<dataReturntype<IEnterprise>>(
    `/diligence/enterpriseByEmail/${adminEmail}`
  );
};

// View an enterprise by enterprise id
export const viewEnterpriseById = async (enterpriseId: string) => {
  return await client.get<dataReturntype<IEnterprise>>(`/diligence/enterprise/${enterpriseId}`);
};

// View all enterprise
export const viewAllEnterprise = async () => {
  return await client.get<dataReturntype<IEnterprise[]>>("/diligence/enterprise");
};

// Get all Nigerian Banks
export const getNigerianbanks = async () => {
  return await client.get<dataReturntype<IBank[]>>("/diligence/nigerianBank");
};
