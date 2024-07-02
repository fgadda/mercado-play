import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"
import Filters from "@/components/layout/header/filters"
import { FLAT_LINKS, FILTERS, FILTER_PATH } from "@/constants/navigationLinks"
import { cn } from "@/lib/utils"

export const dynamicParams = false

const getFormattedPaths = () => {
  return FLAT_LINKS.filter(({ href }) => href.includes(FILTER_PATH)).map(({ slug }) => ({
    slug: slug.split("/").filter(Boolean),
  }))
}

export function generateStaticParams() {
  return getFormattedPaths()
}

export default function Layout({ children, params: { slug } }) {
  const [activeView] = slug
  const viewHasFilters = FILTERS.hasOwnProperty(activeView)

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
