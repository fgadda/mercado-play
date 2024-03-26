"use client"
import { useState, useEffect } from "react"

import Modal from "@/components/modal"
import Spinner from "@/components/spinner"
import Tags from "@/components/tags"
import { fetchContentDetail } from "@/lib/api"

const ColumnItem = ({ columns }) => {
  return columns.map(({ props }) => {
    const label = props.title.props.label
    return (
      <div key={label}>
        <h3 className="text-sm font-semibold">{label}</h3>
        <div className="flex flex-col gap-2">
          {props.components.map(({ props, type }) => (
            <p className="text-sm" key={props.label}>
              {type === "tag" ? <Tags.Tag label={props.label} /> : props.label}
            </p>
          ))}
        </div>
      </div>
    )
  })
}

export default function ShowDetails({ contentId }) {
  const [content, setContent] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { title, mainColumn = { title: "", value: "" }, restColumns = [] } = content
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
        {isLoading ? (
          <div className="flex h-[300px]">
            <Spinner variant="primary" className="m-auto" />
          </div>
        ) : (
          <div className="mt-7 flex gap-7">
            <div className="flex flex-1 flex-col">
              <h3 className="text-xl font-semibold">{mainColumn.title}</h3>
              <p className="mt-2 w-full leading-tight">{mainColumn.value}</p>
            </div>
            <div className="h-100 hidden border-r border-gray-200 md:block"></div>
            {restColumns.map((columns, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col gap-4"
                style={{ flex: "0 0 calc(25% - 28.25px)" }}
              >
                <ColumnItem columns={columns} />
              </div>
            ))}
          </div>
        )}
      </Modal.Content>
    </Modal>
  )
}
