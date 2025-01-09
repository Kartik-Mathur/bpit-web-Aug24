import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Question2 from './Question2.jsx'
import Question3 from './Question3.jsx'
import Question4 from './Question4.jsx'
import Question5 from './Question5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Question2 /> */}
    {/* <Question3 /> */}
    {/* <Question4 /> */}
    <Question5 />
  </StrictMode>,
)
