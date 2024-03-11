import localFont from "next/font/local"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

import "./globals.css"

export const metadata = {
  title: "Mercado Play - Series y películas gratis",
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
        {children}
        <Footer />
      </body>
    </html>
  )
}
