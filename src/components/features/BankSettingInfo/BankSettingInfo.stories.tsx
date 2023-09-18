import type { Meta, StoryObj } from "@storybook/react";
import Gtbank from "@/assets/bank/gt-bank-original.png";

import { BankSettingInfo } from "./index";

const meta: Meta<typeof BankSettingInfo> = {
  component: BankSettingInfo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BankSettingInfo>;

export const Admin: Story = {
  args: {
    image: Gtbank.src,
    name: "Guaranty Trust Bank",
    address: "No, 51 West side street",
    adminEmail: "Oluwole@gmail.com",
    brandColor: "#DE4A09",
  },
};

export const BranchAdmin: Story = {
  args: { ...Admin.args },
};
