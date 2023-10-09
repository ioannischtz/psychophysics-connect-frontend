import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

const card_title = "Card Title";
const card_description = "card description";
const content_img =
  "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=420&h=250&dpr=1";
const content_txt = "The quick brown fox jumps over the lazy dog.";

export const Default: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>{card_title}</CardTitle>
        <CardDescription>{card_description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={content_img} />
        <p className="pt-2">{content_txt}</p>
      </CardContent>
      <CardFooter className="m-4 py-2 outline outline-border outline-1 flex-col w-100 items-start">
        <h3>Card Footer</h3>
        <p>This is the footer ok?</p>
      </CardFooter>
    </Card>
  ),
};
