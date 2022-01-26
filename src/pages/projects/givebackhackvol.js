import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import GiveBackHackVolComponent from "../../components/pages/givebackhackvol"
let element = <>{GiveBackHackVolComponent}</>

const GiveBackHack = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="GiveBackHack Vol"/>
    </>
)

export default GiveBackHack
