import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import SciquelComponent from "../../components/pages/sciquel"
let element = <>{SciquelComponent}</>

const Sciquel = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="Sciquel"/>
    </>
)

export default Sciquel
