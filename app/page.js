import { Suspense } from "react"

import CardWrapper from "@/components/home/card-wrapper"
import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"
import Spinner from "@/components/spinner"

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
              <Spinner className="mx-auto" />
            </div>
          }
        >
          <CardWrapper />
        </Suspense>
      </section>
    </>
  )
}
