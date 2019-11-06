import React, {
  createContext,
  lazy,
  // Fragment,
  Suspense
} from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import { CssBaseline, LinearProgress } from '@material-ui/core'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
export const ColorContext = createContext()

const App = () => (
  <ColorContext.Provider value="Git">
    <CssBaseline />
    <BrowserRouter>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </ColorContext.Provider>
)

export default App
