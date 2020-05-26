import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import About from 'pages/About'
import Home from 'pages/Home'
import Contact from 'pages/Contact'

const Router = ({ children }) => (
    <BrowserRouter>
        {children}
        <Switch>
            <Route path="/about">
                <About />
            </Route>

            <Route path="/home">
                <Home />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/">
                <Redirect to="home" />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default Router
