import { HTMLProps, ReactNode } from "react";

type BlockquoteProps = {
  children: ReactNode;
} & HTMLProps<HTMLQuoteElement>;

export default function Blockquote({
  children,
  className,
  ...rest
}: BlockquoteProps) {
  return (
    <blockquote
      className={`mt-6 border-l-2 pl-6 italic ${className}`}
      {...rest}
    >
      {children}
    </blockquote>
  );
}
