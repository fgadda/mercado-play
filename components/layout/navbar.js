import Image from "next/image"

export default function Navbar() {
  return (
    <header className="box-content h-[48px] border-b-2 bg-[#ffe600]">
      <div className="container mx-auto flex h-full max-w-[1200px] items-center justify-between px-[10px]">
        <Image src="/logo.webp" width="134" height="34" alt="logo" priority />
        <nav className="flex items-center gap-[22px]">
          <p className="text-sm antialiased">Creá tu cuenta</p>
          <p className="text-sm antialiased">Ingresá</p>
          <p className="me-[22px] text-sm antialiased">Ayuda</p>
        </nav>
      </div>
    </header>
  )
}
