"use client"

import { useState } from "react"

import { fetchSuggestions } from "@/lib/api"
import useDebounce from "@/hooks/useDebounce"

const SearchIcon = () => (
  <svg aria-hidden="true" width="16" height="20" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2238 13.3752C15.341 12.0645 16.0153 10.3649 16.0153 8.50766C16.0153 4.36129 12.654 1 8.50766 1C4.36129 1 1 4.36129 1 8.50766C1 12.654 4.36129 16.0153 8.50766 16.0153C10.3649 16.0153 12.0645 15.341 13.3752 14.2238L17.9528 18.8013L18.8013 17.9528L14.2238 13.3752ZM8.50766 14.8153C5.02403 14.8153 2.2 11.9913 2.2 8.50766C2.2 5.02403 5.02403 2.2 8.50766 2.2C11.9913 2.2 14.8153 5.02403 14.8153 8.50766C14.8153 11.9913 11.9913 14.8153 8.50766 14.8153Z"
      fill="gray"
    ></path>
  </svg>
)

export default function Searchbar() {
  const [inputIsActive, setInputIsActive] = useState(false)
  const [results, setResults] = useState({ suggested_queries: [], q: "" })

  const handleSearch = useDebounce(value => {
    fetchSuggestions(value).then(setResults)
  }, 250)

  const showOptions = inputIsActive && results.suggested_queries.length > 0

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <SearchIcon />
      </div>
      <div className="px-0.5">
        <input
          type="text"
          className="md:transition-width box-border h-8 w-full rounded-2xl border border-gray-400/80 ps-[30px] text-sm placeholder-gray-500/90 focus:border-primary focus:outline-none md:duration-300 md:ease-in-out md:focus:w-[22rem]"
          placeholder="¿Qué querés ver hoy?"
          onChange={e => handleSearch(e.target.value)}
          onFocus={() => setInputIsActive(true)}
          onBlur={() => setInputIsActive(false)}
        />
      </div>
      {showOptions && (
        <div className="absolute z-10 mt-2 w-[22rem] bg-white py-2 shadow-md">
          {results.suggested_queries.map(item => (
            <div
              key={item.q}
              className="flex cursor-not-allowed items-center py-2 hover:bg-gray-100/80"
            >
              <div className="px-4">
                <SearchIcon />
              </div>
              <div className="flex w-full items-center justify-between">
                <span className="line-clamp-1">{item.q}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
