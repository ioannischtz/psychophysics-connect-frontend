import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const values = ["val1", "val2", "val3"];

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={values[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {values.map((val) => (
            <SelectItem value={val} key={val}>
              {val}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={values[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Values</SelectLabel>
          {values.map((val) => (
            <SelectItem value={val} key={val}>
              {val}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithSeparators: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={values[0]} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {values.map((val) => (
            <>
              <SelectSeparator />
              <SelectItem value={val} key={val}>
                {val}
              </SelectItem>
            </>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
