import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AllPage } from '../pages/AllPage'
import { TopPage } from '../pages/TopPage'

export const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <TopPage />
        </Route>
        <Route path="/all">
          <AllPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
