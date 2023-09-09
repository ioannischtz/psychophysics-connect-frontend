import { HTMLProps, ReactNode } from "react";

type TypographyListProps = {
  children: ReactNode;
} & HTMLProps<HTMLUListElement>;

export default function BulletList({
  children,
  className,
  ...rest
}: TypographyListProps) {
  return (
    <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`} {...rest}>
      {children}
    </ul>
  );
}
