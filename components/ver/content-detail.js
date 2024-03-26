"use client"
import { useState, useEffect } from "react"

import Modal from "@/components/modal"
import Spinner from "@/components/spinner"
import { fetchContentDetail } from "@/lib/api"

export default function ContentDetail({ contentId }) {
  const [content, setContent] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { title, mainColumn, restColumns } = content || {}
  const hasData = Object.keys(content).length > 0

  useEffect(() => {
    if (modalIsOpen && !hasData) {
      setIsLoading(true)
      fetchContentDetail(contentId)
        .then(setContent)
        .finally(() => setIsLoading(false))
    }
  }, [modalIsOpen, hasData, contentId])

  return (
    <Modal open={modalIsOpen} onOpenChange={() => setModalIsOpen(!modalIsOpen)}>
      <Modal.Button className="me-auto font-semibold text-primary">Conocer más</Modal.Button>

      <Modal.Content title={title}>
        {isLoading && !hasData ? (
          <div className="flex h-[300px]">
            <Spinner variant="primary" className="m-auto" />
          </div>
        ) : (
          <div className="mt-7 flex gap-7">
            <div className="flex flex-1 flex-col">
              <h3 className="text-xl font-semibold">{mainColumn?.title}</h3>
              <p className="mt-2 w-full leading-tight">{mainColumn?.value}</p>
            </div>
            <div className="h-100 hidden border-r border-gray-200 md:block"></div>
            {restColumns?.map((itemGroup, index) => (
              <div
                key={index}
                className="flex flex-col gap-4"
                style={{ flex: "0 0 calc(25% - 28.25px)" }}
              >
                {itemGroup.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h3 className="text-sm font-semibold">{section?.props?.title?.props?.label}</h3>
                    <div className="flex flex-col gap-2">
                      {section?.props?.components?.map((component, componentIndex) => (
                        <p className="text-sm" key={componentIndex}>
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
