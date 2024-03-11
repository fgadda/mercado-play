"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import { fetchFeedContent } from "@/actions/fetch-feed-content"
import CardContent from "./card-content"

export function LoadMore() {
  const [feedContent, setFeedContent] = useState({ results: [], nextPage: {} })
  const [offset, setOffset] = useState(24)

  const { ref, inView } = useInView()

  const loadMoreResults = async offset => {
    const { results, nextPage } = await fetchFeedContent({ offset })
    setFeedContent({ results: [...feedContent.results, ...results], nextPage })
  }

  useEffect(() => {
    if (inView) {
      loadMoreResults(offset)
      setOffset(prevOffset => prevOffset + 24)
    }
  }, [inView])

  return (
    <>
      <CardContent results={feedContent.results} />
      {feedContent.nextPage !== null && (
        <div
          className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
          ref={ref}
        >
          spinner hola hola
        </div>
      )}
    </>
  )
}
