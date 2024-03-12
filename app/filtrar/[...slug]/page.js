import { redirect } from "next/navigation"
import Link from "next/link"
import clsx from "clsx"

import CardWrapper from "@/components/cards/cards"
import { LoadMore } from "@/components/cards/load-more"
import { fetchFeedContent } from "@/lib/fetch-feed-content"
import { filters } from "@/contants/filters"
import { links } from "@/contants/links"

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
        <section className="flex items-center gap-5">
          {filters[contentType].map(route => {
            return (
              <Link
                key={route.name}
                href={`/filtrar${route.href}`}
                className={clsx("px-2 hover:text-primary", {
                  "text-primary": `/filtrar${route.href}` === `/filtrar/${resolvedPath}`,
                })}
              >
                {route.name}
              </Link>
            )
          })}
        </section>
      )}
      <section className="mt-8">
        <CardWrapper results={results} />
        <LoadMore />
      </section>
    </>
  )
}
