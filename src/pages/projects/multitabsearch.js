import * as React from "react"
import PageComponent from "../../components/pagesHelpers/pagecomponent"

import MultiTabSearchComponent from "../../components/pages/multitabsearch"

const MultiTabSearch = () => (
    <>
        <PageComponent pageInnerComponent={<>{MultiTabSearchComponent}</>} seoName="MultiTab Search"/>
    </>
)

export default MultiTabSearch
