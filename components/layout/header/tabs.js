"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { links } from "@/constants/links"
import { cn } from "@/lib/utils"

export default function Tabs() {
  const pathname = usePathname()
  return (
    <div className="border-b border-gray-300/80 text-center text-sm font-semibold md:text-base">
      <div className="flex flex-wrap gap-[40px]">
        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className={cn("inline-block py-3 hover:text-primary md:py-2", {
              "border-b-2 border-primary text-primary":
                link.href === "/" ? pathname === link.href : pathname.includes(link.href),
            })}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
