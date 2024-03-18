export default function Layout({ children }) {
  return (
    <main className="relative min-h-screen">
      <div className="mx-auto max-w-[1308px] px-[54px]">{children}</div>
    </main>
  )
}
