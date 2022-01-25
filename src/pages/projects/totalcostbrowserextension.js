import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import TotalCostBrowserExtensionComponent from "../../components/pages/totalcostbrowserextension"
import Header from "../../components/header"

const TotalCostBrowserExtension = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="Total Cost Browser Extension" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <Header/>
                    <TotalCostBrowserExtensionComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <Header/>
                    <TotalCostBrowserExtensionComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default TotalCostBrowserExtension
