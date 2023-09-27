import { HTMLProps, ReactNode } from "react";

type H3Props = {
  children: ReactNode;
} & HTMLProps<HTMLHeadingElement>;

export default function H3({ children, className, ...rest }: H3Props) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      {...rest}
    >
      {children}
    </h3>
  );
}
