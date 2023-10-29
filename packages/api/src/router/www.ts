import { z } from "zod";

import { meta } from "@bricesuazo/constant/config";

import { env } from "../../env.mjs";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { requestGraphql } from "../utils";

// async function getTotalContributionsForYears() {
//   const results = [];
//   let total = 0;
//   const years = await getTotalYears();
//   const since = years[years.length - 1];
//   const to = 0;
//   for (const year of years) {
//     const totalContributions = await getTotalContributionsForYear(year);
//     results.push({ year, totalContributions });
//     total += totalContributions;
//   }
//   return { results, total, dates: { since, to } };
// }

// async function getTotalYears() {
//   const { data } = (await requestGraphql(
//     `
//         query($username: String!) {
//           user(login: $username) {
//               contributionsCollection {
//                 contributionYears
//               }
//             }
//           }
//         `,
//     {
//       username: meta.accounts.github.username,
//     },
//   )) as { data: unknown };
//   return data.user.contributionsCollection.contributionYears;
// }

// export async function getTotalContributionsForYear(year) {
//   const from = `${year}-01-01T00:00:00Z`;
//   const to = `${year}-12-31T23:59:59Z`;

//   const { data } = (await requestGraphql(
//     `
//   query($username: String!, $from: DateTime!, $to: DateTime!) {
//     user(login: $username) {
//       contributionsCollection(from: $from, to: $to) {
//         contributionCalendar {
//           totalContributions
//         }
//       }
//     }
//   }
// `,
//     {
//       username: meta.accounts.github.username,
//       from: from,
//       to: to,
//     },
//   )) as { data: unknown };

//   return data.user.contributionsCollection.contributionCalendar
//     .totalContributions;
// }

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
  getTotalContributionsForYears: publicProcedure.query(() => {
    console.log(
      "🚀 ~ file: www.ts:59 ~ getTotalContributionsForYears:publicProcedure.query ~ meta.accounts.github.username",
      meta.accounts.github.username,
    );
  }),
  getGithubUserData: publicProcedure.query(async () => {
    const { data } = (await requestGraphql(
      `
        query($username: String!) {
          user(login: $username) {
          repositories(
            isFork: false
            isLocked: false
            privacy: PUBLIC
            last: 100
            orderBy: {field: STARGAZERS, direction: DESC}
            ownerAffiliations: OWNER
          ) {
            totalCount
            totalDiskUsage
            edges {
              node {
                ... on Repository {
                  id
                  stargazerCount
                  forkCount
                }
              }
            }
          }
          ... on User {
            followers {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
        }
      }
    `,
      {
        username: meta.accounts.github.username,
      },
    )) as { data: unknown };

    console.log(
      "🚀 ~ file: www.ts:59 ~ getGithubUserData:publicProcedure.query ~ data:",
      data,
    );

    const parsedDataSchema = z.object({
      user: z.object({
        repositories: z.object({
          totalCount: z.number(),
          totalDiskUsage: z.number(),
          edges: z.array(
            z.object({
              node: z.object({
                id: z.string(),
                stargazerCount: z.number(),
                forkCount: z.number(),
              }),
            }),
          ),
        }),
        followers: z.object({
          totalCount: z.number(),
        }),
        starredRepositories: z.object({
          totalCount: z.number(),
        }),
      }),
    });

    const parsedData = parsedDataSchema.parse(data);

    const { repositories, followers, starredRepositories } = parsedData.user;

    const stars = repositories.edges.reduce(
      (acc, { node }) => acc + node.stargazerCount,
      0,
    );

    const forks = repositories.edges.reduce(
      (acc, { node }) => acc + node.forkCount,
      0,
    );

    return {
      userFollowers: followers.totalCount,
      userStarredRepos: starredRepositories.totalCount,
      userStars: stars,
      userForks: forks,
      userPublicRepositoriesCount: repositories.totalCount,
      userPublicRepositoriesDiskUsage: repositories.totalDiskUsage,
    };
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
