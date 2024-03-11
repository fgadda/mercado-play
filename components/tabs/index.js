"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

import { routes } from "./routes"

export default function Tabs() {
  const pathname = usePathname()
  return (
    <div className="border-b border-gray-300/80 text-center text-sm font-semibold md:text-base">
      <div className="flex flex-wrap gap-[40px]">
        {routes.map(route => (
          <Link
            key={route.name}
            href={route.href}
            className={clsx("inline-block py-3 hover:text-primary md:py-2", {
              "border-b-2 border-primary text-primary": pathname === route.href,
            })}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
