import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Form } from '../components/form'
import { Header } from '../organism/Header'
import { Footer } from '../organism/Footer'
import { All } from '../components/All'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Header />
          <Form />
          <Footer />
        </Route>
        <Route path="/all">
          <All />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
