"use server"

import { MEDIA_TYPE, HORIZONTAL_MEDIA_TYPE, CONTENT_DETAIL_TYPE } from "@/constants/types"

export const fetchFeedContent = async ({ offset = 0, filter = "" }) => {
  const limit = 24
  const params = new URLSearchParams({ offset, filter, limit })
  const url = `${process.env.MELI_PLAY_URL}/feed?${params.toString()}`

  try {
    const response = await fetch(url)
    const { components, nextPage } = await response.json()

    const parsedResults = components
      .filter(component => component.type === MEDIA_TYPE)
      .map(({ props }) => {
        const { description, header, url } = props
        const { title, tags, subtitle } = description
        const thumbnail = header.default.background.props.url
        const subtitleText = subtitle.map(sub => sub.props.label).join("")

        return {
          title: title.props.label,
          tag: tags[0].props.label,
          subtitle: subtitleText,
          thumbnail,
          url,
        }
      })

    return { results: parsedResults, nextPage }
  } catch (error) {
    console.log(error)
  }
}

export const fetchMovie = async contentId => {
  const url = `${process.env.MELI_PLAY_URL}/vcp/${contentId}`

  try {
    const response = await fetch(url)
    const { components } = await response.json()

    const { title, description, tags, subtitle } = components["content-detail"]

    const parsedFeedComponents = components.feed.components
      .filter(item => item.type === HORIZONTAL_MEDIA_TYPE)
      .map(({ props }) => {
        const { url, image, description } = props
        const imageUrl = image.props.url
        const subtitle = description.subtitle.map(sub => sub.props.label).join("")
        const tag = description.tags[0].props.label

        return {
          title: image.props.title,
          url: url.indexOf("?") === -1 ? url : url.substring(0, url.indexOf("?")),
          image: imageUrl,
          subtitle,
          tag,
        }
      })

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

export const fetchContentDetail = async contentId => {
  const url = `${process.env.MELI_PLAY_URL}/content-detail?contentId=${contentId}`

  try {
    const response = await fetch(url)
    const { components } = await response.json()
    const {
      props: { columns, title },
    } = components.find(item => item.type === CONTENT_DETAIL_TYPE)

    const mainColumn = {}
    const restColumns = []

    columns.forEach(({ components }) => {
      const isMainColumn = components.some(
        component => component.props.title.props.label === "Descripción",
      )
      if (isMainColumn) {
        mainColumn.title = components[0].props.title.props.label
        mainColumn.value = components[0].props.components[0].props.label
      } else {
        restColumns.push(components)
      }
    })
    return { title, mainColumn, restColumns }
  } catch (error) {
    console.log(error)
  }
}

export const fetchSuggestions = async query => {
  const url = `https://http2.mlstatic.com/suggestions/mplay/MLA?&q=${query}`
  try {
    const response = await fetch(url)
    const suggestions = await response.json()
    return suggestions
  } catch (error) {
    console.log(error)
  }
}
