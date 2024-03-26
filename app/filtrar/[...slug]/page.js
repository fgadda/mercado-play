import { Suspense } from "react"

import CardWrapper from "@/components/home/cards"
import { filters } from "@/constants/filters"
import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"
import Filters from "@/components/layout/header/filters"
import Spinner from "@/components/spinner"
import { cn } from "@/lib/utils"

export default async function Page({
  params: {
    slug: [activeView, filter],
  },
}) {
  const currentSlug = filter ? `${activeView}/${filter}` : activeView
  const viewHasFilters = Object.keys(filters).includes(activeView)

  return (
    <>
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs />
        </section>
        {viewHasFilters && (
          <section className="flex items-center gap-5 py-4">
            <Filters activeView={activeView} currentSlug={currentSlug} />
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
          <CardWrapper filter={currentSlug} />
        </Suspense>
      </section>
    </>
  )
}
