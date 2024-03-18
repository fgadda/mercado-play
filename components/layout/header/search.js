export default function Searchbar() {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <svg aria-hidden="true" width="16" height="20" viewBox="0 0 20 20" fill="gray-500">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2238 13.3752C15.341 12.0645 16.0153 10.3649 16.0153 8.50766C16.0153 4.36129 12.654 1 8.50766 1C4.36129 1 1 4.36129 1 8.50766C1 12.654 4.36129 16.0153 8.50766 16.0153C10.3649 16.0153 12.0645 15.341 13.3752 14.2238L17.9528 18.8013L18.8013 17.9528L14.2238 13.3752ZM8.50766 14.8153C5.02403 14.8153 2.2 11.9913 2.2 8.50766C2.2 5.02403 5.02403 2.2 8.50766 2.2C11.9913 2.2 14.8153 5.02403 14.8153 8.50766C14.8153 11.9913 11.9913 14.8153 8.50766 14.8153Z"
            fill="gray"
          ></path>
        </svg>
      </div>
      <div className="px-0.5">
        <input
          type="text"
          className="md:transition-width box-border h-8 w-full rounded-2xl border border-gray-400/80 ps-[30px] text-sm placeholder-gray-500/90 focus:border-primary focus:outline-none md:duration-300 md:ease-in-out md:focus:w-[22rem]"
          placeholder="¿Qué querés ver hoy?"
        />
      </div>
    </div>
  )
}
