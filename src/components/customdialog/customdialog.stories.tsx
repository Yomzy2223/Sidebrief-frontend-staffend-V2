import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Dialog, IdialogProps } from "./index";
import { ProgressBar } from "../features/fileUpload/progressBar";
import { FileDisplay } from "./fileDisplay";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

// uses the normal dialog trigger much more accessible
export const NormalDialog: Story = {
  render: (args) => <Dialog {...args} />,
  args: {
    title: "Dialog Title",
    description: "Dialog description something good about this story",
    action: () => console.log("success"),
    actionText: "Done",
    brandColor: "#DE4A09",
    triggerText: "Trigger Dialog",
    dialogType: "normal",
    footer: true,
  },
};

export const DialogWithState: Story = {
  render: (args) => <DialogWithTrigger {...args} />,
  args: { ...NormalDialog.args },
};

export const WithProgressBar: Story = {
  render: (args) => <Dialog {...args} />,
  args: {
    ...NormalDialog.args,
    actionText: "Ok",
    children: <ProgressBar percent={50} />,
    footer: true,
  },
};

export const WithFileDisplay: Story = {
  render: (args) => <Dialog {...args} />,
  args: {
    ...NormalDialog.args,
    title: "Verification successful",
    description: "We were able to verify the Business and the registration number on CAC.",
    children: <FileDisplay />,
  },
};

const DialogWithTrigger = ({ brandColor, children, ...args }: IdialogProps) => {
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  return (
    <>
      <Button color={brandColor} onClick={toggleDialog}>
        Trigger Dialog With State
      </Button>
      <Dialog
        {...args}
        dialogType="state"
        open={openDialog}
        cancel={toggleDialog}
        brandColor={brandColor}
      >
        {children}
      </Dialog>
    </>
  );
};
