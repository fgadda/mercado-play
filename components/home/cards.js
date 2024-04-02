import Link from "next/link"

import Tags from "@/components/tags"
import Template from "@/app/[[...slug]]/template"

function Card({ content: { title, thumbnail, tags, subtitle, url } }) {
  return (
    <article className="rounded-b-md bg-white drop-shadow transition duration-200 ease-out hover:drop-shadow-lg">
      <Template>
        <Link href={url}>
          <img
            className="aspect-video rounded-t-md object-cover"
            src={thumbnail}
            width="500"
            height="500"
            alt={title}
          />
          <div className="flex flex-col gap-2 px-4 pb-5 pt-4">
            <p className="line-clamp-2 text-lg font-semibold leading-[22px]">{title}</p>
            <p className="truncate text-xs leading-none">{subtitle}</p>
            <div>
              <Tags tags={tags} />
            </div>
          </div>
        </Link>
      </Template>
    </article>
  )
}

export default function Cards({ results }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {results.map(result => (
        <Card key={result.title} content={result} />
      ))}
    </div>
  )
}
