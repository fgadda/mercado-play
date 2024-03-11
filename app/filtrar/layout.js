import Header from "@/components/header"
import Tabs from "@/components/tabs"

export default function Layout() {
  return (
    <main className="relative min-h-screen">
      <Header>
        <section className="mt-6 md:mt-4">
          <Tabs />
        </section>
      </Header>
    </main>
  )
}
