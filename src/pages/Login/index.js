import React, {
  useContext,
  Fragment
} from 'react'
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core'
import styled from 'styled-components'
import { AuthContext } from './../../contexts/auth'

function Login () {
  const { githubLogin, googleLogin } = useContext(AuthContext)

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
        <Grid item xs={12} container justify="center">
          <Fragment>
            <GitHubButton
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={githubLogin}
            >
                GitHub
            </GitHubButton>
            <GoogleButton
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={googleLogin}
            >
                Google
            </GoogleButton>
          </Fragment>
        </Grid>
        {/* <CenterGrid item>
          <>
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
        </CenterGrid> */}
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

// const CenterGrid = styled(Grid)`
//   && {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }`

export default Login
