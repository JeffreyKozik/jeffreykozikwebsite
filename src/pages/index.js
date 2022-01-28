import * as React from "react"
import HomePage from "../components/homepage"
import Header from "../components/header"
import Seo from "../components/seo"

import * as homepage from "../components/homepage.module.css"

const IndexPage = () => (
    <>
        <Seo title="Home" />
        <Header/>
        <h1 id={homepage.jeffrey_kozik}>Jeffrey Kozik</h1>
        <HomePage nameArray={["1World Browser Extension", "Urban Earth", "Sciquel", "Jeffrey Kozik Website",
         "smrtnrll Browser Extension", "Bing Utility Belt", "Shampoo Color Mix Model", "Automating Username Check Process",
         "German Immigration Automation", "RSA", "Smooth Numbers", "WalkSAT and DPLL", "Circumvent 2FA Selenium", "Automated Way to Get JS Errors", "Autopay Healthcare",
         "Square Build What's POS-sible Hackathon", "Fixing Selenium Tax Script", "TradingView Graph Automation"]}/>
    </>
)

export default IndexPage
