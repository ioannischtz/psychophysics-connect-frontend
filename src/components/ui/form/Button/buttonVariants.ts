import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold ring-offset-background transition-colors focus-visible:outline-base focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-base disabled:opacity-50",
  {
    variants: {
      colorScheme: {
        base: "",
        primary: "",
        secondary: "",
        accent: "",
        success: "",
        warning: "",
        destructive: "",
      },
      variant: {
        solid: "",
        outline: "",
        ghost: "",
        link: "",
      },
      shape: {
        rounded: "rounded-md",
        sharp: "rounded-base",
        pill: "rounded-full",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-11 px-8 text-md",
        xl: "h-14 px-10 text-xl",
        icon: "h-10 w-10 text-sm",
      },
    },
    compoundVariants: [
      {
        colorScheme: "base",
        variant: "solid",
        class: "bg-foreground text-background hover:bg-foreground/90",
      },
      {
        colorScheme: "primary",
        variant: "solid",
        class: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        colorScheme: "secondary",
        variant: "solid",
        class: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      },
      {
        colorScheme: "accent",
        variant: "solid",
        class: "bg-accent text-accent-foreground hover:bg-accent/90",
      },
      {
        colorScheme: "success",
        variant: "solid",
        class: "bg-success text-success-foreground hover:bg-success/90",
      },
      {
        colorScheme: "warning",
        variant: "solid",
        class: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      {
        colorScheme: "destructive",
        variant: "solid",
        class:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      {
        colorScheme: "base",
        variant: "outline",
        class:
          "border border-input bg-background font-semibold hover:bg-foreground hover:text-background",
      },
      {
        colorScheme: "primary",
        variant: "outline",
        class:
          "border border-primary bg-background text-primary font-semibold hover:bg-primary hover:text-primary-foreground",
      },
      {
        colorScheme: "secondary",
        variant: "outline",
        class:
          "border border-secondary bg-background text-secondary-foreground font-semibold hover:bg-secondary hover:text-secondary-foreground",
      },
      {
        colorScheme: "accent",
        variant: "outline",
        class:
          "border border-accent bg-background text-accent font-semibold hover:bg-accent hover:text-accent-foreground",
      },
      {
        colorScheme: "success",
        variant: "outline",
        class:
          "border border-success bg-background text-success font-semibold hover:bg-success hover:text-success-foreground",
      },
      {
        colorScheme: "warning",
        variant: "outline",
        class:
          "border border-warning bg-background text-warning font-semibold hover:bg-warning hover:text-warning-foreground",
      },
      {
        colorScheme: "destructive",
        variant: "outline",
        class:
          "border border-destructive bg-background text-destructive font-semibold hover:bg-destructive hover:text-destructive-foreground",
      },
      {
        colorScheme: "base",
        variant: "ghost",
        class:
          "bg-background text-foreground hover:bg-foreground/80 hover:text-background",
      },

      {
        colorScheme: "primary",
        variant: "ghost",
        class:
          "bg-background text-primary hover:bg-primary/60 hover:text-primary-foreground",
      },
      {
        colorScheme: "secondary",
        variant: "ghost",
        class:
          "bg-background text-secondary-foreground hover:bg-secondary/60 hover:text-secondary-foreground",
      },
      {
        colorScheme: "accent",
        variant: "ghost",
        class:
          "bg-background text-accent hover:bg-accent/60 hover:text-accent-foreground",
      },
      {
        colorScheme: "success",
        variant: "ghost",
        class:
          "bg-background text-success hover:bg-success/60 hover:text-success-foreground",
      },
      {
        colorScheme: "warning",
        variant: "ghost",
        class:
          "bg-background text-warning hover:bg-warning/60 hover:text-warning-foreground",
      },
      {
        colorScheme: "destructive",
        variant: "ghost",
        class:
          "bg-background text-destructive hover:bg-destructive/60 hover:text-destructive-foreground",
      },
      {
        colorScheme: "base",
        variant: "link",
        class:
          "bg-background text-foreground underline-offset-4 hover:underline",
      },
      {
        colorScheme: "primary",
        variant: "link",
        class: "bg-background text-primary underline-offset-4 hover:underline",
      },
      {
        colorScheme: "secondary",
        variant: "link",
        class:
          "bg-background text-secondary underline-offset-4 hover:underline",
      },
      {
        colorScheme: "accent",
        variant: "link",
        class: "bg-background text-accent underline-offset-4 hover:underline",
      },
      {
        colorScheme: "success",
        variant: "link",
        class: "bg-background text-success underline-offset-4 hover:underline",
      },
      {
        colorScheme: "warning",
        variant: "link",
        class: "bg-background text-warning underline-offset-4 hover:underline",
      },
      {
        colorScheme: "destructive",
        variant: "link",
        class:
          "bg-background text-destructive underline-offset-4 hover:underline",
      },
    ],
    defaultVariants: {
      colorScheme: "base",
      variant: "solid",
      shape: "rounded",
      size: "md",
    },
  },
);
