import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core'

const firebaseConfig = {
  apiKey: 'AIzaSyChPqMHhaaXpLIxp0tp3kneBBgRXmY_iqg',
  authDomain: 'maffeezzaria.firebaseapp.com',
  databaseURL: 'https://maffeezzaria.firebaseio.com',
  projectId: 'maffeezzaria',
  storageBucket: 'maffeezzaria.appspot.com',
  messagingSenderId: '524028578544',
  appId: '1:524028578544:web:1b4dd50e0cc453f4879035',
  measurementId: 'G-HK355PRML7'
}

firebase.initializeApp(firebaseConfig)
// firebase.analytics()

class Login extends PureComponent {
  state = {
    isUserLoggedIn: false,
    user: null
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      console.log('USUÁRIO LOGADO =>', user)
      this.setState({
        isUserLoggedIn: !!user,
        user
      })
    })
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      console.log(' <= NÃO HÁ LOGIN =>')
      this.setState({
        isUserLoggedIn: false,
        user: null
      })
    })
  }

  render () {
    const { isUserLoggedIn, user } = this.state
    return (
      <Container>
        <Grid
          container
          justify="center"
          spacing={10}
        >
          <Grid item xs={12}>
            <Typography
              color="primary"
              variant="h3"
              align="center"
            >
              MAFFEEZZARIA
            </Typography>
          </Grid>
          {!isUserLoggedIn && (
            <Grid item xs={12} container justify="center">
              <GitHubButton
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={() => {
                  const provider = new firebase.auth.GithubAuthProvider()
                  firebase.auth().signInWithRedirect(provider)
                }}
              >
                GitHub
              </GitHubButton>
              <GoogleButton
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={() => {
                  const provider = new firebase.auth.GoogleAuthProvider()
                  firebase.auth().signInWithRedirect(provider)
                }}
              >
                Google
              </GoogleButton>
            </Grid>
          )}
          <Grid item>
            {isUserLoggedIn && (
              <>
                <h3>{user.displayName}</h3>
                <h3>{user.email}</h3>
                <Button
                  size="large"
                  variant="outlined"
                  color="primary"
                  onClick={this.logout}
                >
                  Sair
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    )
  }
}

const Container = styled.div`
  padding: 40px;
`
const GitHubButton = styled(Button)`
  && {
    font-size: 1.25rem;
    max-width: 480px;
    text-transform: none;
  }
`
const GoogleButton = styled(Button)`
  && {
    font-size: 1.25rem;
    max-width: 480px;
    /* margin-top: 5px; */
    text-transform: none;
  }
`

export default Login
