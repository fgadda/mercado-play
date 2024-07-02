"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { TABS } from "@/constants/navigationLinks"
import { cn } from "@/lib/utils"

export default function Tabs({ path }) {
  const pathname = usePathname()

  return (
    <div className="border-b border-gray-300/80 text-center text-sm font-semibold md:text-base">
      <div className="flex flex-wrap gap-[40px]">
        {TABS.map(({ href, name }) => {
          const linkIsActive = href === "/" ? path === href : pathname.includes(href)

          return (
            <Link
              key={name}
              href={href}
              className={cn("inline-block py-3 hover:text-primary md:py-2", {
                "border-b-2 border-primary text-primary": linkIsActive,
              })}
            >
              {name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
