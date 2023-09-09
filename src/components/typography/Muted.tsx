import { HTMLProps, ReactNode } from "react";

type MutedProps = {
  children: ReactNode;
} & HTMLProps<HTMLParagraphElement>;

export default function Muted({ children, className, ...rest }: MutedProps) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...rest}>
      {children}
    </p>
  );
}
