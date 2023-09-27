import { HTMLProps, ReactNode } from "react";

type H4Props = {
  children: ReactNode;
} & HTMLProps<HTMLHeadingElement>;

export default function H4({ children, className, ...rest }: H4Props) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
      {...rest}
    >
      {children}
    </h4>
  );
}
