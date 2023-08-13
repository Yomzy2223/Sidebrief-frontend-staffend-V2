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
