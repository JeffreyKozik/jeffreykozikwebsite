import * as React from "react"
import PropTypes from "prop-types"
import MediaQuery from 'react-responsive'
import Header from "../../components/header"

import * as pages from "../../page_styling/pages.module.css"

function ArticleComponent ({innerComponent}) {
    return (
        <>
            <MediaQuery minWidth={821}>
                <div className={pages.page_container}>
                    <Header/>
                    {innerComponent}
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={820}>
                <div className={pages.page_container_phone}>
                    <Header/>
                    {innerComponent}
                </div>
            </MediaQuery>
        </>
    )
}

ArticleComponent.propTypes = {
  innerComponent: PropTypes.element,
}

export default ArticleComponent
