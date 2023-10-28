"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { meta, nav } from "@bricesuazo/constant/config";

import MobileNav from "./mobile-nav";

function NavItem({
  href,
  text,
  target,
}: {
  href: string;
  text: string;
  target?: string;
}) {
  const path = usePathname();
  if (!href) return null;
  if (!path) return null;
  let isActive = path.split("/")[1]?.trim() === href.split("/")[1]?.trim();
  if (href.startsWith("https://") || href.startsWith("http://")) {
    isActive = false;
    target = "_blank";
  }
  return (
    <Link
      href={href}
      key={href}
      target={target}
      className={clsx(
        {
          "active text-gray-800 dark:text-gray-200": isActive,
          "text-gray-700 dark:text-neutral-400": !isActive,
        },
        "nav-border relative hidden rounded-lg p-1 transition-all duration-200 before:w-[calc(100%_-_1.5em)] after:w-[calc(100%_-_1.5em)] hover:bg-black/10 hover:text-gray-800 motion-reduce:transition-none dark:hover:bg-white/10 dark:hover:text-gray-200 sm:px-3 sm:py-2 md:inline-block",
      )}
    >
      {text}
      {target && (target === "_blank" || target === "_external") ? (
        <svg
          aria-hidden="true"
          className="absolute right-0 top-2 fill-black opacity-50 dark:fill-white"
          height="7"
          viewBox="0 0 6 6"
          width="7"
        >
          <path
            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
            fill="var(--accents-3)"
          ></path>
        </svg>
      ) : null}
    </Link>
  );
}

export function Nav() {
  return (
    <nav
      key="nav"
      className="fixed top-0 z-[100] mx-0 mt-0 w-full shadow dark:shadow-2xl"
    >
      <div className="firefox:bg-opacity-100 dark:firefox:bg-opacity-100 relative mx-auto flex h-[73px] w-full items-center justify-between border-b-[1px] border-gray-200/60 bg-white bg-opacity-70 pb-4 pt-4 duration-300 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:bg-opacity-70">
        <div className="fixed inset-0 z-[-1] h-[inherit] w-full backdrop-blur-xl" />
        <Link href="/" key="main_page">
          <h3 className=" z-[1001] mx-8 text-xl font-semibold text-gray-800 duration-300 motion-reduce:transition-none dark:text-white">
            {meta.title}.
          </h3>
        </Link>
        <MobileNav />
        <div className="mr-auto flex gap-1">
          {nav.left.map((item, index) => {
            return <NavItem key={index} href={item.href} text={item.title} />;
          })}
          {/* <Popover className="relative" /> */}
        </div>
        <div className="ml-auto flex gap-1">
          {nav.right.map((item, index) => {
            return (
              <NavItem
                key={index}
                href={item.href}
                text={item.title}
                target={item.target}
              />
            );
          })}
          {/* <Settings className="ml-4 text-right" /> */}
        </div>
      </div>
    </nav>
  );
}
