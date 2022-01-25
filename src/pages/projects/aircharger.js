import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import AirChargerComponent from "../../components/pages/aircharger"

import Header from "../../components/header"

const AirCharger = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <Header/>
        <body>
            <Seo title="Air Charger" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <AirChargerComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <AirChargerComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default AirCharger
