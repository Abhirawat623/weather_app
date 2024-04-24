import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ModalProvider } from './context/modal-context.jsx'
import { HashRouter as Router } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
    <Router>
    <App />
    </Router>
    </ModalProvider>
  </React.StrictMode>,
)
