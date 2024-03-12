import Link from "next/link"
import clsx from "clsx"

import { filters } from "@/contants/filters"

export default function Filters({ contentType, resolvedPath }) {
  return (
    <section className="no-scrollbar flex w-full items-center gap-2 overflow-x-scroll">
      {filters[contentType].map(route => {
        const linkIsActive = `/filtrar${route.href}` === `/filtrar/${resolvedPath}`
        return (
          <Link
            key={route.name}
            href={`/filtrar${route.href}`}
            className={clsx(
              "flex h-[32px] items-center text-nowrap rounded-3xl border border-gray-500/70 px-3 text-sm md:text-base",
              {
                "border-[#2968c8] bg-[#2968c8]/10 text-[#2968c8]": linkIsActive,
              },
            )}
          >
            {route.name}
          </Link>
        )
      })}
    </section>
  )
}
