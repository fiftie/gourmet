import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Form } from '../components/form'
import { All } from '../components/All'
import { Meat } from '../components/Meat'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Form />
        </Route>
        <Route path="/all">
          <All />
        </Route>
        <Route path="/meat">
          <Meat />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
