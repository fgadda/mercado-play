import Header from "@/components/header"
import Tabs from "@/components/tabs"

export default function Layout({ children }) {
  return (
    <main className="relative min-h-screen">
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs />
        </section>
      </Header>
      <div className="mx-auto max-w-[1308px] px-[54px]">{children}</div>
    </main>
  )
}
