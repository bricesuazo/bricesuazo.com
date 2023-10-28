import { z } from "zod";

import { meta } from "@bricesuazo/constant/config";

import { env } from "../../env.mjs";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { requestGraphql } from "../utils";

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
  getPopularRepos: publicProcedure.query(async () => {
    const { data } = (await requestGraphql(
      `
      query($username: String!) {
        user(login: $username) {
          repositories(
            isFork: false
            isLocked: false
            privacy: PUBLIC
            first: 3
            orderBy: {field: STARGAZERS, direction: DESC}
            ownerAffiliations: OWNER
          ) {
            edges {
              node {
                ... on Repository {
                  name
                  url
                  owner {
                    login
                  }
                  description
                  isArchived
                  forkCount
                  id
                  openGraphImageUrl
                  stargazerCount
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
`,
      {
        username: meta.accounts.github.username,
      },
    )) as { data: unknown };

    const parsedDataSchema = z.object({
      user: z.object({
        repositories: z.object({
          edges: z.array(
            z.object({
              node: z.object({
                name: z.string(),
                url: z.string(),
                owner: z.object({
                  login: z.string(),
                }),
                description: z.string(),
                isArchived: z.boolean(),
                forkCount: z.number(),
                id: z.string(),
                stargazerCount: z.number(),
                primaryLanguage: z.object({
                  name: z.string(),
                  color: z.string(),
                }),
                openGraphImageUrl: z.string().url(),
              }),
            }),
          ),
        }),
      }),
    });

    const parsedData = parsedDataSchema.parse(data);

    return parsedData;
  }),
});
