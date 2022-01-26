import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import AirChargerComponent from "../../components/pages/aircharger"

const AirCharger = () => (
    <>
        <PageComponent pageInnerComponent={<>{AirChargerComponent}</>} seoName="Air Charger"/>
    </>
)

export default AirCharger
