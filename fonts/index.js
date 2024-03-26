import localFont from "next/font/local"

export const proximaNova = localFont({
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
