import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    type: {
      options: [
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "time",
        "url",
      ],
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => <Input placeholder="Default Input" type="text" />,
};

export const Playground: Story = {
  args: {
    type: "date",
  },
};
