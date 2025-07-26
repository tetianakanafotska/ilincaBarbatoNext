"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode, AnchorHTMLAttributes } from "react";
import { useRouter, usePathname } from "next/navigation";

interface TransitionLinkProps
  extends LinkProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink = ({ children, href, ...props }: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === href) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    const body = document.querySelector("main");
    body?.classList.add("page-transition");
    await sleep(100);
    router.push(href);
    await sleep(200);
    body?.classList.remove("page-transition");
  };

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
};

export default TransitionLink;
