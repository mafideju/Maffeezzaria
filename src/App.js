import React, {
  lazy,
  Fragment,
  Suspense
} from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))

const App = () => (
  <Fragment>
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Home} />
      </Switch>
    </Suspense>
  </Fragment>
)

export default App
