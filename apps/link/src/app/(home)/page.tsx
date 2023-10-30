import Link from "next/link";

import { links, projects } from "~/constants";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-screen-sm flex-col items-center justify-center gap-y-8 py-8 text-base sm:gap-y-16">
      <div className="">
        {/* <Link
          href="/cv"
          className="flex w-fit items-center gap-x-2 rounded-md border border-gray-500 border-opacity-0 px-4 py-2 hover:border-opacity-100"
        >
          My Curriculum Vitae (CV)
        </Link> */}
        <Link
          href="/cv"
          className="flex w-fit items-center gap-x-2 rounded-md border border-gray-500 border-opacity-0 px-4 py-2 hover:border-opacity-100"
        >
          My Curriculum Vitae (CV)
        </Link>
      </div>

      <div>
        <p className="mb-2 text-center text-base font-semibold">Links</p>
        <ul className="flex flex-wrap justify-center gap-2">
          {links.map((link, index) => {
            const Icon = links[index]?.icon;
            return (
              <li key={link.id}>
                <Link
                  href={link.url}
                  target="_blank"
                  className="flex w-fit items-center gap-x-2 rounded-md border border-gray-500 border-opacity-0 px-4 py-2 hover:border-opacity-100"
                >
                  {Icon && <Icon />}
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="mb-2 text-center text-base font-semibold">Projects</p>
        <ul className="flex flex-wrap justify-center gap-2">
          {projects.map((project) => {
            return (
              <li key={project.id}>
                <Link
                  href={project.url}
                  target="_blank"
                  className="flex w-fit items-center gap-x-2 rounded-md border border-gray-500 border-opacity-0 px-4 py-2 hover:border-opacity-100"
                >
                  {project.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
