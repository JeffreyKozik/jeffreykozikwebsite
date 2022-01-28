import * as React from "react"
import Gist from "react-gist"
import * as pages from "../../page_styling/pages.module.css"

const GermanImmigrationAutomationComponent = () => (
    <>
        <h1 className={pages.page_title}> German Immigration Automation </h1>
        <h3 className={pages.page_subtitle}>
            Selenium script I coded with Python and the Gmail API to automatically get
            client an appointment with German Immigration office and email them through the Gmail API
            when a spot opened up as well as make a "chime" sound.
        </h3>
        <Gist className={pages.page_description} id="ebe4df2080cb8aeaff1d1ffd921a61e8"/>
        <p className={pages.page_description}>
        </p>
    </>
)

export default GermanImmigrationAutomationComponent
