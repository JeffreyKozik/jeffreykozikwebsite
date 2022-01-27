import PropTypes from "prop-types"
import * as React from "react"
import {Helmet} from "react-helmet";
import MediaQuery from 'react-responsive'
import ConnectedHeader from "../header"
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
                        <ConnectedHeader/>
                        {pageInnerComponent}
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={820}>
                    <div className={pages.page_container_phone}>
                        <ConnectedHeader/>
                        {pageInnerComponent}
                    </div>
                </MediaQuery>
            </body>
        </>
    )
}

PageComponent.propTypes = {
  pageInnerComponent: PropTypes.any,
  seoName: PropTypes.string
}

PageComponent.defaultProps = {
    pageInnerComponent: <div>Site under construction.</div>,
    seoName: "Site under construction"
}

export default PageComponent
