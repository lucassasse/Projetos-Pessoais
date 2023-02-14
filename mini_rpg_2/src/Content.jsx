import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Store } from './pages/Store'
import { Home } from './pages/Home'
import { Gym } from './pages/Gym'
import { Work } from './pages/Work'

export const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/gym" component={Gym} />
      <Route exact path="/work" component={Work} />
    </Switch>
  )
}
