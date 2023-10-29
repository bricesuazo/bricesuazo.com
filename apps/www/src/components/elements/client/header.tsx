"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  MonitorDotIcon,
  SettingsIcon,
} from "lucide-react";
import { useTheme } from "next-themes";

import { meta, nav } from "@bricesuazo/constant/config";
import { Button } from "@bricesuazo/ui/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
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

import MobileNav from "./mobile-nav";

export function Header() {
  const path = usePathname();
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
            let isActive =
              path.split("/")[1]?.trim() === item.href.split("/")[1]?.trim();
            if (
              item.href.startsWith("https://") ||
              item.href.startsWith("http://")
            ) {
              isActive = false;
            }
            return (
              <Button
                key={index}
                asChild
                variant={isActive ? "secondary" : "ghost"}
                className="hidden md:block"
              >
                <Link href={item.href} key={item.href}>
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </div>
        <div className="ml-auto flex">
          {nav.right.map((item, index) => {
            return (
              <Button
                key={index}
                asChild
                variant="link"
                className="group hidden gap-x-2 p-2 text-muted-foreground hover:text-secondary-foreground md:inline-flex"
              >
                <Link href={item.href} key={item.href} target={item.target}>
                  {item.title}{" "}
                  <ExternalLinkIcon
                    size="0.75rem"
                    className="opacity-0 group-hover:opacity-100"
                  />
                </Link>
              </Button>
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
              <DialogFooter>
                <div className="flex w-full items-center justify-between">
                  <Button
                    variant="link"
                    size="sm"
                    className="text-muted-foreground transition hover:text-secondary-foreground dark:hover:text-white"
                    asChild
                  >
                    <Link
                      href="https://github.com/bricesuazo/bricesuazo.com"
                      target="_blank"
                    >
                      Source Code{" "}
                      <ExternalLinkIcon size="0.75rem" className="ml-1" />
                    </Link>
                  </Button>
                  <DialogClose asChild>
                    <Button variant="secondary" className="group">
                      Close{" "}
                      <ArrowRightIcon
                        size="1rem"
                        className="ml-1 transition group-hover:translate-x-1"
                      />
                    </Button>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
}
