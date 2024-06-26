import Header from "@/components/layout/header/header"
import Tabs from "@/components/layout/header/tabs"

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs path="/" />
        </section>
      </Header>

      <div className="mt-8">{children}</div>
    </>
  )
}
