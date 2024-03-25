"use client"
import * as Dialog from "@radix-ui/react-dialog"

export default function Modal({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}

function ModalContent({ title, children }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/80 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[950px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-[6px] bg-white p-[3rem] data-[state=open]:animate-contentShow">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-[28px] font-semibold leading-none">{title}</Dialog.Title>
          <Dialog.Close asChild>
            <button className="h-[25px] w-[25px]" aria-label="Close">
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="rgba(0,0,0,0.55)"
              >
                <path
                  d="M4.35156 5.19496L9.15406 9.99746L4.35156 14.8L5.20009 15.6485L10.0026 10.846L14.7963 15.6397L15.6449 14.7912L10.8511 9.99746L15.6449 5.20371L14.7963 4.35518L10.0026 9.14894L5.20009 4.34644L4.35156 5.19496Z"
                  fill="rgba(0,0,0,0.55)"
                ></path>
              </svg>
            </button>
          </Dialog.Close>
        </div>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}

Modal.Button = Dialog.Trigger
Modal.Close = Dialog.Close
Modal.Content = ModalContent
