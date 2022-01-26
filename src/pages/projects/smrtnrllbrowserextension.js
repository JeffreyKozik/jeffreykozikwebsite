import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

import MediaQuery from 'react-responsive'
import SmrtnrllBrowserExtensionComponent from "../../components/pages/smrtnrllbrowserextension"
import Header from "../../components/header"

const SmrtnrllBrowserExtension = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="smrtnrll browser extension" />
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <Header/>
                    <SmrtnrllBrowserExtensionComponent/>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <Header/>
                    <SmrtnrllBrowserExtensionComponent/>
                </div>
            </MediaQuery>
        </body>
    </>
)

export default SmrtnrllBrowserExtension
