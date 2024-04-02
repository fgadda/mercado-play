import { links } from "@/constants/links"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="box-content border-t bg-white">
      <div className="container mx-auto h-full max-w-[1200px] items-center justify-between px-2.5 py-3.5">
        <div className="flex flex-wrap gap-x-4 gap-y-0.5">
          {links.footer.map(item => (
            <div key={item} className="cursor-not-allowed text-[13px]">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-1 flex flex-col text-xs text-gray-500/75">
          <div>Copyright © 1999-{currentYear} MercadoLibre S.R.L.</div>
          <div>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</div>
        </div>
      </div>
    </footer>
  )
}
