"use client";

import { usePathname } from "next/navigation";

import { footer, nav } from "@bricesuazo/constant/config";

export default function ContentLayout(
  props: React.PropsWithChildren<{ title: string }>,
) {
  const pathname = usePathname();

  return (
    <>
      <section className="relative">
        <div className="grid h-80 place-items-center bg-cover bg-fixed bg-center pt-20 before:absolute before:inset-0 before:z-[-1] before:bg-[length:30px_30px] before:bg-center before:opacity-5 before:bg-grid-[#000] dark:before:bg-grid-[#fff]">
          <h1 className="text-4xl font-bold">
            {
              nav.left
                .concat(
                  footer.categories[footer.categories.length - 1]?.links ?? [],
                )
                .find((item) => item.href.includes(pathname))?.title
            }
          </h1>
        </div>
      </section>

      <hr className="m-[0_auto] mb-8 h-px w-full border-none bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.2)_50%,transparent)] duration-300 motion-reduce:transition-none dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
      {props.children}
      <hr className="m-[0_auto] mt-8 h-px w-full border-none bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.2)_50%,transparent)] duration-300 motion-reduce:transition-none dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
    </>
  );
}
