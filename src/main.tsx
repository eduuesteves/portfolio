import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App1 } from './App1'
import { App2 } from './App2'
import { AuthProvider } from './Context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App1 />
        <App2 />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
