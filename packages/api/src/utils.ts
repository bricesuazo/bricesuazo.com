import { env } from "../env.mjs";

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
