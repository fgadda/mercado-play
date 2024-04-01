import Link from "next/link"

import { cn } from "@/lib/utils"
import { links } from "@/constants/links"

export default function Filters({ view, path }) {
  const filters = links.filters[view]
  return (
    <section className="no-scrollbar flex w-full items-center gap-2 overflow-x-scroll">
      {filters.map(filter => {
        const linkIsActive = filter.href === path
        return (
          <Link
            key={filter.name}
            href={`/${filter.href}`}
            className={cn(
              "flex h-[32px] items-center text-nowrap rounded-3xl border border-gray-500/70 px-3 text-sm md:text-base",
              {
                "border-[#2968c8] bg-[#2968c8]/10 text-[#2968c8]": linkIsActive,
              },
            )}
          >
            {filter.name}
          </Link>
        )
      })}
    </section>
  )
}
