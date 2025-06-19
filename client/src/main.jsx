import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CompanyContextProvider } from './context/CompanyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CompanyContextProvider>
    <App />
    </CompanyContextProvider>
  </StrictMode>,
)
