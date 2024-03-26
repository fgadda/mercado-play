"use server"
const MEDIA_TYPE = "media-card"
const HORIZONTAL_MEDIA_TYPE = "horizontal-media-card"
const CONTENT_DETAIL_TYPE = "content-detail-overlay"

export const fetchFeedContent = async ({ offset = 0, filter = "" }) => {
  const limit = 24
  const url = `${process.env.MELI_PLAY_URL}/feed?filter=${filter}&limit=${limit}&offset=${offset}`
  try {
    const response = await fetch(url, { cache: "no-store" })
    const { components, nextPage } = await response.json()

    const parsedResults = components
      .filter(component => component.type === MEDIA_TYPE)
      .map(({ props: { description, header, url } }) => ({
        title: description.title.props.label,
        thumbnail: header.default.background.props.url,
        tag: description.tags[0].props.label,
        subtitle: description.subtitle.map(subtitle => subtitle.props.label).join(""),
        url,
      }))

    return { results: parsedResults, nextPage }
  } catch (error) {
    console.log(error)
  }
}

export const fetchMovie = async ({ contentId }) => {
  const url = `${process.env.MELI_PLAY_URL}/vcp/${contentId}?origin_content_id=${contentId}`
  try {
    const response = await fetch(url, { cache: "no-store" })
    const { components } = await response.json()

    const { title, description, tags, subtitle } = components["content-detail"]

    const parsedFeedComponents = components.feed.components
      .filter(item => item.type === HORIZONTAL_MEDIA_TYPE)
      .map(
        ({
          props: {
            url,
            image: { props },
            description,
          },
        }) => ({
          url: url.indexOf("?") === -1 ? url : url.substring(0, url.indexOf("?")),
          title: props.title,
          image: props.url,
          subtitle: description.subtitle.map(subtitle => subtitle.props.label).join(""),
          tag: description.tags[0].props.label,
        }),
      )

    return {
      title: title.props.label,
      description: description.props.label,
      image: components.player.ui.backdrop.props.url,
      subtitle: subtitle.map(subtitle => subtitle.props.label).join(""),
      components: parsedFeedComponents,
      tags,
    }
  } catch (error) {
    console.log(error)
  }
}

export const fetchContentDetail = async ({ contentId }) => {
  const url = `${process.env.MELI_PLAY_URL}/content-detail?contentId=${contentId}`
  try {
    const response = await fetch(url, { cache: "no-store" })
    const { components } = await response.json()
    const {
      props: { columns, title },
    } = components.find(item => item.type === CONTENT_DETAIL_TYPE)

    const parsedColumns = columns.map(column =>
      column.components.map(({ props: { title, components } }) => {
        return { title, components }
      }),
    )
    return { title, components: parsedColumns }
  } catch (error) {
    console.log(error)
  }
}

export const fetchSuggestions = async query => {
  const url = `https://http2.mlstatic.com/suggestions/mplay/MLA?showFilters=false&limit=10&api_version=2&q=${query}`
  try {
    const response = await fetch(url, { cache: "no-store" })
    const suggestions = await response.json()
    return suggestions
  } catch (error) {
    console.log(error)
  }
}
