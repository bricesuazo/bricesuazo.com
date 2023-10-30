import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { links, projects } from "./constants";

export function middleware(req: NextRequest) {
  const socialSlug = req.nextUrl.pathname.split("/").pop();

  if (socialSlug === undefined) return;

  const socialFetch =
    links.find((link) => link.slug === socialSlug.toLocaleLowerCase()) ??
    projects.find((project) => project.slug === socialSlug.toLocaleLowerCase());

  if (socialFetch === undefined) return;
  return NextResponse.redirect(socialFetch.url);
}
