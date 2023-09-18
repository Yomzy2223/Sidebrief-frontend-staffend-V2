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
  },
};

export const EditBank: Story = {
  args: {
    triggerText: "Edit",
    variant: "edit",
    bankname: "Guaranty Trust Bank",
    adminEmail: "oluwole@gmail.com",
  },
};
