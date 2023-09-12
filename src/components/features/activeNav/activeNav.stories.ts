import type { Meta, StoryObj } from "@storybook/react";


import { ActiveNav } from ".";


const meta = {
    component: ActiveNav,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    
    
} satisfies Meta<typeof ActiveNav>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveTabComponent: Story = {
    args: {
        title:'draft',
        path: 'auth/login',
       
        length: 3

    },
    
};
export const ActiveTabStatusComponent: Story = {
    args: {
        title:'Pending',
        status:true,
        path: 'auth/login',
        length: 3


    },
    
};