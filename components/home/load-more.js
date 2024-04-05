"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

import Spinner from "@/components/spinner"
import { fetchFeedContent } from "@/lib/api"
import Cards from "./cards"

export default function LoadMore({ filter }) {
  const ref = useRef(null)
  const [feedContent, setFeedContent] = useState({ results: [], nextPage: {} })
  const [offset, setOffset] = useState(24)
  const isInView = useInView(ref, { margin: "400px 0px" })

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
