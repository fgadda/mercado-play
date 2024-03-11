"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import { fetchFeedContent } from "@/lib/fetch-feed-content"
import CardContent from "./card-content"

export function LoadMore() {
  const [feedContent, setFeedContent] = useState({ results: [], nextPage: {} })
  const [offset, setOffset] = useState(24)

  const { ref, inView } = useInView()

  useEffect(() => {
    const loadMoreResults = async offset => {
      const { results, nextPage } = await fetchFeedContent({ offset })
      setFeedContent({ results: [...feedContent.results, ...results], nextPage })
    }

    if (inView) {
      loadMoreResults(offset)
      setOffset(prevOffset => prevOffset + 24)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <>
      <CardContent results={feedContent.results} />
      {feedContent.nextPage !== null && (
        <div className="mt-6 flex w-full">
          <div
            ref={ref}
            className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-gray-300 border-t-gray-400"
          />
        </div>
      )}
    </>
  )
}
