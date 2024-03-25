import Image from "next/image"
import Link from "next/link"

import Header from "@/components/layout/header/header"
import ShowDetails from "@/components/ver/content-detail"
import { fetchMovie } from "@/lib/api"
import { cn } from "@/lib/utils"

export default async function Page({
  params: {
    slug: [, contentId],
  },
}) {
  const { title, description, tag, subtitle, components, image } = await fetchMovie({ contentId })
  return (
    <>
      <Header hasBackButton />

      <div className="mt-7 flex flex-col rounded-md bg-white shadow-sm lg:flex-row">
        <section className="relative flex-[3] border-r">
          <div className="sticky left-0 right-0 top-0">
            <div className="relative aspect-video rounded-tl-md bg-black">
              <Image
                src={image}
                width="719"
                height="405"
                alt="image"
                className="h-full w-full rounded-tl-md object-contain"
                priority
              />
              <div
                style={{ backgroundColor: "rgba(0,0,0,.6)" }}
                className="absolute inset-0 flex cursor-not-allowed items-center justify-center rounded-tl-md"
              >
                <div className="flex flex-col gap-6">
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#FFFFFF"
                    className="h-[64px] w-auto"
                  >
                    <g>
                      <circle
                        cx="18"
                        cy="18"
                        r="16.75"
                        fill="#000"
                        stroke="#fff"
                        strokeWidth="1.5"
                      ></circle>
                      <path d="M12 27.7V8.5l16 9.6-16 9.6Z" fill="#fff"></path>
                    </g>
                  </svg>
                  <span className="text-2xl font-semibold leading-7 text-white">
                    <u>Ingresá a tu cuenta</u> de Mercado Libre
                    <br />
                    para reproducir gratis este contenido.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 p-5">
              <div className="gap flex flex-col">
                <span className="text-2xl font-semibold leading-[30px]">{title}</span>
                <span>{subtitle}</span>
                <div className="mt-1">
                  <div className="inline-block rounded-sm bg-gray-100 px-1.5 py-0.5 text-xs font-semibold">
                    {tag}
                  </div>
                </div>
              </div>
              <p className="line-clamp-2 leading-5">{description}</p>
              <ShowDetails contentId={contentId} />
            </div>
          </div>
        </section>
        <section className="relative flex flex-[2] flex-col">
          <div className="sticky left-0 right-0 top-0 rounded-t-md border-b bg-white px-5 py-2">
            <span className="text-lg font-semibold">También te puede interesar...</span>
          </div>
          <div className="flex flex-col">
            {components.map(({ title, url, image, subtitle, tag }, index) => (
              <article key={title}>
                <Link
                  href={url}
                  className={cn("flex gap-4 border-b px-5 py-4 hover:bg-gray-100/80", {
                    "border-none": components.length - 1 === index,
                  })}
                >
                  <div className="h-[76px] w-[135px]">
                    <Image
                      src={image}
                      alt={title}
                      width="135"
                      height="76"
                      className="rounded-md object-cover"
                      style={{ minWidth: 135, maxHeight: 76 }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="line-clamp-1 text-lg font-semibold leading-5">{title}</span>
                    <span className="text-xs">{subtitle}</span>
                    <div>
                      <span className="mt-1 rounded-sm bg-gray-100 px-1.5 py-0.5 text-xs font-semibold">
                        {tag}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
