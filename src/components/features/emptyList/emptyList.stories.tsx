import type { Meta, StoryObj } from "@storybook/react";

import { EmptyList } from "./index";

const meta: Meta<typeof EmptyList> = {
	component: EmptyList,
};

export default meta;

type Story = StoryObj<typeof EmptyList>;

export const Primary: Story = {
	args: {
		description: "Onboarded banks will appear here when you onboard one",
	},
};
