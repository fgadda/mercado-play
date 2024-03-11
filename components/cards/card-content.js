import Image from "next/image"

function Card({ movie: { title, thumbnail, tag, subtitle } }) {
  return (
    <div className="rounded-b-md bg-white drop-shadow transition duration-200 ease-out hover:drop-shadow-lg">
      <Image className="rounded-t-md" src={thumbnail} width="500" height="500" alt="alt" priority />
      <div className="flex flex-col gap-2 px-4 py-5 leading-none">
        <p className="text-lg font-semibold leading-5">{title}</p>
        <p className="truncate text-xs">{subtitle}</p>
        <div>
          <p className="mt-1 inline-block rounded-sm bg-gray-100 px-1.5 py-1 text-xs font-semibold">
            {tag}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CardContent({ results }) {
  return results?.map(result => <Card key={result.title} movie={result} />)
}
