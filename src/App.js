import React, {
  lazy,
  Fragment,
  Suspense,
  useEffect,
  useContext
} from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from './service/firebase'
import { AuthContext } from './contexts/auth'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))

const App = () => {
  const { setUserInfo } = useContext(AuthContext)
  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        console.log('<= USUÁRIO LOGADO =>', user)
        setUserInfo({
          isUserLoggedIn: !!user,
          user
        })
      })
      // eslint-disable-next-line
  }, [])
  return (
    <Fragment>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </Suspense>
    </Fragment>
  )
}

export default App
