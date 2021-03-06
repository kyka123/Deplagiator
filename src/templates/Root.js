import React from 'react'
import Router from 'templates/Router'
import GlobalStyle from 'themes/GlobalStyle'
import Seo from 'seo/Seo'
const Root = ({ children }) => {
    return (
        <div>
            <Seo />
            <GlobalStyle />
            <Router>{children}</Router>
        </div>
    )
}

export default Root
