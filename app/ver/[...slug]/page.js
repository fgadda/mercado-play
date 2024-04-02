import ContentDetails from "@/components/ver/content-details"
import RelatedContent from "@/components/ver/related-content"
import { fetchMovie } from "@/lib/api"

export default async function Page({ params: { slug } }) {
  const [, contentId] = slug
  const { components, ...rest } = await fetchMovie(contentId)

  return (
    <div className="mt-7 flex flex-col rounded-md bg-white shadow-sm lg:flex-row">
      <section className="relative flex-[3] border-r">
        <ContentDetails {...rest} contentId={contentId} />
      </section>
      <section className="relative flex flex-[2] flex-col">
        <RelatedContent components={components} />
      </section>
    </div>
  )
}
