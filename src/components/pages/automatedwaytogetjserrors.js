import * as React from "react"
import Gist from "react-gist"
import * as pages from "../../page_styling/pages.module.css"

const AutomatedWayToGetJSErrorsComponent = () => (
    <>
        <h1 className={pages.page_title}> Automated Way to Get JS Errors </h1>
        <h3 className={pages.page_subtitle}>
            Selenium script I wrote with Python to automatically retrieve javascript errors from a list of urls in a text file and write
            the errors to individual text files for each url.
        </h3>
        <Gist className={pages.page_description} id='9bf2af7c9e4fc674f88010ac20628a84'/>
        <p className={pages.page_description}>
        </p>
    </>
)

export default AutomatedWayToGetJSErrorsComponent
