import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AuthProvider from './contexts/auth'

export default function Root () {
  return (
    <AuthProvider>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  )
}
