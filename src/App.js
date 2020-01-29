import React, {
  lazy,
  Fragment,
  Suspense,
  useEffect,
  useContext,
  useState
} from 'react'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import {
  LinearProgress,
  CircularProgress,
  Grid
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { AuthContext } from './contexts/auth'
import firebase from './service/firebase'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))

const App = ({ location }) => {
  const [checkUserIn, setCheckUserIn] = useState(false)
  const { userInfo, setUserInfo, logout } = useContext(AuthContext)
  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        console.log('<= USUÁRIO LOGADO =>', user)
        setUserInfo({
          isUserLoggedIn: !!user,
          user
        })
        setCheckUserIn(true)
      })
    window.logout = logout
    // eslint-disable-next-line
  }, [])

  if (!checkUserIn) {
    return (
      <Grid container justify="center" style={{ marginTop: '10rem' }}>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    )
  }

  if (isUserLoggedIn) {
    if (location.pathname === '/login') {
      return <Redirect to='/' />
    }
  } else {
    if (location.pathname !== '/login') {
      return <Redirect to='/login' />
    }
  }

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

App.defaultProps = {
  location: {
    pathname: ''
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default App
