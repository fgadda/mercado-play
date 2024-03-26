import Link from "next/link"

import Tags from "@/components/tags"
import { cn } from "@/lib/utils"

const CardContent = ({ components }) => {
  return components.map(({ title, url, image, subtitle, tags }, index) => (
    <article key={title}>
      <Link
        href={url}
        className={cn("flex gap-4 border-b px-5 py-4 hover:bg-gray-100/80", {
          "border-none": components.length - 1 === index,
        })}
      >
        <div className="h-[76px] w-[135px]">
          <img
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
          <div className="inline-block">
            <Tags tags={[tags[0]]} />
          </div>
        </div>
      </Link>
    </article>
  ))
}

export default function RelatedContent({ components }) {
  return (
    <>
      <div className="sticky left-0 right-0 top-0 rounded-t-md border-b bg-white px-5 py-2">
        <span className="text-lg font-semibold">También te puede interesar...</span>
      </div>
      <div className="flex flex-col">
        <CardContent components={components} />
      </div>
    </>
  )
}
