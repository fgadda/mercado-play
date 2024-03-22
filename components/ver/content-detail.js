"use client"
import { useState, useEffect } from "react"

import Modal from "@/components/modal/modal"
import { fetchContentDetail } from "@/lib/fetch-feed-content"

export default function ContentDetail({ contentId }) {
  const [content, setContent] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { components } = content || {}
  const descriptionContent = components?.[0]?.[0]
  const contentHasData = components?.length > 0

  useEffect(() => {
    if (modalIsOpen && !contentHasData) {
      setIsLoading(true)
      fetchContentDetail({ contentId })
        .then(setContent)
        .finally(() => setIsLoading(false))
    }
  }, [modalIsOpen, contentHasData, contentId])

  return (
    <Modal open={modalIsOpen} onOpenChange={() => setModalIsOpen(!modalIsOpen)}>
      <Modal.Button className="me-auto font-semibold text-primary">Conocer más</Modal.Button>

      <Modal.Content title={content?.title}>
        {isLoading && !contentHasData ? (
          <div className="flex h-[300px]">
            <div className="m-auto mx-auto h-12 w-12 animate-spin rounded-full border-4 border-transparent border-t-primary" />
          </div>
        ) : (
          <div className="mt-7 flex gap-7">
            <div className="flex flex-1 flex-col">
              <h3 className="text-xl font-semibold">{descriptionContent?.title?.props?.label}</h3>
              <p className="mt-2 w-full leading-tight">
                {descriptionContent?.components[0]?.props?.label}
              </p>
            </div>
            <div className="h-100 hidden border-r border-gray-200 md:block"></div>
            {content?.components?.slice(1).map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4"
                style={{ flex: "0 0 calc(25% - 28.25px)" }}
              >
                {item?.map((x, i) => (
                  <div key={i}>
                    <h3 className="text-sm font-semibold">{x?.title?.props?.label}</h3>
                    <div className="flex flex-col gap-2">
                      {x.components.map((component, gi) => (
                        <p className="text-sm" key={gi}>
                          {component.type === "tag" ? (
                            <span className="mt-1 rounded-sm bg-gray-100 px-1.5 py-0.5 text-xs font-semibold">
                              {component.props.label}
                            </span>
                          ) : (
                            component.props.label
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </Modal.Content>
    </Modal>
  )
}
