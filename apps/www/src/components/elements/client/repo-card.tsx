import Image from "next/image";
import Link from "next/link";
import { ArchiveIcon, FolderIcon, SparklesIcon, StarIcon } from "lucide-react";

import type { RouterOutputs } from "@bricesuazo/api";
import { cn } from "@bricesuazo/ui/utils";

export function RepoCard({
  order,
  repo,
}: {
  order: number;
  repo: RouterOutputs["www"]["getPopularRepos"]["user"]["repositories"]["edges"][number]["node"];
}) {
  return (
    <div
      id={repo.id}
      className={cn(
        order > 2 && "hidden md:block",
        "z-10 rounded-xl border p-4 backdrop-blur-md duration-200 ease-in-out hover:border-foreground/20 hover:bg-primary/10 motion-reduce:transition-none",
      )}
    >
      <Image
        unoptimized={true}
        src={repo.openGraphImageUrl}
        alt={`Preview of ${repo.name}`}
        className="mb-4 rounded-xl"
        width={720}
        height={480}
      />
      <div className="flex flex-wrap gap-x-2 text-left">
        <Link
          key={repo.id}
          href={repo.url}
          className="line-clamp-1 break-all text-left font-semibold"
          target="_blank"
        >
          <FolderIcon className="inline h-5 w-5 fill-muted stroke-muted-foreground duration-200 motion-reduce:transition-none" />{" "}
          {repo.owner.login}/{repo.name}
        </Link>{" "}
        <span className="inline-flex content-center items-center rounded-lg border-[1px] border-black/[15%] px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/[55%] duration-200 hover:bg-black/[5%] motion-reduce:transition-none dark:border-neutral-800 dark:text-white/[50%] dark:hover:bg-white/[5%]">
          {repo.isArchived ? (
            <>
              <ArchiveIcon className="mr-1 inline-block h-4 w-4 stroke-muted-foreground duration-200 motion-reduce:transition-none" />{" "}
              Archived
            </>
          ) : (
            <>
              <SparklesIcon className="mr-1 inline-block h-4 w-4 stroke-muted-foreground duration-200 motion-reduce:transition-none" />{" "}
              Active
            </>
          )}
        </span>
      </div>
      <p className="line-clamp-2 text-left text-sm text-muted-foreground">
        {repo.description ? repo.description : "No description"}
      </p>
      {/* {repo.repositoryTopics ? (
          <div className="text-left">
            {repo.repositoryTopics.edges.map((topic) => (
              <Link
                key={topic.node.topic.name}
                href={`https://github.com/topics/${topic.node.topic.name}`}
                target="_blank"
              >
                <span className="mr-[10px] mt-1 inline-flex content-center items-center rounded-[2em] border-[1px] border-black/[15%] px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/[60%] duration-200 hover:bg-black/[5%] motion-reduce:transition-none dark:border-neutral-800 dark:text-white/[50%] dark:hover:bg-white/[5%]">
                  #{topic.node.topic.name}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          ""
        )} */}
      <div className="mt-2 flex gap-1 overflow-x-auto">
        <Link
          key="repo_lang"
          href={`${repo.url}/search?l=${
            repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"
          }`}
          target="_blank"
          aria-label={`${
            repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"
          } search`}
        >
          <span className="my-1 flex w-max content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] px-[0.5em] py-[0.12em] text-[88%] text-gray-800/[60%] duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%] dark:hover:bg-white/20">
            <span
              className="mr-1 block h-[12px] w-[12px] rounded-full bg-gray-400 dark:bg-white"
              style={{
                backgroundColor: repo.primaryLanguage
                  ? repo.primaryLanguage.color
                  : "",
              }}
            ></span>{" "}
            <span>
              {repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"}
            </span>
          </span>
        </Link>
        <Link key="repo_stars" href={`${repo.url}/stargazers`} target="_blank">
          <span className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/[60%] duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%] dark:hover:bg-white/20">
            <StarIcon
              className="mr-1 inline h-5 w-5 stroke-muted-foreground duration-200 motion-reduce:transition-none dark:stroke-white/[70%] dark:group-hover:stroke-white"
              aria-hidden="true"
              role="img"
            />{" "}
            <span>{repo.stargazerCount} Stars</span>
          </span>
        </Link>
        <Link
          key="repo_forks"
          href={`${repo.url}/network/members`}
          target="_blank"
        >
          <span className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/[60%] duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%] dark:hover:bg-white/20">
            <svg
              className="mr-1 h-5 w-5 fill-black/[50%] duration-200 motion-reduce:transition-none dark:fill-white/[70%]"
              aria-hidden="true"
              role="img"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M9 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm1 1.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h9a5 5 0 0 0 5-5v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9v-4.1ZM23 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6ZM12 25a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
              />
            </svg>{" "}
            <span>{repo.forkCount} Forks</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export function RepoCardSkeleton({ index }: { index: number }) {
  return (
    <div
      className={cn(
        index > 2 && "hidden md:block",
        "h-full rounded-xl border p-4 duration-200 hover:border-foreground/20 hover:bg-primary/10 hover:shadow-xl motion-reduce:transition-none",
      )}
    >
      <div className="aspect-[16/8] animate-pulse rounded-xl bg-gray-200/[15%]" />
      <div className="mt-5 h-6 w-3/4 animate-pulse rounded-md bg-gray-200/[15%]" />
      <div className="mt-2 hidden h-4 animate-pulse rounded-md bg-gray-200/[15%] md:block" />
      <div className="mt-2 h-4 w-5/6 animate-pulse rounded-md bg-gray-200/[15%]" />
      <div className="mt-2 flex text-left">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            className="mr-2 h-7 w-24 animate-pulse rounded-lg bg-gray-200/[15%]"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
