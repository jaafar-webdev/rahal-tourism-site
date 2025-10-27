import Link from "next/link";
import { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

export const FooterLink = ({ href, children }: FooterLinkProps) => (
  <Link href={href} className="hover:text-white transition-colors">
    {children}
  </Link>
);
