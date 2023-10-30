"use client";

import { useState } from "react";
import Link from "next/link";
import { AlignLeftIcon, XIcon } from "lucide-react";

import { nav } from "@bricesuazo/constant/config";
import { Button } from "@bricesuazo/ui/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@bricesuazo/ui/ui/sheet";
import { cn } from "@bricesuazo/ui/utils";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems: { href: string; title: string; target?: string }[] = [
    ...nav.left,
    ...nav.right,
  ];

  return (
    <>
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger className="md:hidden" asChild>
          <Button size="icon" variant="outline">
            {!isMenuOpen ? (
              <AlignLeftIcon size="1rem" />
            ) : (
              <XIcon size="1rem" />
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left">Brice Suazo</SheetTitle>
            <SheetDescription className="text-left">
              Navigation Links
            </SheetDescription>
          </SheetHeader>

          <div className="mt-4">
            {menuItems.map((item, index) => {
              return (
                <Link
                  href={item.href}
                  key={index}
                  target={item.target}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={cn(
                    {
                      "w-0 translate-x-[-16px] border-transparent opacity-0 dark:border-transparent":
                        !isMenuOpen,
                      "w-full translate-x-0 border-muted opacity-100":
                        isMenuOpen,
                    },
                    "group whitespace-nowrap border-b text-sm font-semibold duration-200 motion-reduce:transition-none",
                  )}
                  style={{ transitionDelay: `${150 * index - 50}ms` }}
                >
                  <p className="flex w-auto p-4 pb-4 text-muted-foreground duration-200 group-hover:pl-6 group-hover:text-foreground motion-reduce:transition-none">
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
