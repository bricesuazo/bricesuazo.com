import Image from "next/image";
import Link from "next/link";

import { getBaseUrl } from "~/trpc/shared";

export default function ProjectsPage() {
  const projects = [
    {
      title: "eBoto Mo",
      description:
        "One-Stop Online Voting Solution — A web-based voting platform that offers secure elections for any type of organization.",
      url: "https://eboto-mo.com",
    },
    {
      title: "CvSU.me",
      description:
        "A social media platform that's only exclusive for Cavite State University students, faculty, and alumni.",
      url: "https://cvsu.me",
    },
    {
      title: "My Portfolio Website",
      description:
        "A simple portfolio website that showcases my skills and projects.",
      url: "https://jib.im",
    },
    {
      title: "Gulaman Entertainment",
      description:
        "Official website of Gulaman Entertainment — We capture stories on the reality of life, love, and other contemporary issues.",
      url: "https://gulaman.vercel.app",
    },
    {
      title: "scrtmsg.me",
      description: "Get message from anonymous.",
      url: "https://scrtmsg.me",
    },
    {
      title: "Jib.im",
      description: "An open-source and powerful link shortener.",
      url: "https://jib.im",
    },
    {
      title: "Amazn.ai",
      description:
        "Supercharge AI interactions with profession-specific prompts, tailored to various fields, for effective engagements.",
      url: "https://amazn-ai.vercel.app",
    },
    {
      title: "Ultimate Form",
      description: "A funny and interactive form.",
      url: "https://ultimate-form.vercel.app",
    },
    {
      title: "Logpic",
      description: "Take your daily attendance with just a click!",
      url: "https://logpic.vercel.app",
    },
    {
      title: "Plant Hub",
      description: "A WordPress Plant Shop.",
      url: "https://github.com/bricesuazo/plant-hub",
    },
  ];
  return (
    <div className="space-y-8">
      <h4 className="text-center text-lg font-medium">
        Here&apos;s a list of projects I&apos;ve worked on.
      </h4>

      <section className="mx-auto grid max-w-screen-lg grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={Math.random()}
            href={project.url}
            target="_blank"
            className="rounded-xl border p-4"
          >
            <div className="space-y-2">
              <div className="relative aspect-video">
                <Image
                  src={new URL(
                    `/api/project?title=${project.title}&description=${project.description}`,
                    getBaseUrl(),
                  ).toString()}
                  alt={project.title}
                  fill
                  className="rounded-xl border object-cover object-center"
                />
              </div>
              <div>
                <p>{project.title}</p>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
