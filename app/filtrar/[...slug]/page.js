import Cards from "@/components/home/cards"
import LoadMore from "@/components/home/load-more"
import { fetchFeedContent } from "@/lib/api"

export default async function Page({ params: { slug } }) {
  const requestParam = slug.join("/")

  const { results, nextPage } = await fetchFeedContent({ filter: requestParam })

  return (
    <Cards.Container>
      <Cards results={results} />
      {nextPage && <LoadMore filter={requestParam} resultKeys={results.map(item => item.key)} />}
    </Cards.Container>
  )
}
