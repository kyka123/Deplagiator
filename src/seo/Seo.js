import React from 'react'
import { Helmet } from 'react-helmet'
import icon from 'assets/placeholdericon.png'

const Seo = () => (
    <Helmet>
        <meta charSet="utf-8" />
        <title>Deplagiator</title>
        <link
            href="//db.onlinewebfonts.com/c/f4221c695de0fe4bd63bf82813b53175?family=MS+Gothic"
            rel="stylesheet"
            type="text/css"
        />
        <link rel="icon" href={icon} />
    </Helmet>
)

export default Seo
