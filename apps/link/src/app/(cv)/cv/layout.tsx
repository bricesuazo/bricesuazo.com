import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brice Suazo - CV",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}
