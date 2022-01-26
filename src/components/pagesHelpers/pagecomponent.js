import * as React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";
import MediaQuery from 'react-responsive'
import Header from "../header"
import Seo from "../seo"

import * as pages from "../../page_styling/pages.module.css"

function PageComponent({ seoName, pageInnerComponent }) {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Helmet>
            <body>
                <Seo title={seoName} />
                <MediaQuery minWidth={821}>
                    <div className={pages.page_container}>
                        <Header/>
                        <>{pageInnerComponent}</>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={820}>
                    <div className={pages.page_container_phone}>
                        <Header/>
                        <>{pageInnerComponent}</>
                    </div>
                </MediaQuery>
            </body>
        </>
    )
}

PageComponent.propTypes = {
  pageInnerComponent: PropTypes.node,
  seoName: PropTypes.string
}

export default PageComponent
