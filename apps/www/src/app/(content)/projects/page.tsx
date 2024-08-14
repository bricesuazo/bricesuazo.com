import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Servebeez",
    description: "Booking Services Made Easy",
    url: "https://servebeez.com",
  },
  {
    title: "North High - Official Website",
    description:
      "Official Website of Luis Y. Ferrer Jr. North National High School",
    url: "https://northhigh.edu.ph",
  },
  {
    title: "eBoto",
    description:
      "One-Stop Online Voting Solution — A web-based voting platform that offers secure elections for any type of organization.",
    url: "https://eboto.app",
  },
  {
    title: "Kabsu.me",
    description:
      "A social media platform that's only exclusive for Cavite State University students, faculty, and alumni.",
    url: "https://kabsu.me",
  },
  {
    title: "Swardify",
    description: "A Bidirectional Swardspeak and Tagalog Translator",
    url: "https://swardify.kabsu.me",
  },
  {
    title: "Root Finding",
    description: "Different Methods of Root Finding",
    url: "https://root-finding.kabsu.me",
  },
  {
    title: "My Portfolio Website",
    description:
      "A simple portfolio website that showcases my skills and projects.",
    url: "https://bricesuazo.com",
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
    url: "https://scrtmsgme.vercel.app",
  },
  {
    title: "Jib.im",
    description: "An open-source and powerful link shortener.",
    url: "https://jib.vercel.app",
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

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h4 className="text-center text-lg font-medium">
        Here&apos;s a list of projects I&apos;ve worked on.
      </h4>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                    process.env.VERCEL_URL
                      ? "https://bricesuazo.com"
                      : "http://localhost:3000",
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
