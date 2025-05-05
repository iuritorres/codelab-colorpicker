import React from 'react'
import { createRoot } from 'react-dom/client'
import '../../globals.css'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(<App />)
