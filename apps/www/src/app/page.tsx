import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader2, StarIcon, UsersIcon } from "lucide-react";
import Balancer from "react-wrap-balancer";

import {
  contact,
  header,
  meta,
  technologies,
} from "@bricesuazo/constant/config";
import { convertNumber } from "@bricesuazo/constant/lib/utils";
import { cn } from "@bricesuazo/ui/utils";

import Dots from "~/components/decorations/dots";
import { Contact } from "~/components/elements/client/contact";
import { GlowEffect } from "~/components/elements/client/glow-effect";
import {
  RepoCard,
  RepoCardSkeleton,
} from "~/components/elements/client/repo-card";
import { api } from "~/trpc/server";

export default function HomePage() {
  // const test = api.www.getSpotifyNowPlaying.useQuery();
  // console.log("🚀 ~ file: page.tsx:41 ~ HomePage ~ test:", test.data);

  return (
    <>
      <div className="bg-cover bg-fixed bg-right before:absolute before:inset-0 before:z-[-1] before:bg-[length:30px_30px] before:bg-center before:opacity-5 before:bg-grid-[#000] dark:before:bg-grid-[#fff]">
        <div className="bg-main-gradient pointer-events-none absolute -top-1/2 bottom-0 left-0 right-0 z-[-1] bg-contain blur-[160px] will-change-contents" />
        <div className="mx-auto flex min-h-screen flex-1 flex-col justify-center duration-300 motion-reduce:transition-none md:w-[90%] xl:w-4/5">
          <div className="md:grid-cols-0 grid items-center gap-x-8 md:grid-cols-5">
            <div className="f-full col-span-2 hidden md:flex">
              <GlowEffect className="z-10">
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  width={500}
                  height={500}
                  priority
                  sizes="100%"
                  className="invert dark:invert-0"
                />
                {/* <CodeCard userData={userData} contributions={contributions} /> */}
              </GlowEffect>
            </div>
            <div className="md:col-span-3">
              <h1 className="relative text-center text-4xl font-bold leading-snug tracking-tight text-secondary-foreground duration-300 md:text-left md:text-5xl lg:text-6xl xl:text-8xl">
                {header.title}
              </h1>
              <h2 className="text-center text-[1.5rem] font-semibold text-secondary-foreground opacity-80 md:text-left">
                {header.subtitle}
              </h2>
              <p className="mt-2 text-center text-muted-foreground md:w-3/4 md:text-left">
                <Balancer>{header.description}</Balancer>
              </p>
              <div className="mt-4 flex justify-center md:block">
                <a
                  href="#additional-info"
                  className="arrow link group relative mt-5 inline-block items-center justify-center p-2 pb-1 pl-0 pr-0 font-semibold"
                >
                  <>
                    More about me
                    <svg
                      className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        d="M1.75 8H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="additional-info">
        <div>
          <hr className="m-[0_auto] mb-8 h-px w-full border-none bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.2)_50%,transparent)] duration-300 motion-reduce:transition-none dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
          <div className="m-[0_auto] grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href={`https://github.com/${meta.accounts.github.username}`}
              target="_blank"
              className="group flex items-center justify-center text-center text-muted-foreground duration-200 hover:text-secondary-foreground motion-reduce:transition-none"
            >
              <>
                <StarIcon
                  className="-mt-1 mr-1 inline h-5 w-5 stroke-muted-foreground duration-200 group-hover:stroke-secondary-foreground motion-reduce:transition-none"
                  aria-hidden="true"
                  role="img"
                />{" "}
                <p>
                  <Suspense
                    fallback={
                      <Loader2 className="inline h-4 w-4 animate-spin" />
                    }
                  >
                    {(async () => {
                      const userData = await api.www.getGithubUserData.query();

                      return convertNumber(userData.userStars);
                    })()}
                  </Suspense>{" "}
                  Stars on repositories
                </p>
              </>
            </Link>

            <Link
              target="_blank"
              className="group flex items-center justify-center text-center text-muted-foreground duration-200 hover:text-secondary-foreground motion-reduce:transition-none"
              href={`https://github.com/${meta.accounts.github.username}`}
            >
              <>
                <svg
                  className="mr-1 inline h-5 w-5 fill-muted-foreground duration-200 group-hover:fill-secondary-foreground motion-reduce:transition-none"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"
                  ></path>
                </svg>
                <p>
                  <Suspense
                    fallback={
                      <Loader2 className="inline h-4 w-4 animate-spin" />
                    }
                  >
                    {(async () => {
                      const contributions =
                        await api.www.getTotalContributionsForYears.query();

                      return convertNumber(contributions.total);
                    })()}
                  </Suspense>{" "}
                  Commits
                </p>
              </>
            </Link>

            <Link
              target="_blank"
              className="group flex items-center justify-center text-center text-muted-foreground duration-200 hover:text-secondary-foreground motion-reduce:transition-none"
              href={`https://github.com/${meta.accounts.github.username}`}
            >
              <>
                <svg
                  viewBox="0 0 32 32"
                  className="-mt-1 mr-1 inline h-5 w-5 fill-muted-foreground duration-200 group-hover:fill-secondary-foreground motion-reduce:transition-none"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    fill="currentColor"
                    d="M9 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm1 1.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h9a5 5 0 0 0 5-5v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9v-4.1ZM23 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6ZM12 25a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
                  />
                </svg>{" "}
                <span>
                  <Suspense
                    fallback={
                      <Loader2 className="inline h-4 w-4 animate-spin" />
                    }
                  >
                    {(async () => {
                      const userData = await api.www.getGithubUserData.query();

                      return convertNumber(userData.userForks);
                    })()}
                  </Suspense>{" "}
                  Repositories forks
                </span>
              </>
            </Link>

            <Link
              href={`https://github.com/${meta.accounts.github.username}?tab=followers`}
              target="_blank"
              className="group flex items-center justify-center text-center text-muted-foreground duration-200 hover:text-secondary-foreground motion-reduce:transition-none"
            >
              <>
                <UsersIcon
                  className="-mt-1 mr-1 inline h-5 w-5 stroke-muted-foreground duration-200 group-hover:stroke-secondary-foreground motion-reduce:transition-none"
                  aria-hidden="true"
                  role="img"
                />{" "}
                <span>
                  <Suspense
                    fallback={
                      <Loader2 className="inline h-4 w-4 animate-spin" />
                    }
                  >
                    {(async () => {
                      const userData = await api.www.getGithubUserData.query();

                      return convertNumber(userData.userFollowers);
                    })()}
                  </Suspense>{" "}
                  Github Followers
                </span>
              </>
            </Link>
          </div>
          <hr className="m-[0_auto] mt-8 h-px w-full border-none bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.2)_50%,transparent)] duration-300 motion-reduce:transition-none dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
        </div>
      </section>
      <section id="about" className="scroll-mt-20">
        <div className="relative mx-auto mb-7 text-center">
          <span className="absolute right-0 top-[90px] z-[-1]">
            <Dots h="107" w="134" />
          </span>
          <span className="absolute -bottom-7 left-0 z-[-1]">
            <Dots h="70" w="134" />
          </span>
          <Image
            src="/assets/svg/sparkles.svg"
            alt="sparkles"
            fill
            className="hide pointer-events-none -z-10 m-[0_auto] animate-pulse"
          />

          <h3 className="m-6 text-center text-[35px] font-semibold tracking-[-0.03em] text-gray-800 duration-300 motion-reduce:transition-none dark:text-white md:text-[35px] lg:text-[37px] xl:text-[40px]">
            About me.
          </h3>

          <div className="mx-auto max-w-screen-sm space-y-4 text-center">
            <p>
              <Balancer>
                I have been coding for more than 5 years. I started my journey
                at 2018.
              </Balancer>
            </p>
            <p>
              <Balancer>
                At first, I learned Java, MySQL, HTML, and CSS to build websites
              </Balancer>
            </p>
            <p>
              <Balancer>
                In October 2021, I started learning React.js, and soon Next.js.
                I fell in love with this technology and I am now using it
                professionally.
              </Balancer>
            </p>
            <p>
              <Balancer>
                In October 2022, I started working with my first SaaS company.
                It is called{" "}
                <Link
                  href="https://www.eboto-mo.com"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  eBoto
                </Link>
                , it is a versatile web-based voting platform that offers secure
                online elections for any type of organization.
              </Balancer>
            </p>
          </div>
        </div>
      </section>

      <section id="repositories" className="scroll-mt-20 pt-12 lg:px-24">
        <div className="relative mx-auto before:absolute before:inset-0 before:z-[-1] before:bg-[length:22px_22px] before:bg-center before:bg-repeat-space before:opacity-10 before:bg-grid-[#000] before:gradient-mask-t-0 dark:before:opacity-20 dark:before:bg-grid-[#fff]">
          <h3 className="m-6 text-center text-[35px] font-semibold tracking-[-0.03em] text-gray-800 duration-300 motion-reduce:transition-none dark:text-white md:text-[35px] lg:text-[37px] xl:text-[40px]">
            Most Popular Projects.
          </h3>
          <div className="relative">
            <div className="xl-grid-cols-4 mb-8 grid grid-cols-1 gap-8 pb-4 text-center md:grid-cols-2 lg:grid-cols-3">
              <Suspense
                fallback={[...Array(6).keys()].map((key, index) => (
                  <RepoCardSkeleton key={key} index={index} />
                ))}
              >
                <Repos />
              </Suspense>
            </div>
            <div className="pointer-events-visible absolute inset-x-0 bottom-0 z-10 flex pt-32 shadow-[0_-10rem_6rem_-2rem_hsl(var(--background))_inset] duration-300 md:pt-80 md:shadow-[0_-12rem_6rem_-2rem_hsl(var(--background))_inset]">
              <div className="flex flex-1 flex-col items-center justify-center duration-200 motion-reduce:transition-none">
                <Link
                  className="arrow link group pointer-events-auto relative inline-block items-center justify-center font-semibold duration-200 motion-reduce:transition-none"
                  href="/projects"
                >
                  <>
                    See more projects
                    <svg
                      className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        d="M1.75 8H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={"techs"} className="scroll-mt-20 pt-12 lg:px-24">
        <div className="relative mx-auto mb-7 text-center">
          <span className="absolute right-0 top-[90px] z-[-1]">
            <Dots h="107" w="134" />
          </span>
          <span className="absolute -bottom-7 left-0 z-[-1]">
            <Dots h="70" w="134" />
          </span>

          <h3 className="m-6 text-center text-[35px] font-semibold tracking-[-0.03em] text-gray-800 duration-300 motion-reduce:transition-none dark:text-white md:text-[35px] lg:text-[37px] xl:text-[40px]">
            Technologies I use.
          </h3>
        </div>
        <div className="mt-6 grid h-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {technologies.map((tech, index) => {
            return (
              <div key={index}>
                {tech.link ? (
                  <Link
                    href={tech.link}
                    target="_blank"
                    className="relative mx-auto flex w-full cursor-pointer items-center justify-between rounded-xl border px-4 py-2 text-sm font-semibold backdrop-blur-[9px] hover:bg-primary/10"
                    prefetch={false}
                  >
                    <Image
                      className={cn(tech.class, "h-8 w-8 rounded-md")}
                      loading="lazy"
                      width={32}
                      height={32}
                      src={tech.icon}
                      alt={tech.name}
                    />
                    <span className="font-semibold">{tech.name}</span>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="relative mx-auto flex w-full cursor-pointer items-center justify-between rounded-xl border px-4 py-2 text-sm font-semibold backdrop-blur-[9px] hover:bg-primary/10"
                  >
                    <Image
                      className={cn(tech.class, "h-8 w-8 rounded-md")}
                      loading="lazy"
                      width={32}
                      height={32}
                      src={tech.icon}
                      alt={tech.name}
                    />
                    <span className="font-semibold">{tech.name}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p className="mt-9 text-center text-xl font-semibold ">
          ...and many others!
        </p>
      </section>

      <section id="contact">
        <div className="h-full scroll-mt-20 py-36 pt-24 lg:px-36">
          <header>
            {/* <Image
              src="/assets/svg/sparkles.svg"
              alt="sparkles"
              fill
              className="hide pointer-events-none m-[0_auto] animate-pulse -z-10"
            /> */}
            <h3 className="m-6 mb-2 text-center text-[35px] font-semibold tracking-[-0.03em] text-secondary-foreground duration-300 motion-reduce:transition-none md:text-[35px] lg:text-[37px] xl:text-[40px]">
              Contact me.
            </h3>
            <p className="pb-1 text-center text-base text-muted-foreground">
              <Balancer>
                Want to order a project? Or do you just want to stay in touch?
              </Balancer>
            </p>
          </header>
          <div className="relative">
            <div className="relative mt-6 grid h-full w-full grid-cols-1 gap-6 divide-x divide-none dark:divide-none md:grid-cols-2">
              <div className="relative m-[0_auto] mb-4 flex w-full max-w-screen-sm rounded-[10px] border-[1px] bg-background p-5 shadow-lg duration-200 motion-reduce:transition-none">
                <Contact />
              </div>
              <div className="space-y-4">
                <p className="text-center text-xl font-semibold md:text-left">
                  Or contact me with...
                </p>
                {contact.links.map((element, index) => (
                  <Link
                    className="ml-auto mt-2 flex h-12 w-full items-center gap-3 rounded-md border bg-background px-4 py-2 text-sm font-semibold backdrop-blur-[9px] hover:bg-primary/10"
                    href={element.href}
                    key={index}
                    target="_blank"
                    prefetch={false}
                  >
                    <>
                      {element.icon} {element.title}
                    </>
                  </Link>
                ))}
              </div>
              <span className="absolute right-0 top-[90px] z-[-1]">
                <Dots h="107" w="134" />
              </span>
              <span className="absolute -bottom-7 left-0 z-[-1]">
                <Dots h="70" w="134" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

async function Repos() {
  const repos = await api.www.getPopularRepos.query();
  const reposData = repos?.user.repositories.edges;
  return reposData.map((repo, index) => {
    return repo.node.owner.login == meta.accounts.github.username ? (
      <RepoCard key={repo.node.id} repo={repo.node} order={index} />
    ) : null;
  });
}
