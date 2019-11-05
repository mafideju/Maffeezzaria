import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

const routes = [
  { path: '/rota1', content: 'Rota 01' },
  { path: '/rota2', content: 'Rota 02' }
]

const Home = () => (
  <Fragment>
    <h1>Maffeezzaria</h1>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          render={() => <h2>{route.content}</h2>}
        />
      ))}
    </Switch>
  </Fragment>
)

export default Home
