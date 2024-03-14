import CardWrapper from "@/components/home/cards"
import LoadMore from "@/components/home/load-more"
import { fetchFeedContent } from "@/lib/fetch-feed-content"
import { filters } from "@/constants/filters"
import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"
import Filters from "@/components/layout/header/filters"

export default async function Page({
  params: {
    slug: [activeView, filter],
  },
}) {
  const currentSlug = filter ? `${activeView}/${filter}` : activeView
  const viewHasFilters = Object.keys(filters).includes(activeView)

  const { results, nextPage } = await fetchFeedContent({ filter: currentSlug })

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

      <section className="mt-8">
        <CardWrapper results={results} />
        {nextPage && <LoadMore currentSlug={currentSlug} />}
      </section>
    </>
  )
}
