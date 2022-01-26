import * as React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";
import ArticleComponent from "./articlecomponent"
import Seo from "../seo"

function PageComponent({ seoName, pageInnerComponent }) {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Helmet>
            <body>
                <Seo title={seoName} />
                <ArticleComponent articleInnerComponent={pageInnerComponent}/>
            </body>
        </>
    )
}

PageComponent.propTypes = {
  pageInnerComponent: PropTypes.element,
  seoName: PropTypes.string
}

export default PageComponent
