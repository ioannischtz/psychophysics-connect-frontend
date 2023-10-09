"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "../../../../lib/utils";
import { switchVariants, thumbVariants } from "./switchVariants";
import { VariantProps } from "class-variance-authority";

interface SwitchProps
  extends
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
  VariantProps<typeof switchVariants> {
  icon?: React.ReactNode;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, icon, colorScheme, size, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(switchVariants({ colorScheme, size, className }))}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={cn(thumbVariants({ size }))}>
      {icon && (
        <span className="absolute inset-0 p-0.5 flex items-center justify-center">
          {icon}
        </span>
      )}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
