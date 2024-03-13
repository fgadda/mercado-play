"use client"

import clsx from "clsx"

import useScrollDirection from "@/hooks/useScrollDirection"
import Searchbar from "@/components/search"

export default function Header({ children }) {
  const { scrollDirection } = useScrollDirection()

  return (
    <div
      className={clsx("z-10 -mx-[10px] bg-[#f5f5f5] px-[10px] pt-[58px] md:pt-[51px]", {
        "sticky left-0 right-0 top-0": scrollDirection === "up",
      })}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-[28px] font-semibold">Mercado Play</h1>
          <div className="hidden h-5 border-r border-gray-300 md:block"></div>
          <div className="hidden w-[19rem] md:block">
            <Searchbar />
          </div>
        </div>
        <svg aria-hidden="true" width="21.59" height="21.59" viewBox="0 0 24 24" fill="#3483fa">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9994 16.5461C14.5071 16.5461 16.54 14.5132 16.54 12.0055C16.54 9.49777 14.5071 7.46485 11.9994 7.46485C9.49167 7.46485 7.45876 9.49777 7.45876 12.0055C7.45876 14.5132 9.49167 16.5461 11.9994 16.5461ZM11.9994 15.0461C10.3201 15.0461 8.95876 13.6848 8.95876 12.0055C8.95876 10.3262 10.3201 8.96485 11.9994 8.96485C13.6787 8.96485 15.04 10.3262 15.04 12.0055C15.04 13.6848 13.6787 15.0461 11.9994 15.0461Z"
            fill="#3483fa"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.2994 12.05C2.2994 11.624 2.32691 11.2013 2.38138 10.7838L0.380615 9.62866L4.13762 3.12134L6.17125 4.29546C6.81027 3.81448 7.50658 3.41375 8.2449 3.10356V0.75H15.7589V3.10566C16.4962 3.41592 17.1916 3.81648 17.8297 4.2971L19.8662 3.12134L23.6232 9.62866L21.6178 10.7865C21.672 11.2031 21.6994 11.6249 21.6994 12.05C21.6994 12.4434 21.6759 12.834 21.6295 13.2203L23.6232 14.3713L19.8662 20.8787L17.9045 19.746C17.2461 20.2519 16.5252 20.6719 15.7589 20.9943V23.25H8.2449V20.9964C7.47758 20.6741 6.75574 20.2539 6.09649 19.7477L4.13762 20.8787L0.380615 14.3713L2.36967 13.223C2.32297 12.8358 2.2994 12.4443 2.2994 12.05ZM2.42965 9.07962L4.03765 10.008L3.93986 10.53C3.84669 11.0274 3.7994 11.5355 3.7994 12.05C3.7994 12.5359 3.84159 13.0161 3.92478 13.4871L4.01617 14.0044L2.42965 14.9204L4.68665 18.8296L6.25404 17.9247L6.65735 18.2713C7.4206 18.9274 8.29783 19.4387 9.24662 19.7767L9.7449 19.9543V21.75H14.2589V19.9528L14.7568 19.7751C15.7046 19.4367 16.5809 18.9255 17.3433 18.2698L17.7466 17.9229L19.3171 18.8296L21.5741 14.9204L19.9832 14.0019L20.0744 13.4847C20.1574 13.0145 20.1994 12.5351 20.1994 12.05C20.1994 11.5363 20.1523 11.0291 20.0594 10.5324L19.9618 10.0105L21.5741 9.07962L19.3171 5.17038L17.6816 6.11467L17.2791 5.77562C16.5317 5.14596 15.6779 4.65374 14.7568 4.32491L14.2589 4.14719V2.25H9.7449V4.14574L9.24662 4.32328C8.32448 4.65184 7.46979 5.14409 6.72154 5.77405L6.3191 6.11287L4.68665 5.17038L2.42965 9.07962Z"
            fill="#3483fa"
          ></path>
        </svg>
      </div>
      <div className="mt-2.5 md:hidden">
        <Searchbar />
      </div>
      {children}
    </div>
  )
}
