import Link from "next/link"

import { links } from "@/constants/links"
import { cn } from "@/lib/utils"

export default function Tabs({ path = "" }) {
  return (
    <div className="border-b border-gray-300/80 text-center text-sm font-semibold md:text-base">
      <div className="flex flex-wrap gap-[40px]">
        {links.tabs.map(tab => {
          const linkIsActive = tab.href === "" ? path === tab.href : path.includes(tab.href)
          return (
            <Link
              key={tab.name}
              href={`/${tab.href}`}
              className={cn("inline-block py-3 hover:text-primary md:py-2", {
                "border-b-2 border-primary text-primary": linkIsActive,
              })}
            >
              {tab.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
