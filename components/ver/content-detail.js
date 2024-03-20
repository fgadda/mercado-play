"use client"
import { useState, useEffect } from "react"

import Modal from "@/components/modal/modal"
import { fetchContentDetail } from "@/lib/fetch-feed-content"

export default function ContentDetail() {
  const [content, setContent] = useState({})
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    if (modalIsOpen) {
      fetchContentDetail({}).then(setContent)
    }
  }, [modalIsOpen])

  return (
    <Modal open={modalIsOpen} onOpenChange={() => setModalIsOpen(!modalIsOpen)}>
      <Modal.Button className="me-auto font-semibold text-primary">Conocer más</Modal.Button>

      <Modal.Content title={content?.title}>
        <div className="mt-7 flex gap-5">
          <div className="flex flex-1 flex-col">
            <h3 className="text-xl font-semibold">Descripción</h3>
            <p className="mt-2 w-full leading-tight">
              Mientras el inconformista creador de los programas de juegos favoritos de EE. UU. gana
              notoriedad por sus éxitos, se ve atraído al mundo de las operaciones encubiertas del
              gobierno. George Clooney dirige esta historia más extraña que la ficción.
            </p>
          </div>
          <div className="h-100 hidden border-r border-gray-300 md:block"></div>
          <div className="flex w-1/4 flex-[0.4] flex-col gap-4">
            <div>
              <h3 className="text-sm font-semibold">Duración</h3>
              <p className="text-sm">1 hora 53 minutos</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Duración</h3>
              <p className="text-sm">1 hora 53 minutos</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Duración</h3>
              <p className="text-sm">1 hora 53 minutos</p>
            </div>
          </div>
          <div className="flex w-1/4 flex-[0.4] flex-col gap-4">
            <div>
              <h3 className="text-sm font-semibold">Duración</h3>
              <p className="text-sm">1 hora 53 minutos</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Duración</h3>
              <p className="text-sm">1 hora 53 minutos</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Duración</h3>
              <p className="text-sm">1 hora 53 minutos</p>
            </div>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  )
}
