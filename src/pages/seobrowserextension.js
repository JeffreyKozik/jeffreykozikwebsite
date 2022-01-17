import * as React from "react"
import siteChecker from "../images/site-checker.org.mp4"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const SeoBrowserExtension = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="SEO Browser Extension" />
            <div className="page_container">
                <h1 className="page_title"> site-checker.org browser extension </h1>
                <h3 className="page_subtitle">
                    Browser extension I coded for the owner of <a href="site-checker.org" target="_blank" rel="noreferrer">site-checker.org</a> to easily get SEO tips for any website.
                </h3>
                <video controls preload="auto" className="page_video">
                    <source src={siteChecker} type="video/mp4"></source>
                </video>
                <p className="page_description">
                    This browser extension is in the hands of the owner of site-checker.org at the moment and they have chosen not to release it on the chrome extension
                    store yet. However, the video above gives a good idea of what the browser extension does. To be clear, I did not code any of <a href="site-checker.org">site-checker.org</a>
                     I coded the browser extension which easily opens a new tab analyzing the current website's SEO.
                </p>
            </div>
        </body>
    </>
)

export default SeoBrowserExtension
