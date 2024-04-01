"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import Spinner from "@/components/spinner"
import { fetchFeedContent } from "@/lib/api"
import CardWrapper from "./card-wrapper"

export default function LoadMore({ filter }) {
  const [feedContent, setFeedContent] = useState({ results: [], nextPage: {} })
  const [offset, setOffset] = useState(24)

  const { ref, inView } = useInView()

  useEffect(() => {
    const filterResults = results => {
      const uniqueTitles = new Set()
      return results.filter(item => {
        if (uniqueTitles.has(item.title)) {
          return false
        }
        uniqueTitles.add(item.title)
        return true
      })
    }

    const loadMoreResults = async offset => {
      const { results, nextPage } = await fetchFeedContent({ offset, filter })
      setFeedContent({ results: [...feedContent.results, ...filterResults(results)], nextPage })
    }

    if (inView) {
      loadMoreResults(offset)
      setOffset(prevOffset => prevOffset + 24)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <>
      <div className="mt-4">
        <CardWrapper.Cards results={feedContent.results} />
      </div>
      {feedContent.nextPage && (
        <div className="mt-6 flex w-full">
          <Spinner ref={ref} className="mx-auto" />
        </div>
      )}
    </>
  )
}
