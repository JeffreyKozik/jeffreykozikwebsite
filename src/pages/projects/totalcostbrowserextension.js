import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import TotalCostBrowserExtensionComponent from "../../components/pages/totalcostbrowserextension"
let element = <>{TotalCostBrowserExtensionComponent}</>

const TotalCostBrowserExtension = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="Total Cost Browser Extension"/>
    </>
)

export default TotalCostBrowserExtension
