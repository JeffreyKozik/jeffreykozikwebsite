import * as React from "react"
import siteChecker from "../../images/site-checker.org.mp4"
import * as pages from "../../page_styling/pages.module.css"

const SeoBrowserExtensionComponent = () => (
    <>
        <h1 className={pages.page_title}> site-checker.org browser extension </h1>
        <h3 className={pages.page_subtitle}>
            Browser extension I coded for the owner of <a href="site-checker.org" target="_blank" rel="noreferrer">site-checker.org</a> to easily get SEO tips for any website.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={siteChecker} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            This browser extension is in the hands of the owner of site-checker.org at the moment and they have chosen not to release it on the chrome extension
            store yet. However, the video above gives a good idea of what the browser extension does. To be clear, I did not code any of <a href="site-checker.org">site-checker.org</a>
              I coded the browser extension which easily opens a new tab analyzing the current website's SEO.
        </p>
        <p className={pages.page_description}>
            You can view the Github repo <a href="https://github.com/JeffreyKozik/Site-Checker" target="_blank" rel="noreferrer">here</a>.
        </p>
    </>
)

export default SeoBrowserExtensionComponent
