# Next.js + Remotion Template

This template uses Next.js App Router and Remotion to create and render videos locally.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Rendering Videos

This template uses Remotion for local video rendering. Videos will be saved in the `out` directory.

### Development

- Use `npm run remotion` to open Remotion Studio and preview your compositions
- The Remotion Studio will be available at [http://localhost:3000](http://localhost:3000)

### Production

- Videos are rendered locally using Remotion's rendering engine
- Rendered videos are saved to the `out` directory
- You can preview the rendered video using your system's default video player

## Project Structure

- `/remotion` - Contains all Remotion compositions and components
- `/components` - React components used in the Next.js app
- `/out` - Directory where rendered videos are saved
- `remotion.config.ts` - Remotion configuration for local rendering

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Remotion Documentation](https://www.remotion.dev/docs)
