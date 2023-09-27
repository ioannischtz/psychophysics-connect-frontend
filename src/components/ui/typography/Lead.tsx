import { HTMLProps, ReactNode } from "react";

type LeadProps = {
  children: ReactNode;
} & HTMLProps<HTMLParagraphElement>;

export default function Lead({ children, className, ...rest }: LeadProps) {
  return (
    <p className={`text-xl text-muted-foreground ${className}`} {...rest}>
      {children}
    </p>
  );
}
