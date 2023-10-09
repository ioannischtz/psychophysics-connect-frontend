import { cva } from "class-variance-authority";

export const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50  data-[state=unchecked]:bg-input",
  {
    variants: {
      colorScheme: {
        base: "data-[state=checked]:bg-foreground",
        primary: "data-[state=checked]:bg-primary",
        secondary: "data-[state=checked]:bg-secondary ",
        accent: "data-[state=checked]:bg-accent",
        success: "data-[state=checked]:bg-success",
        warning: "data-[state=checked]:bg-warning",
        destructive: "data-[state=checked]:bg-destructive",
      },
      size: {
        sm: "h-[18px] w-[32px]",
        md: "h-[24px] w-[44px]",
        lg: "h-[32px] w-[60px]",
        xl: "h-[36px] w-[68px]",
      },
    },
    defaultVariants: {
      colorScheme: "primary",
      size: "md",
    },
  },
);

export const thumbVariants = cva(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5 data-[state=checked]:translate-x-3.5",
        md: "h-5 w-5 data-[state=checked]:translate-x-5",
        lg: "h-7 w-7 data-[state=checked]:translate-x-7",
        xl: "h-8 w-8 data-[state=checked]:translate-x-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
