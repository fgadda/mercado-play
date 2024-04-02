import { Suspense } from "react"

import Spinner from "@/components/spinner"
import CardWrapper from "@/components/home/card-wrapper"

const Loading = () => {
  return (
    <div className="flex">
      <Spinner className="mx-auto" />
    </div>
  )
}

export default async function Page({ params: { slug } }) {
  const [, view, filter] = slug || []
  const filterParam = filter ? [view, filter].join("/") : view

  return (
    <section>
      <Suspense fallback={<Loading />}>
        <CardWrapper filter={filterParam} />
      </Suspense>
    </section>
  )
}
