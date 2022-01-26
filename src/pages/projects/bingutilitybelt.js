import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import BingUtilityBeltComponent from "../../components/pages/bingutilitybelt"
let element = <>{BingUtilityBeltComponent}</>

const BingUtilityBelt = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="Bing Utility Belt"/>
    </>
)

export default BingUtilityBelt
