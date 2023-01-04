import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

type LinkProps = NextLinkProps & {
  href: string;
  children: ReactNode;
};

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
