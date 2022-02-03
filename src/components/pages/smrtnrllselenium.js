import { Link } from "gatsby"
import * as React from "react"
import demoVideo from "../../images/smrtnrllseleniumdemo.mp4";
// import demoPoster from "../images/smrtnrllbrowserextensionpic.png"
import * as pages from "../../page_styling/pages.module.css"

const SmrtnrllSeleniumComponent = () => (
    <>
        <h1 className={pages.page_title}> smrtnrll selenium </h1>
        <h3 className={pages.page_subtitle}>
            The smrtnrll python selenium script is used by college students to get into classes that are currently full. Read more
            about the newer version that runs via browser extension <Link to="/projects/smrtnrllbrowserextension">here</Link> and download the
            browser extension <a href="https://chrome.google.com/webstore/detail/smrtnrll/faoobmndgioamolfhbnkdegeolmmgnmj?hl=en&authuser=0" target="_blank" rel="noreferrer">here</a>.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={demoVideo} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            The way it works is by continually refreshing the page and clicking enroll until someone drops the class at which case
            you are enrolled. Combined between this and the newer browser extension version I've succesfully gotten into
            3 classes and others have used it to varying levels of success. The Github repository for this code can be found
            <a href="https://github.com/JeffreyKozik/WaitlistEvader" target="_blank" rel="noreferrer">here</a>.
        </p>
    </>
)

export default SmrtnrllSeleniumComponent
