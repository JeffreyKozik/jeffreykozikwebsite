// import PropTypes from "prop-types"
import * as React from "react"
// import { connect } from "react-redux"
import Header from "../../../components/header"
import HomePage from "../../../components/homepage"
import Seo from "../../../components/seo"
// import { useSessionStorage } from '../../../hooks/useSessionStorage'

import * as homepage from "../../../components/homepage.module.css"

function IndexPage() {
    // const [portfolioName, setPortfolioName] = useSessionStorage('name', "");
    // () => {setPortfolioName("Podmark")};
    // console.log("index portfolioName: " + portfolioName);
    return (
        <>
            <Seo title="Podmark Portfolio" />
            <Header/>
            <HomePage nameArray={["Sciquel",
                                  "Urban Earth",
                                  "This Website",
                                  "1World",
                                  "smrtnrll 2.0",
                                  "BingAdFinder",
                                  "Total Cost",
                                  "MultiSearch",
                                  "Site Checker"]}
                                  titleName="Jeffrey Kozik: Podmark Portfolio"/>
        </>
    )
}

// IndexPage.propTypes = {
//   nothing: PropTypes.any.isRequired,
//   change: PropTypes.any.isRequired
// }

export default IndexPage;
// const mapDispatchToProps = dispatch => {
//     return { change: () => dispatch({ type: `CHANGE` }) }
// }
//
// const ConnectedIndexPage = connect(null, mapDispatchToProps)(IndexPage)
//
// export default ConnectedIndexPage
