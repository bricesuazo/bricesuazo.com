import "@bricesuazo/tailwind-config/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/react";

import { meta } from "@bricesuazo/constant/config";
import { cn } from "@bricesuazo/ui/utils";

import { Footer } from "~/components/elements/client/footer";
import { Header } from "~/components/elements/client/header";
import { ThemeProvider, TRPCReactProvider } from "./providers";

// export const runtime = "edge";

/**
 * Since we're passing `headers()` to the `TRPCReactProvider` we need to
 * make the entire app dynamic. You can move the `TRPCReactProvider` further
 * down the tree (e.g. /dashboard and onwards) to make part of the app statically rendered.
 */
export const dynamic = "force-dynamic";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
  title: {
    default: meta.title,
    template: `%s | ${meta.title}`,
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: meta.title,
    locale: meta.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    creator: meta.accounts.twitter.username,
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          font.className,
          "bg-[linear-gradient(180deg,_rgb(255,255,255)_84%,rgb(233,243,255)_100%)] dark:bg-[linear-gradient(180deg,_rgb(16,17,16)_84%,rgb(22,22,23)_100%)]",
        )}
      >
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <TRPCReactProvider headers={headers()}>
            <Header />
            <main className="flex flex-col px-6 antialiased">
              {props.children}
            </main>
            <Footer />
            <Analytics />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
