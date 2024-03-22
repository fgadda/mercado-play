import CardWrapper from "@/components/home/cards"
import LoadMore from "@/components/home/load-more"
import { fetchFeedContent } from "@/lib/api"
import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"

export default async function Page() {
  const { results, nextPage } = await fetchFeedContent({})

  return (
    <>
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs />
        </section>
      </Header>

      <section className="mt-8">
        <CardWrapper results={results} />
        {nextPage && <LoadMore />}
      </section>
    </>
  )
}
