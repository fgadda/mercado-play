import { cn } from "@/lib/utils"

const Tag = ({ label, style }) => {
  return (
    <span
      className={cn("rounded-sm bg-gray-100 px-1.5 py-0.5 text-xs font-semibold", {
        "font-normal": style === "regular",
      })}
    >
      {label}
    </span>
  )
}
export default function Tags({ tags }) {
  return tags.map(({ props }) => (
    <div className="inline-block" key={props.label}>
      <Tag {...props} />
    </div>
  ))
}

Tags.Tag = Tag
