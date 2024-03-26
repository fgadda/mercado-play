import localFont from "next/font/local"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

import "./globals.css"

export const metadata = {
  title: "Mercado Play - Series y películas gratis",
  description:
    "Mercado Play es una sección de Mercado Libre en la que vas a encontrar contenidos gratis, de forma fácil, rápida y segura",
}

const proximaNova = localFont({
  src: [
    {
      path: "../fonts/Proxima-Nova-Regular.otf",
      weight: "400",
      subsets: ["latin"],
    },
    {
      path: "../fonts/Proxima-Nova-Semibold.otf",
      weight: "600",
      subsets: ["latin"],
    },
  ],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={proximaNova.className}>
        <Navbar />
        <main className="relative min-h-screen">
          <div className="mx-auto max-w-[1308px] px-[54px] pb-[32px]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
