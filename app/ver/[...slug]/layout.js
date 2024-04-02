import Header from "@/components/layout/header/header"

export default function Layout({ children }) {
  return (
    <>
      <Header hasBackButton />
      {children}
    </>
  )
}
