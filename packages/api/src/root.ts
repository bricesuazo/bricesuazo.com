import { wwwRouter } from "./router/www";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  www: wwwRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
