import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import SciquelComponent from "../../components/pages/sciquel"

const Sciquel = () => (
    <>
        <PageComponent pageInnerComponent={<>{SciquelComponent}</>} seoName="Sciquel"/>
    </>
)

export default Sciquel
