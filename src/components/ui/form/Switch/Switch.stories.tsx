import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";
import { colorSchemes } from "../../../../constants/colorSchemes";
import { sizes } from "../../../../constants/sizes";
import { Accessibility } from "lucide-react";

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => <Switch></Switch>,
};

export const Playground: Story = {
  args: {
    colorScheme: "base",
    size: "sm",
  },
  argTypes: {
    colorScheme: { options: colorSchemes, control: "select" },
    size: { options: sizes, control: "select" },
    icon: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => <Switch icon={<Accessibility />} colorScheme="success">
  </Switch>,
};
