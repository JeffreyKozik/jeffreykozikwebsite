import { Link } from "gatsby"
import * as React from "react"
import demoVideo from "../../images/smrtnrlldemo.mp4";
// import demoPoster from "../images/smrtnrllbrowserextensionpic.png"
import * as pages from "../../page_styling/pages.module.css"

const SmrtnrllBrowserExtensionComponent = () => (
    <>
        <h1 className={pages.page_title}> smrtnrll browser extension </h1>
        <h3 className={pages.page_subtitle}>
            The smrtnrll browser extension is used by college students to get into classes that are currently full. Add it to your
            browser <a href="https://chrome.google.com/webstore/detail/smrtnrll/faoobmndgioamolfhbnkdegeolmmgnmj?hl=en&authuser=0" target="_blank" rel="noreferrer">here</a>.
        </h3>
        <iframe className={pages.page_video} src="https://www.youtube-nocookie.com/embed/59Mph03CJZU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p className={pages.page_description}>
            The way it works is by continually refreshing the page and clicking enroll until someone drops the class at which case
            you are enrolled. Combined between this and the original <Link to="/projects/smrtnrllselenium">Python Selenium version</Link> I've succesfully gotten into
            3 classes and others have used it to varying levels of success.
        </p>
    </>
)

export default SmrtnrllBrowserExtensionComponent
