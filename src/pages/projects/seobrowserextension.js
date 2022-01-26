import * as React from "react"
import PageComponent from "../../components/pagecomponent"

import SeoBrowserExtensionComponent from "../../components/pages/seobrowserextension"

const SeoBrowserExtension = () => (
    <>
        <PageComponent innerComponent={SeoBrowserExtensionComponent} seoName="SEO Browser Extension"/>
    </>
)

export default SeoBrowserExtension
