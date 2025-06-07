import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // ✅ harus cocok persis dengan nama file (case-sensitive)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
