import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@bricesuazo/api";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@bricesuazo/api";
