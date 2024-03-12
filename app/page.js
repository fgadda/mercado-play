import CardWrapper from "@/components/cards/cards"
import { LoadMore } from "@/components/cards/load-more"
import { fetchFeedContent } from "@/lib/fetch-feed-content"
import Layout from "@/app/filtrar/layout"

export default async function Home() {
  const { results } = await fetchFeedContent({ offset: 0, filter: "" })

  return (
    <Layout>
      <section className="mt-8">
        <CardWrapper results={results} />
        <LoadMore />
      </section>
    </Layout>
  )
}
