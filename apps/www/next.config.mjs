// Importing env files here to validate on build
import "./src/env.mjs";
import "@bricesuazo/auth/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  // // eslint-disable-next-line @typescript-eslint/require-await
  // redirects: async () => [
  //   {
  //     source: "/videos",
  //     destination: "/videos?t=motion",
  //     permanent: true,
  //   },
  // ],
  images: {
    remotePatterns: [{ hostname: "bricesuazo.com" }, { hostname: "localhost" }],
  },
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@bricesuazo/api",
    "@bricesuazo/auth",
    "@bricesuazo/constant",
    "@bricesuazo/db",
    "@bricesuazo/ui",
  ],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
