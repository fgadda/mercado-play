# Mercado Play

[Mercado Play](https://play.mercadolibre.com/) project built with [Next.js 14](https://nextjs.org/) using App Router, JavaScript, Tailwind, Radix Primitives and Framer Motion.

## Strategies

### Rendering

Static Site Generation, without revalidation at time, for the following sections:

- Para vos (In a real scenario, this page should use dynamic rendering to display custom content)
- Más vistos
- Películas
- Series
- Infantil

Server Side Rendering is used to display each view of a movie or TV show.

Client Side Rendering is used for the following purposes:

- Display more results in static sections with infinite scroll
- Show search results
- Provide more details about a movie or TV show

### Routing

- Dynamic Routes with Optional/Catch all Segments
- Nested Layouts
- Error Handling
- Templates

## Steps to run the project locally:

1. Clone the repository
2. Ensure that you have Node.js installed (v18.17 or later)

```bash
   node -v
```

3. Create a file named `.env.local` in the project root directory and add the following var

```bash
   MELI_PLAY_URL=https://play.mercadolibre.com.ar/api
```

4. Install dependencies:

```bash
  yarn install
```

5. Run the development server:

```bash
  yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Verified browsers

- Chrome v123.0.6312.87 macOS
- Firefox v124.0.2 macOS

## Extra

- Minimum resolution supported is iPad Pro Landscape: `1366 x 1024`
- Currently there is no navigation to search results and video playback, Mercado Play APIs are not public :(

## Resources

- [Infinite scroll in Next.js](https://twitter.com/asidorenko_/status/1681747562070417410)
- [useDebounce hook](https://designtechworld.medium.com/create-a-custom-debounce-hook-in-react-114f3f245260)
- [Next.js Documentation](https://nextjs.org/docs)
