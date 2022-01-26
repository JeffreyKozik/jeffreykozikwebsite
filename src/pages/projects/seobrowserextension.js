import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import SeoBrowserExtensionComponent from "../../components/pages/seobrowserextension"

const SeoBrowserExtension = () => (
    <>
        <PageComponent pageInnerComponent={<>{SeoBrowserExtensionComponent}</>} seoName="SEO Browser Extension"/>
    </>
)

export default SeoBrowserExtension
