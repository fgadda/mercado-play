import Cards from "@/components/home/cards"
import LoadMore from "@/components/home/load-more"
import { fetchFeedContent } from "@/lib/api"

export default async function Page() {
  const { results, nextPage } = await fetchFeedContent({})

  return (
    <Cards.Container>
      <Cards results={results} />
      {nextPage && <LoadMore resultKeys={results.map(item => item.key)} />}
    </Cards.Container>
  )
}
