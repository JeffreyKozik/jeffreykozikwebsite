import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import SmrtnrllBrowserExtensionComponent from "../../components/pages/smrtnrllbrowserextension"
let element = <>{SmrtnrllBrowserExtensionComponent}</>

const SmrtnrllBrowserExtension = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="smtrnll Browser Extension"/>
    </>
)

export default SmrtnrllBrowserExtension
