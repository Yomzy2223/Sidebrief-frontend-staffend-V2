import { Meta, StoryObj } from "@storybook/react";

import { AddOrEditBank } from "./index";

const meta: Meta<typeof AddOrEditBank> = {
	component: AddOrEditBank,
	tags: ["autodocs"],
	title: "components/features/Add or Edit Bank",
};

export default meta;

type Story = StoryObj<typeof AddOrEditBank>;

export const AddBank: Story = {
	args: {
		triggerText: "Add a bank",
		variant: "add",
		banks: [
			{
				id: "1016545b-72d5-49b0-976d-938953bc1b2b",
				name: "Access Bank",
			},
			{
				id: "3f7ebce7-f619-47a7-bf91-800c04b3e502",
				name: "Access Bank (Diamond)",
			},
			{
				id: "33b7dcfa-a8b4-4abd-b98d-36b43271e720",
				name: "ALAT by WEMA",
			},
			{
				id: "8df4418f-67bb-478c-a562-5758631cbbaa",
				name: "ASO Savings and Loans",
			},
			{
				id: "d13fb496-2eea-4caa-b29a-63124fcfdb47",
				name: "Bowen Microfinance Bank",
			},
			{
				id: "eadbe963-e272-4222-a914-c39f4926fc39",
				name: "CEMCS Microfinance Bank",
			},
			{
				id: "e50626b3-efad-4953-83aa-3e448a3435f5",
				name: "Citibank Nigeria",
			},
			{
				id: "db38db82-fd9b-41af-a9a6-93bc81bfec94",
				name: "Ecobank Nigeria",
			},
			{
				id: "f53e8210-9e52-4fe4-aef1-e7629b8f482a",
				name: "Ekondo Microfinance Bank",
			},
			{
				id: "52d11cfc-889a-4480-9143-3d539c164da1",
				name: "Fidelity Bank",
			},
			{
				id: "1d34ff22-963e-48b5-b48c-a0a41cfb5f4d",
				name: "First Bank of Nigeria",
			},
			{
				id: "9f663120-9d7f-4877-89f4-537d87470922",
				name: "First City Monument Bank",
			},
			{
				id: "1fb36260-6a86-4ef3-af9e-e21797e65e78",
				name: "Globus Bank",
			},
			{
				id: "3e8b504e-7c46-481d-bbbd-a1276a825071",
				name: "Guaranty Trust Bank",
			},
			{
				id: "6b7a29c8-57f0-49ab-8690-cb94ca052cbc",
				name: "Hasal Microfinance Bank",
			},
			{
				id: "769a26cb-0a60-413a-979b-e9f21e1a1358",
				name: "Heritage Bank",
			},
			{
				id: "f27f008d-ac2f-4d29-928d-57e9e1d23c54",
				name: "Jaiz Bank",
			},
			{
				id: "7b007a82-0a04-4178-82b6-3f7947669f95",
				name: "Keystone Bank",
			},
		],
	},
};

export const EditBank: Story = {
	args: {
		triggerText: "Edit",
		variant: "edit",
		bankname: "Guaranty Trust Bank",
		adminName: "Oluwole Sayo",
		adminEmail: "oluwole@gmail.com",
	},
};
