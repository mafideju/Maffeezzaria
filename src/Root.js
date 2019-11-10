import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { CssBaseline } from '@material-ui/core'
import App from './App'
import AuthProvider from './contexts/auth'

const Root = () => {
  return (
    <AuthProvider>
      <CssBaseline />
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default hot(module)(Root)
