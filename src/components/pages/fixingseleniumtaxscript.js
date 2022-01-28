import * as React from "react"
import fixingpng from "../../images/fixingseleniumtaxscript.png"
import * as pages from "../../page_styling/pages.module.css"

const FixingSeleniumTaxScriptComponent = () => (
    <>
        <h1 className={pages.page_title}> Fixing Selenium Tax Script </h1>
        <h3 className={pages.page_subtitle}>
            First Fiverr/freelancing gig I did which was fixing a selenium script by adding
            WebDriverWait to wait for an element to load and tweaking a portion using Beautiful Soup.
        </h3>
        <img className={pages.page_video} src={fixingpng} alt="fixing selenium tax script screenshot"/>
        <p className={pages.page_description}>
        </p>
    </>
)

export default FixingSeleniumTaxScriptComponent
