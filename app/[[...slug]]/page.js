import Cards from "@/components/home/cards"
import LoadMore from "@/components/home/load-more"
import { fetchFeedContent } from "@/lib/api"

export default async function Page({ params: { slug } }) {
  const [, view, filter] = slug || []
  const filterParam = filter ? [view, filter].join("/") : view

  const { results, nextPage } = await fetchFeedContent({ filter: filterParam })

  return (
    <section>
      <Cards results={results} />
      {nextPage && <LoadMore filter={filterParam} resultKeys={results.map(item => item.key)} />}
    </section>
  )
}
