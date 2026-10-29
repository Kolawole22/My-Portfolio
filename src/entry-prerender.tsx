import { renderToString } from 'react-dom/server'
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router'
import { createAppRouter } from './router'

// Called by the prerender plugin in vite.config.js after the client build,
// so the page's content ships in index.html instead of waiting for JS.
export async function render() {
  const router = createAppRouter(createMemoryHistory({ initialEntries: ['/'] }))
  await router.load()
  return renderToString(<RouterProvider router={router} />)
}
