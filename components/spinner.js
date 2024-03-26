import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva("h-12 w-12 animate-spin rounded-full border-4", {
  variants: {
    variant: {
      default: "border-gray-300 border-t-gray-400",
      primary: "border-transparent border-t-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export default function Spinner({ variant, className }) {
  return <div className={cn(spinnerVariants({ variant, className }))} />
}
