import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { BadgeHelp } from "lucide-react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button type="button">Default</Button>,
};

export const Playground: Story = {
  args: {
    colorScheme: "destructive",
    variant: "solid",
    shape: "pill",
    size: "lg",
    children: "Button",
  },
  argTypes: {
    colorScheme: { control: "select" },
    variant: { control: "inline-radio" },
    shape: { control: "inline-radio" },
  },
};

export const IconButton: Story = {
  args: {
    colorScheme: "base",
    variant: "solid",
    shape: "rounded",
    size: "icon",
    children: <BadgeHelp />,
  },
  argTypes: {
    colorScheme: { control: "select" },
    variant: { control: "inline-radio" },
    shape: { control: "inline-radio" },
  },
};

export const LeftIconButton: Story = {
  render: () => (
    <Button
      type="button"
      variant="solid"
      size="md"
      shape="rounded"
      colorScheme="success"
    >
      <div className="flex justify-between items-center">
        <BadgeHelp className="pr-1" />
        <div>lIconBtn</div>
      </div>
    </Button>
  ),
};

export const RightIconButton: Story = {
  render: () => (
    <Button
      type="button"
      variant="solid"
      size="md"
      shape="rounded"
      colorScheme="success"
    >
      <div className="flex justify-between items-center">
        <div>rIconBtn</div>
        <BadgeHelp className="pl-1" />
      </div>
    </Button>
  ),
};
