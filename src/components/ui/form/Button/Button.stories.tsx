import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { BadgeHelp } from "lucide-react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => (
    <Button type="button" variant="default" size="default">
      Default
    </Button>
  ),
};

export const Playground: Story = {
  args: {
    variant: "success",
    size: "lg",
    children: "Button",
  },
};

export const IconButton: Story = {
  args: {
    variant: "success",
    size: "icon",
    children: <BadgeHelp />,
  },
};
