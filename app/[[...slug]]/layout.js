import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"
import Filters from "@/components/layout/header/filters"
import { links } from "@/constants/links"
import { cn } from "@/lib/utils"

export const dynamicParams = false

export function generateStaticParams() {
  const flatLinks = [...links.tabs, ...Object.values(links.filters).flatMap(category => category)]
  const paths = flatLinks.map(item => ({ slug: item.href.split("/").filter(Boolean) }))
  return paths
}

export default function Layout({ children, params: { slug } }) {
  const [, view] = slug || []

  const path = slug ? `/${slug.join("/")}` : "/"
  const viewHasFilters = links.filters.hasOwnProperty(view)

  return (
    <>
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs path={path} />
        </section>
        {viewHasFilters && (
          <section className="flex items-center gap-5 py-4">
            <Filters view={view} path={path} />
          </section>
        )}
      </Header>
      <div className={cn("mt-8", { "mt-4": viewHasFilters })}>{children}</div>
    </>
  )
}
