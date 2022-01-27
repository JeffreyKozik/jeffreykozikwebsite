import * as React from "react"
import { connect } from 'react-redux';
import Header from "../../../components/header"
import HomePage from "../../../components/homepage"
import { togglePortfolioName } from '../../../state/app';
import Seo from "../../../components/seo"

import * as homepage from "../../../components/homepage.module.css"

function IndexPage() {
    togglePortfolioName("Podmark");
    return (
        <>
            <Seo title="Podmark Portfolio" />
            <Header/>
            <h1 id={homepage.jeffrey_kozik}>Jeffrey Kozik: Podmark Portfolio</h1>
            <HomePage nameArray={["Sciquel", "Urban Earth", "Jeffrey Kozik Website",
             "1World Browser Extension", "smrtnrll Browser Extension", "Bing Utility Belt",
             "Total Cost Browser Extension", "Multitab Search Browser Extension", "SEO Browser Extension"]}/>
        </>
    )
}

export default IndexPage
