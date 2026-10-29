import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer, defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// Renders the home page to HTML after the client build and writes it into
// index.html, so crawlers, link previews and slow phones get real content
// before any JavaScript runs.
function prerender() {
  let outDir
  return {
    name: 'portfolio-prerender',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      const server = await createServer({
        appType: 'custom',
        logLevel: 'error',
        server: { middlewareMode: true, hmr: false, watch: null },
      })
      try {
        const { render } = await server.ssrLoadModule(
          '/src/entry-prerender.tsx',
        )
        const appHtml = await render()
        const file = resolve(outDir, 'index.html')
        const html = await readFile(file, 'utf8')
        const placeholder = '<div id="app"></div>'
        if (!html.includes(placeholder)) {
          throw new Error(`prerender: ${placeholder} not found in ${file}`)
        }
        await writeFile(
          file,
          html.replace(placeholder, () => `<div id="app">${appHtml}</div>`),
        )
      } finally {
        await server.close()
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
    prerender(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
