import CardWrapper from "@/components/cards/cards"
import LoadMore from "@/components/cards/load-more"
import { fetchFeedContent } from "@/lib/fetch-feed-content"
import Header from "@/components/header"
import Tabs from "@/components/tabs"

export default async function Home() {
  const { results } = await fetchFeedContent({})

  return (
    <>
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs />
        </section>
      </Header>

      <section className="mt-8">
        <CardWrapper results={results} />
        <LoadMore />
      </section>
    </>
  )
}
