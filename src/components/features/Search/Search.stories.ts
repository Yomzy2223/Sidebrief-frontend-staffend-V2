import type { Meta, StoryObj } from "@storybook/react";

import { within } from '@storybook/testing-library';
import { Search } from ".";


const meta = {
    component: Search,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    
    
} satisfies Meta<typeof Search>;
export default meta;
type Story = StoryObj<typeof meta>;

export const SearchComponent: Story = {
    args: {
        placeholderValue:'Search for anything'
    }
    
}