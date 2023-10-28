"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MonitorDotIcon, SettingsIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { meta, nav } from "@bricesuazo/constant/config";
import { Button } from "@bricesuazo/ui/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@bricesuazo/ui/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@bricesuazo/ui/ui/select";
import { cn } from "@bricesuazo/ui/utils";

import MobileNav from "./mobile-nav";

function HeaderItem({
  href,
  text,
  target,
}: {
  href: string;
  text: string;
  target?: string;
}) {
  const path = usePathname();
  let isActive = path.split("/")[1]?.trim() === href.split("/")[1]?.trim();
  if (href.startsWith("https://") || href.startsWith("http://")) {
    isActive = false;
    target = "_blank";
  }
  return (
    <Button
      asChild
      variant={isActive ? "secondary" : "ghost"}
      className="hidden md:block"
    >
      <Link href={href} key={href} target={target}>
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
    </Button>
  );
}

export function Header() {
  const { setTheme, theme } = useTheme();
  return (
    <nav key="nav" className="fixed top-0 z-50 w-full shadow dark:shadow-2xl">
      <div className="firefox:bg-opacity-100 dark:firefox:bg-opacity-100 relative mx-auto flex h-20 items-center justify-between border-b-[1px] bg-opacity-70 px-6 py-4 duration-300 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:bg-opacity-70">
        <div className="fixed inset-0 z-[-1] h-[inherit] backdrop-blur-xl" />
        <Link
          href="/"
          className="mr-8 text-xl font-semibold text-gray-800 duration-300 motion-reduce:transition-none dark:text-white"
        >
          {meta.title}.
        </Link>
        <MobileNav />
        <div className="mr-auto flex gap-2">
          {nav.left.map((item, index) => {
            return (
              <HeaderItem key={index} href={item.href} text={item.title} />
            );
          })}
        </div>
        <div className="ml-auto flex gap-1">
          {nav.right.map((item, index) => {
            return (
              <HeaderItem
                key={index}
                href={item.href}
                text={item.title}
                target={item.target}
              />
            );
          })}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="icon" className="group">
                <SettingsIcon
                  size="1rem"
                  className="duration-500 group-hover:rotate-180"
                />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Settings</DialogTitle>
                <DialogDescription>
                  Here you can change your settings, e.g. website theme. Changes
                  will be saved automatically.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <MonitorDotIcon className="text-muted-foreground" />
                  <p>Theme</p>
                </div>
                <Select
                  value={theme}
                  onValueChange={(value) => {
                    setTheme(value);
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}
