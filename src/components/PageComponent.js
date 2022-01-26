import * as React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet";
import ArticleComponent from "./articlecomponent"
import Seo from "./seo"

class PageComponent extends React.Component {
    render(){
        return (
            <>
                <Helmet>
                    <meta name="viewport" content="initial-scale=1, width=device-width"/>
                </Helmet>
                <body>
                    <Seo title={this.props.seoName} />
                    <ArticleComponent innerComponent={this.props.innerComponent}/>
                </body>
            </>
        )
    }
}

PageComponent.propTypes = {
  innerComponent: PropTypes.element,
  seoName: PropTypes.string
}

export default PageComponent
