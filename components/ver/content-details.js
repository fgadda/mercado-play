import ShowDetails from "@/components/ver/show-details"
import Tags from "@/components/tags"
import { MotionDiv, MotionImg } from "@/components/animation"

const PlayIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#FFFFFF"
    className="h-[64px] w-auto"
  >
    <g>
      <circle cx="18" cy="18" r="16.75" fill="#000" stroke="#fff" strokeWidth="1.5"></circle>
      <path d="M12 27.7V8.5l16 9.6-16 9.6Z" fill="#fff"></path>
    </g>
  </svg>
)

export default function ContentDetails({ image, title, subtitle, tags, description, contentId }) {
  return (
    <div className="sticky left-0 right-0 top-0 min-h-screen">
      <div className="relative aspect-video rounded-tl-md bg-black">
        <MotionImg
          src={image}
          width="719"
          height="405"
          alt="image"
          className="h-full w-full rounded-tl-md object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <MotionDiv
          className="absolute inset-0 flex cursor-not-allowed items-center justify-center rounded-tl-md"
          style={{ backgroundColor: "rgba(0,0,0,.6)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-6">
            <PlayIcon />
            <span className="text-2xl font-semibold leading-7 text-white">
              <u>Ingresá a tu cuenta</u> de Mercado Libre
              <br />
              para reproducir gratis este contenido.
            </span>
          </div>
        </MotionDiv>
      </div>
      <div className="flex w-full flex-col gap-3 p-5">
        <div className="gap flex flex-col">
          <span className="text-2xl font-semibold leading-[30px]">{title}</span>
          <span>{subtitle}</span>
          <div className="mt-1 flex gap-1.5">
            <Tags tags={tags} />
          </div>
        </div>
        <p className="line-clamp-2 leading-5">{description}</p>
        <ShowDetails contentId={contentId} />
      </div>
    </div>
  )
}
