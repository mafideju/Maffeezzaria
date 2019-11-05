import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core'

const Login = () => (
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
        <GitHubButton
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={() => console.log('GitHub')}
        >
          GitHub
        </GitHubButton>
        <LinkedInButton
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={() => console.log('LinkedIn')}
        >
          LinkedIn
        </LinkedInButton>
      </Grid>
    </Grid>
  </Container>
)

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
const LinkedInButton = styled(Button)`
  && {
    font-size: 1.25rem;
    max-width: 480px;
    /* margin-top: 5px; */
    text-transform: none;
  }
`

export default Login
