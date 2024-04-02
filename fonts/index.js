import localFont from "next/font/local"

export const proximaNova = localFont({
  src: [
    {
      path: "./Proxima-Nova-Regular.otf",
      weight: "400",
      subsets: ["latin"],
    },
    {
      path: "./Proxima-Nova-Semibold.otf",
      weight: "600",
      subsets: ["latin"],
    },
  ],
})
