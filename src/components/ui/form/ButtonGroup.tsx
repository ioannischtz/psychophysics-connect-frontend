"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn } from "../../../lib/utils";

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
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-foreground data-[state=on]:text-background data-[state=on]:shadow-sm",
        className,
      )}
      {...props}
      asChild
    >
      <button type="button">{children}</button>
    </ToggleGroupPrimitive.Item>
  );
});
ButtonGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ButtonGroup, ButtonGroupItem };
