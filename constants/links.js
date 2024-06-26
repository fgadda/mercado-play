const basePath = "/filtrar"
const moviesBasePath = `${basePath}/peliculas`
const seriesBasePath = `${basePath}/series`

const tabs = [
  { name: "Para vos", href: "/" },
  { name: "Más vistos", href: `${basePath}/mas-vistos` },
  { name: "Películas", href: moviesBasePath },
  { name: "Series", href: seriesBasePath },
  { name: "Infantil", href: `${basePath}/infantil` },
]

const movies = [
  { name: "Todos", href: moviesBasePath },
  { name: "Top 10", href: `${moviesBasePath}/top-10` },
  { name: "Para Maratonear", href: `${moviesBasePath}/para-maratonear` },
  { name: "Ciencia Ficción", href: `${moviesBasePath}/ciencia-ficcion` },
  { name: "Acción", href: `${moviesBasePath}/accion` },
  { name: "Animación", href: `${moviesBasePath}/animacion` },
  { name: "Aventura", href: `${moviesBasePath}/aventura` },
  { name: "Comedia", href: `${moviesBasePath}/comedia` },
  { name: "Crimen", href: `${moviesBasePath}/crimen` },
  { name: "Documental", href: `${moviesBasePath}/documental` },
  { name: "Drama", href: `${moviesBasePath}/drama` },
  { name: "Terror", href: `${moviesBasePath}/terror` },
]

const series = [
  { name: "Todos", href: seriesBasePath },
  { name: "Top 10", href: `${seriesBasePath}/top-10` },
  { name: "Drama", href: `${seriesBasePath}/drama` },
  { name: "Comedia", href: `${seriesBasePath}/comedia` },
  { name: "Anime", href: `${seriesBasePath}/anime` },
  { name: "Acción & Aventura", href: `${seriesBasePath}/accion_aventura` },
  { name: "Pasar el rato", href: `${seriesBasePath}/pasar_el_rato` },
  { name: "Más generos", href: `${seriesBasePath}/mas_genero` },
]

const headerLinks = ["Creá tu cuenta", "Ingresá", "Ayuda"]

const footerLinks = [
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
  filters: {
    peliculas: movies,
    series,
  },
  header: headerLinks,
  footer: footerLinks,
}
