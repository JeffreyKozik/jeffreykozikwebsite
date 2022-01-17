import * as React from "react"
import demoVideo from "../images/smrtnrlldemo.mp4";
// import demoPoster from "../images/smrtnrllbrowserextensionpic.png"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const SmrtnrllBrowserExtension = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="smrtnrll browser extension" />
            <div className="page_container">
                <h1 className="page_title"> smrtnrll browser extension </h1>
                <h3 className="page_subtitle">
                    The smrtnrll browser extension is used by college students to get into classes that are currently full.
                </h3>
                <iframe src="https://www.youtube.com/watch?v=59Mph03CJZU" className="page_video">-</iframe>
                <p className="page_description">
                    The way it works is by continually refreshing the page and clicking enroll until someone drops the class at which case
                    you are enrolled. I've used this to succesfully get into 2 classes.
                </p>
            </div>
        </body>
    </>
)

export default SmrtnrllBrowserExtension
