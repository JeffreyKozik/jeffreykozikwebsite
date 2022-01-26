import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import MultitabSearchComponent from "../../components/pages/multitabsearch"
import Header from "../../components/header"

const MultitabSearch = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="Multitab Search Browser Extension" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <Header/>
                    <MultitabSearchComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <Header/>
                    <MultitabSearchComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default MultitabSearch
