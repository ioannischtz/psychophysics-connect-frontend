"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn } from "../../../../lib/utils";
import { ColorScheme } from "../../../../constants/colorSchemes";
import { buttonGroupColorVariants } from "./buttonGroupVariants";

const ButtonGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        "inline-flex h-10 items-center justify-center border border-border rounded-md bg-background p-1 text-foreground",
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});
ButtonGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ButtonGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & {
    colorScheme?: ColorScheme;
  }
>(({ className, colorScheme = "base", children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(buttonGroupColorVariants({ colorScheme, className }))}
      {...props}
      asChild
    >
      <button type="button">{children}</button>
    </ToggleGroupPrimitive.Item>
  );
});
ButtonGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ButtonGroup, ButtonGroupItem };
