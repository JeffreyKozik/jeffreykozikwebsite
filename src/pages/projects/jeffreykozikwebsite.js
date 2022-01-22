import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import JeffreyKozikWebsiteComponent from "../../components/pages/jeffreykozikwebsite"

const JeffreyKozikWebsite = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="Jeffrey Kozik Website" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <JeffreyKozikWebsiteComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <JeffreyKozikWebsiteComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default JeffreyKozikWebsite
