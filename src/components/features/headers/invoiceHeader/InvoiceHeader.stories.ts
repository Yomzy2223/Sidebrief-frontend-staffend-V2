import { Meta, StoryObj } from "@storybook/react";
import InvoiceHeader from ".";

const meta = {
  title: "Invoice Header",
  component: InvoiceHeader,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof InvoiceHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { logo: "", dateJoined: "", name: "" },
};
