import type { Meta, StoryObj } from "@storybook/react";

import { Toaster } from "./index";

const meta: Meta<typeof Toaster> = {
  title: "UI/Toast",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Toaster>;

// export const Normal: Story = {
//     args: {
//         children: "Show Toast",
//     }
// }

export const WithTitle: Story = {
  args: {
    title: "Message",
  },
};

export const WithTitleAndDescription: Story = {
  args: {
    title: "Message",
    description: "Messsage sent successfully",
  },
};

export const WithTitleAndDescriptionAndAction: Story = {
  args: {
    title: "Message",
    description: "Messsage sent successfully",
  },
};
