import Link from "next/link"

import { links } from "@/constants/links"
import { cn } from "@/lib/utils"

export default function Tabs({ path }) {
  return (
    <div className="border-b border-gray-300/80 text-center text-sm font-semibold md:text-base">
      <div className="flex flex-wrap gap-[40px]">
        {links.tabs.map(({ href, name }) => {
          const linkIsActive = href === "/" ? path === href : path.includes(href)
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
