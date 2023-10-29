import { z } from "zod";

import { meta } from "../config";
import { env } from "../env.mjs";

/**
 * @param {object} value Object to strip
 * @returns {object} Stripped object without __typename
 * */
// export function stripTypenames(value) {
//   if (Array.isArray(value)) {
//     return value.map(stripTypenames);
//   } else if (value !== null && typeof value === "object") {
//     const newObject = {};
//     for (const property in value) {
//       if (property !== "__typename") {
//         newObject[property] = stripTypenames(value[property]);
//       }
//     }
//     return newObject;
//   } else {
//     return value;
//   }
// }

/**
 * @param {number} number Bytes to convert
 * @returns {string} Converted bytes
 * */
export const convertBytes = (bytes?: number) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (!bytes) return "n/a";
  const i = Math.floor(Math.log(bytes) / Math.log(1000));
  return `${(bytes / Math.pow(1000, i)).toFixed(1)} ${sizes[i]}`;
};

/**
 * @param {number} number Number to convert
 * @returns {string} Converted number
 * */
export const convertNumber = (number: number) => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    style: "decimal",
    maximumFractionDigits: 2,
  }).format(number);
};

/**
 * @param {string} date Date to convert
 * @returns {string} Converted date
 * */
export const parseISO = (date: string) => {
  const formatted = new Date(date);
  return `${formatted.toLocaleString("en-us", {
    month: "long",
  })} ${formatted.getUTCDate()}, ${formatted.getFullYear()}`;
};

export async function requestGraphql(query: string, variables: unknown) {
  const data = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  return data.json();
}

export async function getTotalYears() {
  const { data: unparsed } = (await requestGraphql(
    `
        query($username: String!) {
          user(login: $username) {
              contributionsCollection {
                contributionYears
              }
            }
          }
        `,
    {
      username: meta.accounts.github.username,
    },
  )) as { data: unknown };

  const parsedSchema = z.object({
    user: z.object({
      contributionsCollection: z.object({
        contributionYears: z.array(z.number()),
      }),
    }),
  });

  const data = parsedSchema.parse(unparsed);

  return data.user.contributionsCollection.contributionYears;
}

export async function getTotalContributionsForYear(year: number) {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const { data: unparsed } = (await requestGraphql(
    `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `,
    {
      username: meta.accounts.github.username,
      from: from,
      to: to,
    },
  )) as { data: unknown };

  const parsedSchema = z.object({
    user: z.object({
      contributionsCollection: z.object({
        contributionCalendar: z.object({
          totalContributions: z.number(),
        }),
      }),
    }),
  });

  const data = parsedSchema.parse(unparsed);

  return data.user.contributionsCollection.contributionCalendar
    .totalContributions;
}
