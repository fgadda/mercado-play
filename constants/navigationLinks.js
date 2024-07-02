const MOVIES_PATH = "/peliculas"
const SERIES_PATH = "/series"
const INFANTIL_PATH = "/infantil"

export const FILTER_PATH = "/filtrar"

const MOVIES_FILTERS_DATA = [
  { name: "Todos", path: "" },
  { name: "Destacados", path: "/top-10" },
  { name: "Ciencia Ficción", path: "/ciencia-ficcion" },
  { name: "Acción", path: "/accion" },
  { name: "Animación", path: "/animacion" },
  { name: "Aventura", path: "/aventura" },
  { name: "Comedia", path: "/comedia" },
  { name: "Crimen", path: "/crimen" },
  { name: "Documental", path: "/documental" },
  { name: "Drama", path: "/drama" },
  { name: "Terror", path: "/terror" },
]

const SERIES_FILTERS_DATA = [
  { name: "Todos", path: "" },
  { name: "Destacados", path: "/destacados" },
  { name: "Drama", path: "/drama" },
  { name: "Comedia", path: "/comedia" },
  { name: "Anime", path: "/anime" },
  { name: "Acción & Aventura", path: "/accion_aventura" },
  { name: "Pasar el rato", path: "/pasar_el_rato" },
  // { name: "Más géneros", path: "/mas_genero" },
]

const generateFilters = (basePath, filters) => {
  return filters.map(filter => ({
    ...filter,
    slug: `${basePath}${filter.path}`,
    href: `${FILTER_PATH}${basePath}${filter.path}`,
  }))
}

const moviesFilters = generateFilters(MOVIES_PATH, MOVIES_FILTERS_DATA)
const seriesFilters = generateFilters(SERIES_PATH, SERIES_FILTERS_DATA)

export const TABS = [
  { name: "Para vos", path: "", href: "/" },
  { name: "Películas", path: MOVIES_PATH, href: `${FILTER_PATH}${MOVIES_PATH}`, slug: MOVIES_PATH },
  { name: "Series", path: SERIES_PATH, href: `${FILTER_PATH}${SERIES_PATH}`, slug: SERIES_PATH },
  {
    name: "Infantil",
    path: INFANTIL_PATH,
    href: `${FILTER_PATH}${INFANTIL_PATH}`,
    slug: INFANTIL_PATH,
  },
]

export const FILTERS = { peliculas: moviesFilters, series: seriesFilters }

export const FLAT_LINKS = [...TABS, ...moviesFilters, ...seriesFilters]

export const HEADER_LINKS = ["Creá tu cuenta", "Ingresá", "Ayuda"]

export const FOOTER_LINKS = [
  "Trabajá con nosotros",
  "Términos y condiciones",
  "Cómo cuidamos tu privacidad",
  "Accesibilidad",
  "Información al usuario financiero",
  "Ayuda",
  "Defensa del Consumidor",
  "Información sobre seguros",
  "Cyberfest",
  "Hot Sale",
]
