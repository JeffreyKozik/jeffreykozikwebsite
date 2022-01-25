import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import BingUtilityBeltComponent from "../../components/pages/bingutilitybelt"

import Header from "../../components/header"

const BingUtilityBelt = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Header/>
            <Seo title="Bing Utility Belt" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                <Header/>
                    <BingUtilityBeltComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <Header/>
                    <BingUtilityBeltComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default BingUtilityBelt
