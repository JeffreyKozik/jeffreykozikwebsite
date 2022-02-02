import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import GomokuComponent from "../../components/pages/gomoku"

const Gomoku = () => (
    <PageComponent pageInnerComponent=<GomokuComponent/> seoName="Gomoku"/>
)

export default Gomoku
