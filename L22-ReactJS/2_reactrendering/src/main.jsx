import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RenderFix from './RenderFix.jsx'
import RenderFix2 from './RenderFix2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RenderFix2 />
  </StrictMode>,
)
