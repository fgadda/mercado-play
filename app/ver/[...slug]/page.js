import Image from "next/image"
import Link from "next/link"

// import BitmovinPlayer from "@/components/ver/player"
import Header from "@/components/layout/header/header"
import ShowDetails from "@/components/ver/content-detail"
import { fetchMovie } from "@/lib/fetch-feed-content"

export default async function Page({
  params: {
    slug: [, contentId],
  },
}) {
  const { title, description, tag, subtitle, components } = await fetchMovie({ contentId })

  return (
    <>
      <Header />

      <div className="mt-7 flex bg-white">
        <section className="relative flex-[3] border-r">
          <div className="sticky left-0 right-0 top-0">
            {/* <BitmovinPlayer /> */}
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
              <ShowDetails />
            </div>
          </div>
        </section>
        <section className="relative flex flex-[2] flex-col">
          <div className="sticky left-0 right-0 top-0 border-b bg-white px-5 py-2">
            <span className="text-lg font-semibold">También te puede interesar...</span>
          </div>
          <div className="flex flex-col">
            {components.map(({ title, url, image, subtitle, tag }) => (
              <article key={title}>
                <Link href={url} className="flex gap-4 border-b px-5 py-4 hover:bg-gray-100/80">
                  <Image
                    src={image}
                    alt={title}
                    width="130"
                    height="76"
                    className="rounded-md object-cover"
                    style={{ height: 76, width: 130 }}
                    priority
                  />
                  <div className="flex flex-col gap-1.5">
                    <span className="truncate text-lg font-semibold leading-5">{title}</span>
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
