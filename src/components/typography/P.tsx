import { HTMLProps, ReactNode } from "react";

type PProps = {
  children: ReactNode;
} & HTMLProps<HTMLParagraphElement>;

export default function P({ children, className, ...rest }: PProps) {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
      {...rest}
    >
      {children}
    </p>
  );
}
