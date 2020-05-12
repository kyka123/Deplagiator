import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from 'pages/About'
import Home from 'pages/Home'

const Router = ({ children }) => (
    <BrowserRouter>
        {children}
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Router
