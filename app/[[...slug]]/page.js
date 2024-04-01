import { Suspense } from "react"

import { links } from "@/constants/links"
import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"
import Filters from "@/components/layout/header/filters"
import Spinner from "@/components/spinner"
import CardWrapper from "@/components/home/card-wrapper"
import { cn } from "@/lib/utils"

export const dynamicParams = false

export function generateStaticParams() {
  const flatLinks = [...links.tabs, ...Object.values(links.filters).flatMap(category => category)]
  const paths = flatLinks.map(item => ({ slug: item.href.split("/") }))
  return paths
}

export default async function Page({ params }) {
  const { slug } = params
  const [, activeView, activeFilter] = slug || []

  const path = slug?.join("/")
  const viewHasFilters = Object.keys(links.filters).includes(activeView)

  return (
    <>
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs path={path} />
        </section>
        {viewHasFilters && (
          <section className="flex items-center gap-5 py-4">
            <Filters view={activeView} path={path} />
          </section>
        )}
      </Header>

      <section className={cn("mt-8", { "mt-4": viewHasFilters })}>
        <Suspense
          fallback={
            <div className="flex">
              <Spinner className="mx-auto" />
            </div>
          }
        >
          <CardWrapper filter={[activeView, activeFilter].join("/")} />
        </Suspense>
      </section>
    </>
  )
}
