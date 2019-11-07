import React, {
  useState,
  useEffect,
  Fragment
} from 'react'
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core'
import styled from 'styled-components'
import firebase from './../../service/firebase'

function Login () {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })
  const { isUserLoggedIn, user } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log('<= USUÁRIO LOGADO =>', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log(' <= NÃO HÁ LOGIN =>')
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }

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
            <Fragment>
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
            </Fragment>
          </Grid>
        )}
        <CenterGrid item>
          {isUserLoggedIn && (
            <>
              <h3>{user.displayName}</h3>
              <h3>{user.email}</h3>
              {user.emailVerified && (
                <h5>Usuário Autorizado</h5>
              )}
              <Button
                style={{ marginTop: '2rem' }}
                size="large"
                variant="outlined"
                color="primary"
                onClick={logout}
              >
                Sair
              </Button>
            </>
          )}
        </CenterGrid>
      </Grid>
    </Container>
  )
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

const CenterGrid = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
  }`

export default Login
