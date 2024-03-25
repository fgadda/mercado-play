import { Suspense } from "react"

import CardWrapper from "@/components/home/cards"
import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"

export default async function Page() {
  return (
    <>
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs />
        </section>
      </Header>

      <section className="mt-8">
        <Suspense
          fallback={
            <div className="flex">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-400" />
            </div>
          }
        >
          <CardWrapper />
        </Suspense>
      </section>
    </>
  )
}
