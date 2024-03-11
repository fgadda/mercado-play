import Header from "@/components/header"
import Tabs from "@/components/tabs"
import CardContent from "@/components/cards/card-content"
import { LoadMore } from "@/components/cards/load-more"
import { fetchFeedContent } from "@/actions/fetch-feed-content"

export default async function Home() {
  const { results } = await fetchFeedContent({ offset: 0 })

  return (
    <main className="relative min-h-screen">
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs />
        </section>
      </Header>
      <div className="mx-auto my-8 max-w-[1308px] px-[54px]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <CardContent results={results} />
          <LoadMore />
        </div>
      </div>
    </main>
  )
}
