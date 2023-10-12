import { cva } from "class-variance-authority";

export const buttonGroupColorVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background 
   transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50 
   data-[state=on]:shadow-sm`,
  {
    variants: {
      colorScheme: {
        base: "data-[state=on]:bg-foreground data-[state=on]:text-background",
        primary:
          "data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        secondary:
          "data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",
        accent:
          "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        success:
          "data-[state=on]:bg-success data-[state=on]:text-success-foreground",
        warning:
          "data-[state=on]:bg-warning data-[state=on]:text-warning-foreground",
        destructive:
          "data-[state=on]:bg-destructive data-[state=on]:text-destructive-foreground",
      },
    },
  },
);
