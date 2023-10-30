"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@bricesuazo/ui/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@bricesuazo/ui/ui/tooltip";

const motion_graphics = [
  {
    title: "AltSwitch's Hardware Wallet with NFT display",
    description:
      "AltSwitch is a market leader in offering rewards in any coin or token, and users have complete control over which rewards they receive.",
    url: "https://www.youtube.com/watch?v=-ZWYphQDVxM",
    image_link: "/assets/videos/motion-graphics/altswitch.jpg",
  },
  {
    title: "Our Beloved Sembreak (그 해 우리는)",
    description: "An intro recreation of Korean Drama, Our Beloved Summer.",
    url: "https://www.youtube.com/watch?v=dUVlJq9yqXI",
    image_link: "/assets/videos/motion-graphics/our-beloved-summer.jpg",
  },
  {
    title: "My 2021 Demo Reel",
    description:
      "A compilation of my best works from 2020 to 2021. I hope you enjoy watching it as much as I enjoyed making it.",
    url: "https://www.facebook.com/BriceSuazo/videos/1101432760386723",
    image_link: "/assets/videos/motion-graphics/demo-reel-2021.jpg",
  },
  {
    title: "Start-Up 스타트업 (bbq version)",
    description: "An intro recreation of Korean Drama, Start-Up.",
    url: "https://www.youtube.com/watch?v=Fo1SoGZTIYk",
    image_link: "/assets/videos/motion-graphics/start-up.jpg",
  },
  {
    title: "Learn CalQtek ONLINE",
    description: "A motion graphics video for CalQtek's online program",
    url: "https://www.facebook.com/percmanila/videos/903358693469256",
    image_link: "/assets/videos/motion-graphics/calqtek.jpg",
  },
  {
    title: "PERCDC 4 basic steps on how to use their site",
    description:
      "Here are the 4 basic steps on how to use our site and how the ONLINE PROGRAM works.",
    url: "https://www.facebook.com/percmanila/videos/231554971459161",
    image_link: "/assets/videos/motion-graphics/percdc.jpg",
  },
];
const films = [
  {
    title: "Noli Me Tángere & El Filibusterismo (Character Portrayal)",
    description:
      "A character portrayal of the characters from the novels Noli Me Tángere and El Filibusterismo by Jose Rizal.",
    url: "https://www.youtube.com/watch?v=HrhHC53v1wc",
    image_link: "/assets/videos/films/nmt-ef.jpg",
  },
  {
    title: "Gulaman Entertainment Demo Reel 2022",
    description: "Gulaman Entertainment's compilation of best works.",
    url: "https://www.facebook.com/GulamanEntertainment/videos/315149584094134",
    image_link: "/assets/videos/films/ge-demo-reel-2022.jpg",
  },
  {
    title: "Oven",
    description:
      "Grand Champion for Paruparo Festival 2021 AVP Making Contest.",
    url: "https://www.facebook.com/watch/?v=716329806008480",
    image_link: "/assets/videos/films/oven.jpg",
  },
  {
    title: "Mula Sa Retaso",
    description:
      "Grand Champion for Paruparo Festival 2020 AVP Making Contest. Gulaman Entertainment & ExPRESS Dasmariñas",
    url: "https://www.youtube.com/watch?v=zIzltvCyEmU",
    image_link: "/assets/videos/films/mula-sa-retaso.jpg",
  },
  {
    title: "Pawer 2x",
    description: "A Superhero Film (Short Film)",
    url: "https://www.youtube.com/watch?v=-I-HOx-UCdE",
    image_link: "/assets/videos/films/pawer-2x.jpg",
  },
  {
    title: "Pawer",
    description: "A Superhero Film (Short Film)",
    url: "https://www.youtube.com/watch?v=oeB-tsgRp_I",
    image_link: "/assets/videos/films/pawer.jpg",
  },
];

const socials = [
  {
    name: "YouTube",
    icon: (
      <svg
        className="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 461.001 461.001"
        xmlBase="preserve"
      >
        <g>
          <path
            style={{ fill: "#F61C0D" }}
            d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728   c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137   C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607   c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
          />
        </g>
      </svg>
    ),
    url: "https://www.youtube.com/bricesuazo",
  },
  {
    name: "TikTok",
    icon: (
      <svg
        className="h-8 w-8 fill-foreground"
        xmlns="http://www.w3.org/2000/svg"
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        version="1.1"
      >
        <title>tiktok</title>
        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
      </svg>
    ),
    url: "https://tiktok.com/@bricesuazo",
  },
];

export default function VideosPage({
  searchParams,
}: {
  searchParams: { t?: "motion" | "film" };
}) {
  const router = useRouter();
  if (!searchParams.t) redirect("/videos?t=motion");

  return (
    <div className="space-y-12">
      <div className="mx-auto max-w-md space-y-2 text-center">
        <p>
          Initially, I started out as a Video Editor, but I quickly realized
          that I wanted to be more involved in the creative process.
        </p>
        <p>
          I&apos;ve been working with motion graphics for over 3 years now.
          I&apos;ve worked on a variety of projects from commercials, to music
          videos, to feature films.
        </p>
        <p>
          I&apos;ve also worked with a variety of clients from small businesses
          to large corporations.
        </p>
      </div>
      <div className="space-y-4">
        <Tabs
          value={searchParams.t}
          onValueChange={(value) =>
            router.push(`/videos?t=${value}`, { scroll: false })
          }
        >
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="motion">Motion Graphics</TabsTrigger>
              <TabsTrigger value="film">Films / Videos</TabsTrigger>
            </TabsList>
          </div>
          <div className="mt-8">
            <TabsContent value="motion" className="space-y-4">
              <h1 className="text-center text-2xl font-bold">
                Motion Graphics
              </h1>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {motion_graphics.map((motion_graphic) => (
                  <Link
                    key={Math.random()}
                    href={motion_graphic.url}
                    target="_blank"
                    className="rounded-xl border p-4"
                  >
                    <div className="space-y-2">
                      <div className="relative aspect-video">
                        <Image
                          src={motion_graphic.image_link}
                          alt={motion_graphic.title}
                          fill
                          className="rounded-xl border object-cover object-center"
                        />
                      </div>
                      <div>
                        <p>{motion_graphic.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {motion_graphic.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="film" className="space-y-4">
              <h1 className="text-center text-2xl font-bold">Films</h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {films.map((film) => (
                  <Link
                    key={Math.random()}
                    href={film.url}
                    target="_blank"
                    className="rounded-xl border p-4"
                  >
                    <div className="space-y-2">
                      <div className="relative aspect-video">
                        <Image
                          src={film.image_link}
                          alt={film.title}
                          fill
                          className="rounded-xl border object-cover object-center"
                        />
                      </div>
                      <div>
                        <p>{film.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {film.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
        <h4 className="text-center text-lg font-semibold">...and more!</h4>

        <p className="space-y-2 text-center">
          You can check out my other video works on my social media accounts.
        </p>

        <TooltipProvider>
          <div className="flex justify-center gap-x-4">
            {socials.map((social) => (
              <Tooltip key={Math.random()} delayDuration={300}>
                <TooltipTrigger asChild>
                  <Link href={social.url} target="_blank">
                    {social.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </div>
  );
}
