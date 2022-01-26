import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import WelcomeBackHackComponent from "../../components/pages/welcomebackhack"
let element = <>{WelcomeBackHackComponent}</>

const WelcomeBackHack = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="WelcomeBackHack"/>
    </>
)

export default WelcomeBackHack
