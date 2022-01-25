import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import WelcomeBackHackComponent from "../../components/pages/welcomebackhack"
import Header from "../../components/header"

const WelcomeBackHack = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="WelcomeBackHack" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <Header/>
                    <WelcomeBackHackComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <Header/>
                    <WelcomeBackHackComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default WelcomeBackHack
