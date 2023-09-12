export interface IBank {
  id: string;
  name: string;
  color: string | null;
  slug: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEnterprise {
  id: string;
  name: string;
  address: string;
  adminEmail: string;
  color: string | null;
  logo: string;
  createdAt: string;
  updatedAt: string;
  diligenceManager: IDiligenceManager[];
  diligenceRequest: IRequest[];
}

export interface IRequest {
  id: string;
  name: string;
  registrationNumber: string;
  status: "Completed" | "Verified" | "Unverified" | "In progress";
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  diligenceEnterpriseId: string;
}

export interface IDiligenceManager {
  id: string;
  name: string;
  location: string;
  managerEmail: string;
  createdAt: string;
  updatedAt: string;
  diligenceEnterpriseId: string;
  diligenceStaff: IDiliigenceStaff[];
}

export interface IDiliigenceStaff {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  diligenceManagerId: string;
}

export interface IDocument {
  id: string;
  name: string;
  type: string;
  description: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  diligenceRequestId: string;
}
