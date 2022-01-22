import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import GiveBackHackVolComponent from "../../../components/pages/givebackhackvol"

const GiveBackHack = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="GiveBackHack Vol"/>
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <GiveBackHackVolComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <GiveBackHackVolComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default GiveBackHack
