const filterPath = "/filtrar"
const moviesPath = `${filterPath}/peliculas`
const seriesPath = `${filterPath}/series`

const tabs = [
  { name: "Para vos", href: "/" },
  { name: "Más vistos", href: `${filterPath}/mas-vistos` },
  { name: "Películas", href: moviesPath },
  { name: "Series", href: seriesPath },
  { name: "Infantil", href: `${filterPath}/infantil` },
]

const movies = [
  { name: "Todos", href: moviesPath },
  { name: "Top 10", href: `${moviesPath}/top-10` },
  { name: "Para Maratonear", href: `${moviesPath}/para-maratonear` },
  { name: "Ciencia Ficción", href: `${moviesPath}/ciencia-ficcion` },
  { name: "Acción", href: `${moviesPath}/accion` },
  { name: "Animación", href: `${moviesPath}/animacion` },
  { name: "Aventura", href: `${moviesPath}/aventura` },
  { name: "Comedia", href: `${moviesPath}/comedia` },
  { name: "Crimen", href: `${moviesPath}/crimen` },
  { name: "Documental", href: `${moviesPath}/documental` },
  { name: "Drama", href: `${moviesPath}/drama` },
  { name: "Terror", href: `${moviesPath}/terror` },
]

const series = [
  { name: "Todos", href: seriesPath },
  { name: "Top 10", href: `${seriesPath}/top-10` },
  { name: "Drama", href: `${seriesPath}/drama` },
  { name: "Comedia", href: `${seriesPath}/comedia` },
  { name: "Anime", href: `${seriesPath}/anime` },
  { name: "Acción & Aventura", href: `${seriesPath}/accion_aventura` },
  { name: "Pasar el rato", href: `${seriesPath}/pasar_el_rato` },
  { name: "Más generos", href: `${seriesPath}/mas_genero` },
]

const header = ["Creá tu cuenta", "Ingresá", "Ayuda"]

const footer = [
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

export const links = {
  tabs,
  filters: { peliculas: movies, series },
  header,
  footer,
}
