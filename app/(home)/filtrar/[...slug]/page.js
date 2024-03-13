import CardWrapper from "@/components/cards/cards"
import LoadMore from "@/components/cards/load-more"
import { fetchFeedContent } from "@/lib/fetch-feed-content"
import { filters } from "@/contants/filters"
import Header from "@/components/header"
import Tabs from "@/components/tabs"
import Filters from "@/components/filters"

export default async function Page({
  params: {
    slug: [activeView, filter],
  },
}) {
  const currentSlug = filter ? `${activeView}/${filter}` : activeView
  const { results } = await fetchFeedContent({
    offset: 0,
    filter: currentSlug,
  })
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

      <section className="mt-8">
        <CardWrapper results={results} />
        <LoadMore />
      </section>
    </>
  )
}
