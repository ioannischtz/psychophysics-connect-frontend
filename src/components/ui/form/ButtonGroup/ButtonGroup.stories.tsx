import type { Args, Meta, StoryObj } from "@storybook/react";

import { ButtonGroup, ButtonGroupItem } from "./ButtonGroup.tsx";
import { ColorScheme } from "../../../../constants/colorSchemes.ts";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup defaultValue="option1" type="single">
      <ButtonGroupItem value="option1">Option1</ButtonGroupItem>
      <ButtonGroupItem value="option2">Option2</ButtonGroupItem>
    </ButtonGroup>
  ),
};

const options = ["option1", "option2"];
type Options = typeof options;

const renderItem = (options: Options, args: Args, colorScheme: ColorScheme) => (
  <ButtonGroup {...args} key={JSON.stringify(args)}>
    {options.map((option) => (
      <ButtonGroupItem value={option} key={option} colorScheme={colorScheme}>
        {option}
      </ButtonGroupItem>
    ))}
  </ButtonGroup>
);

const ButtonGroupTempl: Story = {
  args: {
    defaultValue: options[1],
    type: "single",
  },
  argTypes: {
    defaultValue: { options: options, control: "select" },
    type: {
      table: {
        disable: true,
      },
    },
  },
};

export const Primary: Story = {
  ...ButtonGroupTempl,
  render: (args) => renderItem(options, args, "primary"),
};

export const Secondary: Story = {
  ...ButtonGroupTempl,
  render: (args) => renderItem(options, args, "secondary"),
};

export const Accent: Story = {
  ...ButtonGroupTempl,
  render: (args) => renderItem(options, args, "accent"),
};

export const Success: Story = {
  ...ButtonGroupTempl,
  render: (args) => renderItem(options, args, "success"),
};

export const Warning: Story = {
  ...ButtonGroupTempl,
  render: (args) => renderItem(options, args, "warning"),
};

export const Destructive: Story = {
  ...ButtonGroupTempl,
  render: (args) => renderItem(options, args, "destructive"),
};
