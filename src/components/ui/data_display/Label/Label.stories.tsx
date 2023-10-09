import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";
import { Input } from "../../form/Input/Input";

const meta: Meta<typeof Label> = {
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Label for `Email` Input</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};
