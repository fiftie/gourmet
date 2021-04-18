import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Form } from '../components/Form'
import { All } from '../components/All'
import { Meat } from '../components/Meat'
import { Fish } from '../components/Fish'
import { Noodle } from '../components/Noodle'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/gourmet" >
          <Form />
        </Route>
        <Route path="/all">
          <All />
        </Route>
        <Route path="/meat">
          <Meat />
        </Route>
        <Route path="/fish">
          <Fish />
        </Route>
        <Route path="/noodle">
          <Noodle />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
