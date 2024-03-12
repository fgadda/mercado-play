import Image from "next/image"

function Card({ content: { title, thumbnail, tag, subtitle } }) {
  return (
    <article className="rounded-b-md bg-white drop-shadow transition duration-200 ease-out hover:drop-shadow-lg">
      <Image
        className="rounded-t-md"
        src={thumbnail}
        width="500"
        height="500"
        alt={title}
        priority
      />
      <div className="flex flex-col gap-2 px-4 py-5 leading-none">
        <p className="text-lg font-semibold leading-5">{title}</p>
        <p className="truncate text-xs">{subtitle}</p>
        <div>
          <p className="mt-1 inline-block rounded-sm bg-gray-100 px-1.5 py-1 text-xs font-semibold">
            {tag}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function CardWrapper({ results }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {results.map(result => (
        <Card key={result.title} content={result} />
      ))}
    </div>
  )
}
