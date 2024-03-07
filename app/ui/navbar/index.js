import Image from "next/image"

export default function Navbar() {
  return (
    <header className="h-[48px] bg-[#ffe600]">
      <div className="container mx-auto flex h-full max-w-[1200px] items-center justify-between px-[10px]">
        <Image src="/logo.webp" width="134" height="34" alt="logo" />
        <div className="flex items-center gap-[22px] text-[13px] font-normal">
          <div className="flex items-center gap-1">
            <div class="flex h-6 w-6 items-center justify-center rounded-full border border-gray-100 bg-white">
              <span className="text-[11px] leading-none antialiased">FG</span>
            </div>
            <p className="antialiased">Facundo</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="rgba(0,0,0,.3)"
              className="h-3 w-3"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <p className="me-[22px] antialiased">Ayuda</p>
        </div>
      </div>
    </header>
  )
}
