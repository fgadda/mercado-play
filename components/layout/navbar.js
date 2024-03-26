import Image from "next/image"

import logo from "@/app/logo.webp"

export default function Navbar() {
  return (
    <header className="box-content h-[48px] border-b-2 bg-[#ffe600]">
      <div className="container mx-auto flex h-full max-w-[1200px] items-center justify-between px-[10px]">
        <Image src={logo} width="134" height="34" alt="logo" priority />
        <nav className="flex items-center gap-[22px]">
          <p className="cursor-not-allowed text-sm antialiased">Creá tu cuenta</p>
          <p className="cursor-not-allowed text-sm antialiased">Ingresá</p>
          <p className="me-[22px] cursor-not-allowed text-sm antialiased">Ayuda</p>
        </nav>
      </div>
    </header>
  )
}
