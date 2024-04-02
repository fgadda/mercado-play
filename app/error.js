"use client"
import { useRouter } from "next/navigation"

export default function Error({ reset }) {
  const router = useRouter()

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={reset}>Try again</button>
      <div>
        <button onClick={() => router.back()}>Go back</button>
      </div>
    </div>
  )
}
