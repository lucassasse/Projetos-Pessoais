import React from "react";
import {Switch, Route} from 'react-router-dom'
import { Store } from "./pages/Store";
import { Home } from "./pages/Home"

export const Content = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/store' component={Store}/>
    </Switch>
  )
}