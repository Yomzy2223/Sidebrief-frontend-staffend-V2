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
}

export interface IRequest {
	id: string;
	name: string;
	registrationNumber: string;
	status: "Completed" | "Verified" | "Unverified" | "In progress";
	createdBy: string;
	createdAt: string;
	updatedAt: string;
}
