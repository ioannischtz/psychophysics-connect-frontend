import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";
import { Input } from "../../form/Input/Input";
import { Label } from "../../data_display/Label/Label";
import { Button } from "../../form/Button/Button";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

type PlayableSheetProps = {
  side: SheetSide;
  // size: SheetSize;
};

const PlayableSheet = ({ side }: PlayableSheetProps) => (
  <div className="grid grid-cols-2 gap-2 w-1/4">
    <Sheet key={side}>
      <SheetTrigger asChild>
        <Button variant="outline">{side}</Button>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
);

const meta: Meta<typeof PlayableSheet> = {
  component: PlayableSheet,
};

export default meta;

type Story = StoryObj<typeof PlayableSheet>;

export const Playground: Story = {
  args: {
    side: "top",
  },
  argTypes: {
    side: {
      options: SHEET_SIDES,
      control: "select",
    },
  },
};
