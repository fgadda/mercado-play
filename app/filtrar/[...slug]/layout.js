import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"
import Filters from "@/components/layout/header/filters"
import { links } from "@/constants/links"
import { cn } from "@/lib/utils"

export const dynamicParams = false

export function generateStaticParams() {
  const flatLinks = [...links.tabs, ...Object.values(links.filters).flatMap(category => category)]
  const paths = flatLinks.map(item => ({
    slug: item.href.split("/").filter(segment => segment && segment !== "filtrar"),
  }))
  return paths
}

export default function Layout({ children, params: { slug } }) {
  const [activeView] = slug
  const viewHasFilters = links.filters.hasOwnProperty(activeView)

  return (
    <>
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs />
        </section>

        {viewHasFilters && (
          <section className="flex items-center gap-5 py-4">
            <Filters view={activeView} />
          </section>
        )}
      </Header>

      <div className={cn("mt-8", { "mt-4": viewHasFilters })}>{children}</div>
    </>
  )
}
