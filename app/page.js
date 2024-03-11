import CardContent from "@/components/cards/card-content"
import { LoadMore } from "@/components/cards/load-more"
import { fetchFeedContent } from "@/lib/fetch-feed-content"
import Layout from "@/app/filtrar/layout"

export default async function Home() {
  const { results } = await fetchFeedContent({ offset: 0 })

  return (
    <Layout>
      <div className="mx-auto my-8 max-w-[1308px] px-[54px]">
        <CardContent results={results} />
        <LoadMore />
      </div>
    </Layout>
  )
}
