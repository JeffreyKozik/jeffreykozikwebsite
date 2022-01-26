import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import UrbanEarthComponent from "../../components/pages/urbanearth"
let element = <>{UrbanEarthComponent}</>

const UrbanEarth = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="Urban Earth"/>
    </>
)

export default UrbanEarth
