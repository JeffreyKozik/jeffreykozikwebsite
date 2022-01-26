import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import JeffreyKozikWebsiteComponent from "../../components/pages/jeffreykozikwebsite"
let element = <>{JeffreyKozikWebsiteComponent}</>

const JeffreyKozikWebsite = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="Jeffrey Kozik Website"/>
    </>
)

export default JeffreyKozikWebsite
