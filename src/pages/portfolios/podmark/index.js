import PropTypes from "prop-types"
import * as React from "react"
import { connect } from "react-redux"
import Header from "../../../components/header"
import HomePage from "../../../components/homepage"
import Seo from "../../../components/seo"

import * as homepage from "../../../components/homepage.module.css"

function IndexPage({nothing, change}) {
    return (
        <>
            <Seo title="Podmark Portfolio" />
            <Header/>
            <h1 onLoad={change} id={homepage.jeffrey_kozik}>Jeffrey Kozik: Podmark Portfolio</h1>
            <HomePage nameArray={["Sciquel", "Urban Earth", "Jeffrey Kozik Website",
             "1World Browser Extension", "smrtnrll Browser Extension", "Bing Utility Belt",
             "Total Cost Browser Extension", "Multitab Search Browser Extension", "SEO Browser Extension"]}/>
        </>
    )
}

IndexPage.propTypes = {
  nothing: PropTypes.any.isRequired,
  change: PropTypes.any.isRequired
}

const mapDispatchToProps = dispatch => {
    return { change: () => dispatch({ type: `CHANGE` }) }
}

const ConnectedIndexPage = connect(null, mapDispatchToProps)(IndexPage)

export default ConnectedIndexPage
