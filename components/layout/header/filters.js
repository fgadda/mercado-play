"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { FILTERS } from "@/constants/navigationLinks"

export default function Filters({ view }) {
  const pathname = usePathname()
  const filters = FILTERS[view]

  return (
    <div className="no-scrollbar flex w-full items-center gap-2 overflow-x-scroll">
      {filters.map(({ href, name }) => {
        const linkIsActive = pathname === href

        return (
          <Link
            key={name}
            href={href}
            className={cn(
              "flex h-[32px] items-center text-nowrap rounded-3xl border border-gray-500/70 px-3 text-sm md:text-base",
              {
                "border-[#2968c8] bg-[#2968c8]/10 text-[#2968c8]": linkIsActive,
              },
            )}
          >
            {name}
          </Link>
        )
      })}
    </div>
  )
}
