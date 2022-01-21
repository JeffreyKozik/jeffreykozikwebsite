import * as React from "react"
import demoVideo from "../../images/smrtnrlldemo.mp4";
// import demoPoster from "../images/smrtnrllbrowserextensionpic.png"
import "../../page_styling/pages.module.css"
import Seo from "../../components/seo"

import {Helmet} from "react-helmet";

const SmrtnrllBrowserExtension = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="smrtnrll browser extension" />
            <div className="page_container">
                <h1 className="page_title"> smrtnrll browser extension </h1>
                <h3 className="page_subtitle">
                    The smrtnrll browser extension is used by college students to get into classes that are currently full. Add it to your
                    browser <a href="https://chrome.google.com/webstore/detail/smrtnrll/faoobmndgioamolfhbnkdegeolmmgnmj?hl=en&authuser=0" target="_blank" rel="noreferrer">here</a>.
                </h3>
                <iframe className="page_video" src="https://www.youtube-nocookie.com/embed/59Mph03CJZU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p className="page_description">
                    The way it works is by continually refreshing the page and clicking enroll until someone drops the class at which case
                    you are enrolled. I've used this to succesfully get into 3 classes and others have used it to varying levels of success.
                </p>
            </div>
        </body>
    </>
)

export default SmrtnrllBrowserExtension
