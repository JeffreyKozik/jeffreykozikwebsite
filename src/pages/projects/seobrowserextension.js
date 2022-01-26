import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import SeoBrowserExtensionComponent from "../../components/pages/seobrowserextension"
let element = <>{SeoBrowserExtensionComponent}</>

const SeoBrowserExtension = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="SEO Browser Extension"/>
    </>
)

export default SeoBrowserExtension
