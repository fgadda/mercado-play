"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

import Spinner from "@/components/spinner"
import { fetchFeedContent } from "@/lib/api"
import Cards from "./cards"

export default function LoadMore({ filter, resultKeys }) {
  const ref = useRef(null)
  const [feedContent, setFeedContent] = useState({ results: [], nextPage: {} })
  const [offset, setOffset] = useState(24)
  const isInView = useInView(ref, { margin: "400px 0px" })

  useEffect(() => {
    // avoid duplicates between static generation and client side.
    const filterResults = results => {
      return results.filter(item => !resultKeys.includes(item.key))
    }

    const loadMoreResults = async offset => {
      const { results, nextPage } = await fetchFeedContent({ offset, filter })
      const filteredResults = [...feedContent.results, ...filterResults(results)]
      setFeedContent({ results: filteredResults, nextPage })
    }

    if (isInView) {
      loadMoreResults(offset)
      setOffset(prevOffset => prevOffset + 24)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <>
      <div className="mt-4">
        <Cards results={feedContent.results} />
      </div>
      {feedContent.nextPage && (
        <div className="mt-6 flex w-full">
          <Spinner ref={ref} className="mx-auto" />
        </div>
      )}
    </>
  )
}
