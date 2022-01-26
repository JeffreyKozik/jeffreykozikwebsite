import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import AirChargerComponent from "../../components/pages/aircharger"
let element = <>{AirChargerComponent}</>

const AirCharger = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="Air Charger"/>
    </>
)

export default AirCharger
