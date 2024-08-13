"use client";

import Link from "next/link";
import { AlertTriangleIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@bricesuazo/ui/ui/button";

export default function NotFound() {
  return (
    <div className="grid min-h-screen flex-1 place-items-center">
      <div className="max-w-4xl rounded-md border px-9 py-6 shadow-2xl duration-200 motion-reduce:transition-none">
        <div className="mx-auto mb-3 w-fit rounded-full border p-4">
          <AlertTriangleIcon className="h-10 w-10 text-red-500" />
        </div>
        <h1 className="text-fill-transparent mx-0 mt-0 bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text text-center text-3xl font-semibold">
          404 - Page not found
        </h1>
        <p className="text-balance mt-3 text-center text-neutral-800 dark:text-neutral-200">
          We&apos;re sorry — we can&apos;t find the page you&apos;re looking
          for.
        </p>
        <div className="mt-3 flex justify-center">
          <Button asChild className="group">
            <Link href="/">
              Go home{" "}
              <ArrowRightIcon
                size="1rem"
                className="ml-1 transition group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
