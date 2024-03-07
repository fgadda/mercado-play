import "./globals.css"

export const metadata = {
  title: "Mercado Play - Series y películas gratis",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
