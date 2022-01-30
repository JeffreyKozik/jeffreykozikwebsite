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
         "Pathfinding AI Project", "smrtnrll Browser Extension", "Bing Utility Belt", "Shampoo Color Mix Model",
         "Automating Username Check Process", "TradingView Graph Automation", "German Immigration Automation", "RSA", "Smooth Numbers",
         "WalkSAT and DPLL", "Circumvent 2FA Selenium", "Square Build What's POS-sible Hackathon", "Air Charger", "Total Cost Browser Extension",
         "Multitab Search Browser Extension", "P&G Fixing 3D Printer", "GiveBackHack Vol & Tell", "Welcome Back Hack",
         "Automated Way to Get JS Errors", "Autopay Healthcare", "Fixing Selenium Tax Script",
         "Site Checker Browser Extension"]}/>
    </>
)

export default IndexPage
