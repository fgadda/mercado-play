import Image from "next/image"

import logo from "@/app/logo.webp"
import { HEADER_LINKS } from "@/constants/navigationLinks"

export default function Navbar() {
  return (
    <header className="box-content h-[48px] border-b-2 bg-[#ffe600]">
      <div className="container mx-auto flex h-full max-w-[1200px] items-center justify-between px-2.5">
        <Image src={logo} width="134" height="34" alt="logo" priority />
        <nav className="me-[22px] flex items-center gap-[22px]">
          {HEADER_LINKS.map(item => (
            <p className="cursor-not-allowed text-sm antialiased" key={item}>
              {item}
            </p>
          ))}
        </nav>
      </div>
    </header>
  )
}
