const basePath = "filtrar"
const moviesBasePath = `${basePath}/peliculas`
const seriesBasePath = `${basePath}/series`

export const links = {
  tabs: [
    { name: "Para vos", href: "" },
    { name: "Más vistos", href: `${basePath}/mas-vistos` },
    { name: "Películas", href: moviesBasePath },
    { name: "Series", href: seriesBasePath },
    { name: "Infantil", href: `${basePath}/infantil` },
  ],
  filters: {
    peliculas: [
      { name: "Todos", href: moviesBasePath },
      { name: "Top 10", href: `${moviesBasePath}/top-10` },
      { name: "Acción", href: `${moviesBasePath}/accion` },
      { name: "Animación", href: `${moviesBasePath}/animacion` },
      { name: "Aventura", href: `${moviesBasePath}/aventura` },
      { name: "Comedia", href: `${moviesBasePath}/comedia` },
      { name: "Crimen", href: `${moviesBasePath}/crimen` },
      { name: "Documental", href: `${moviesBasePath}/documental` },
      { name: "Drama", href: `${moviesBasePath}/drama` },
      { name: "Terror", href: `${moviesBasePath}/terror` },
    ],
    series: [
      { name: "Todos", href: seriesBasePath },
      { name: "Top 10", href: `${seriesBasePath}/top-10` },
      { name: "Drama", href: `${seriesBasePath}/drama` },
      { name: "Comedia", href: `${seriesBasePath}/comedia` },
      { name: "Anime", href: `${seriesBasePath}/anime` },
      { name: "Acción & Aventura", href: `${seriesBasePath}/accion_aventura` },
      { name: "Pasar el rato", href: `${seriesBasePath}/pasar_el_rato` },
      { name: "Más generos", href: `${seriesBasePath}/mas_genero` },
    ],
  },
}
