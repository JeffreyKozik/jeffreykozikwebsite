import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import MultiTabSearchComponent from "../../components/pages/multitabsearch"
let element = <>{MultiTabSearchComponent}</>

const MultiTabSearch = () => (
    <>
        <PageComponent pageInnerComponent={element} seoName="MultiTab Search"/>
    </>
)

export default MultiTabSearch
