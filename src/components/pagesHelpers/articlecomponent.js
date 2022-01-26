import * as React from "react"
import PropTypes from "prop-types"
import MediaQuery from 'react-responsive'
import Header from "../header"

import * as pages from "../../page_styling/pages.module.css"

function ArticleComponent ({articleInnerComponent}) {
    return (
        <>
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <Header/>
                    <>{articleInnerComponent}</>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <Header/>
                    <>{articleInnerComponent}</>
                </div>
            </MediaQuery>
        </>
    )
}

ArticleComponent.propTypes = {
  articleInnerComponent: PropTypes.element
}

export default ArticleComponent
