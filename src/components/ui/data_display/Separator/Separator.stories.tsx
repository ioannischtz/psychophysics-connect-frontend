import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "./Separator";

const meta: Meta<typeof Separator> = {
  component: Separator,
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  argTypes: {
    decorative: {
      table: {
        defaultValue: { summary: true },
        type: { summary: "boolean" },
      },
    },
  },
  render: () => (
    <div className="w-[380px] text-sm font-medium leading-none">
      <p>Content 1</p>
      <Separator decorative={true} orientation="horizontal" className="my-4" />
      <p>Content 2</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),
};
