import * as React from "react"
import Gist from "react-gist"
import * as pages from "../../page_styling/pages.module.css"

const AutopayHealthcareComponent = () => (
    <>
        <h1 className={pages.page_title}> Autopay Healthcare </h1>
        <h3 className={pages.page_subtitle}>
            I coded a Selenium script with Python to automatically pay a healthcare bill for someone whose
            website didn't have an autopay option.
        </h3>
        <Gist className={pages.page_description} id='76ed341165ea64e06160ae5b386336ad'/>
        <p className={pages.page_description}>
        </p>
    </>
)

export default AutopayHealthcareComponent
