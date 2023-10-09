import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./Toggle";
import { sizes } from "../../../../constants/sizes";
import { ItalicIcon } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => <Toggle>Toggle Me</Toggle>,
};

export const Playground: Story = {
  args: {
    variant: "outline",
    size: "lg",
    children: "Toggle Me",
  },
  argTypes: {
    variant: {
      options: ["default", "outline"],
      control: "inline-radio",
    },
    size: {
      options: sizes,
      control: "select",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <Toggle variant="outline">
      <ItalicIcon />
    </Toggle>
  ),
};
