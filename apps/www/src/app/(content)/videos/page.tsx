"use client";

import { redirect, useRouter } from "next/navigation";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@bricesuazo/ui/ui/tabs";

export default function VideosPage({
  searchParams,
}: {
  searchParams: { t?: "motion" | "film" };
}) {
  const router = useRouter();
  if (!searchParams.t) redirect("/videos?t=motion");

  return (
    <div>
      <Tabs
        value={searchParams.t}
        onValueChange={(value) => router.push(`/videos?t=${value}`)}
      >
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="motion">Motion Graphics</TabsTrigger>
            <TabsTrigger value="film">Films / Videos</TabsTrigger>
          </TabsList>
        </div>
        <div className="mt-8">
          <TabsContent value="motion">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Motion Graphics</h1>
            </div>
          </TabsContent>
          <TabsContent value="film">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Films</h1>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
