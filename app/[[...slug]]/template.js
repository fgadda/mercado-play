import { MotionDiv } from "@/components/animation"

export default function Template({ children }) {
  return (
    <MotionDiv
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.3 }}
    >
      {children}
    </MotionDiv>
  )
}
