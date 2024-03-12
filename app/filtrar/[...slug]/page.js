import { redirect } from "next/navigation"

import CardWrapper from "@/components/cards/cards"
import { LoadMore } from "@/components/cards/load-more"
import { fetchFeedContent } from "@/lib/fetch-feed-content"
import { filters } from "@/contants/filters"
import { links } from "@/contants/links"
import Filters from "@/components/filters"

export default async function Page({
  params: {
    slug: [contentType, filter],
  },
}) {
  const resolvedPath = filter ? `${contentType}/${filter}` : contentType
  const isValidRoute =
    links.some(item => item.href === `/filtrar/${resolvedPath}`) ||
    filters[contentType]?.some(item => item.href === `/${resolvedPath}`)

  if (!isValidRoute) {
    redirect("/")
  }

  const { results } = await fetchFeedContent({ offset: 0, filter: resolvedPath })
  const viewHasFilter = Object.keys(filters).includes(contentType)

  return (
    <>
      {viewHasFilter && (
        <section className="mt-4 flex items-center gap-5">
          <Filters contentType={contentType} resolvedPath={resolvedPath} />
        </section>
      )}
      <section className="mt-8">
        <CardWrapper results={results} />
        <LoadMore />
      </section>
    </>
  )
}
