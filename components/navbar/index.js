import Image from "next/image"

export default function Navbar() {
  return (
    <header className="box-content h-[48px] border-b-2 bg-[#ffe600]">
      <div className="container mx-auto flex h-full max-w-[1200px] items-center justify-between px-[10px]">
        <Image src="/logo.webp" width="134" height="34" alt="logo" />
        <nav className="flex items-center gap-[22px]">
          <div className="flex items-center gap-0.5">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-100 bg-white">
              <span className="text-[11px] leading-none antialiased">FG</span>
            </div>
            <p className="text-sm antialiased">Facundo</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="rgba(0,0,0,.7)"
              className="h-3 w-3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <p className="me-[22px] text-sm antialiased">Ayuda</p>
        </nav>
      </div>
    </header>
  )
}
