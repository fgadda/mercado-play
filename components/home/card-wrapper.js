import Link from "next/link"

import LoadMore from "@/components/home/load-more"
import Tags from "@/components/tags"
import { fetchFeedContent } from "@/lib/api"

function Card({ content: { title, thumbnail, tags, subtitle, url } }) {
  return (
    <article className="rounded-b-md bg-white drop-shadow transition duration-200 ease-out hover:drop-shadow-lg">
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
    </article>
  )
}

function Cards({ results }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {results.map(result => (
        <Card key={result.title} content={result} />
      ))}
    </div>
  )
}

export default async function CardWrapper({ filter }) {
  const { results, nextPage } = await fetchFeedContent({ filter })
  return (
    <>
      <Cards results={results} />
      {nextPage && <LoadMore filter={filter} />}
    </>
  )
}

CardWrapper.Cards = Cards
