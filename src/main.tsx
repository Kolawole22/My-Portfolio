import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { createAppRouter } from './router'

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'

const router = createAppRouter()

// Render the app. In production, #app already holds prerendered HTML so the
// page is readable before this runs; React replaces it with the live tree.
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.hasAttribute('data-mounted')) {
  rootElement.setAttribute('data-mounted', '')
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
