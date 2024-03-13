const MEDIA_TYPE = "media-card"

export const fetchFeedContent = async ({ offset = 0, filter = "" }) => {
  const limit = 24
  const url = `https://play.mercadolibre.com.ar/api/feed?filter=${filter}&limit=${limit}&offset=${offset}`
  try {
    const response = await fetch(url)
    const { components, nextPage } = await response.json()
    const parsedResults = components
      .filter(component => component.type === MEDIA_TYPE)
      .map(({ props: { description, header } }) => ({
        title: description.title.props.label,
        thumbnail: header.default.background.props.url,
        tag: description.tags[0].props.label,
        subtitle: description.subtitle.map(subtitle => subtitle.props.label).join(""),
      }))

    return { results: parsedResults, nextPage }
  } catch (error) {
    console.log(error)
  }
}
