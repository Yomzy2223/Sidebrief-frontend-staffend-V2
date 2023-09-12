import type { Meta, StoryObj } from "@storybook/react";
import Gtbank from "@/assets/bank/gt-bank-original.png";

import { BankInfo } from "./index";

const meta: Meta<typeof BankInfo> = {
	component: BankInfo,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BankInfo>;

export const Primary: Story = {
	args: {
		image: Gtbank.src,
		name: "Gtbank",
		branch: false,
		numberOfOnboardedBranches: 32,
		numberOfBusinesssVerified: 12198,
		totalAmountSpent: 289323,
	},
};

export const Branch: Story = {
	args: {
		...Primary.args,
		branch: true,
		branchAdminName: "Mr. Oluwole",
		branchAdminEmail: "oluwole@gmail.com",
		brandColor: "#DE4A09",
	},
};
