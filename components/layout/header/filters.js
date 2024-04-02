import Link from "next/link"

import { cn } from "@/lib/utils"
import { links } from "@/constants/links"

export default function Filters({ view, path }) {
  const filters = links.filters[view]
  return (
    <div className="no-scrollbar flex w-full items-center gap-2 overflow-x-scroll">
      {filters.map(({ href, name }) => {
        const linkIsActive = href === path
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
