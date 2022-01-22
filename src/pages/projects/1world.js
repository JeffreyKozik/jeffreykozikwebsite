import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import OneWorldComponent from "../../../components/pages/1world"

const OneWorld = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="1World Browser Extension" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <OneWorldComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <OneWorldComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default OneWorld
