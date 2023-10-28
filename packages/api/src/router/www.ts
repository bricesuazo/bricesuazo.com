import { z } from "zod";

import { env } from "../../env.mjs";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const wwwRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, {
          message: "Name must be at least 2 characters.",
        }),
        email: z.string().email({
          message: "Please enter a valid email address.",
        }),
        message: z
          .string()
          .min(10, {
            message: "Message must be at least 10 characters.",
          })
          .max(500, {
            message: "Message must be less than 500 characters.",
          }),
      }),
    )
    .mutation(async ({ input }) => {
      const embed = {
        title: "📩 New message from bricesuazo.com",
        description: `>>> ${input.message.toString().trim()}`,
        color: 5759645,
        fields: [
          {
            name: "🧑‍🦱 Name",
            value: `\`\`\`${input.name.toString().trim()}\`\`\``,
            inline: true,
          },
          {
            name: "📨 Email",
            value: `\`\`\`${input.email.toString().trim()}\`\`\``,
            inline: true,
          },
        ],
      };

      await fetch(`${env.DISCORD_WEBHOOK_URL}?wait=true`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          avatar_url: "https://bricesuazo.com/favicon.ico",
          embeds: [embed],
        }),
      });
    }),
});
