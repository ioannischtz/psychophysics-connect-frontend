import { HTMLProps, ReactNode } from "react";

type H2Props = {
  children: ReactNode;
} & HTMLProps<HTMLHeadingElement>;

export default function H2({ children, className, ...rest }: H2Props) {
  return (
    <h2
      className={`scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ${className}`}
      {...rest}
    >
      {children}
    </h2>
  );
}
