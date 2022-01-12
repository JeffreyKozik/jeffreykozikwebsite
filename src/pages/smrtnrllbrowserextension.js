import * as React from "react"
import demoVideo from "../images/smrtnrlldemo.mp4";
import demoPoster from "../images/smrtnrllbrowserextensionpic.png"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const SmrtnrllBrowserExtension = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="smrtnrll browser extension" />
            <div class="page_container">
                <h1 class="page_title"> smrtnrll browser extension </h1>
                <h3 class="page_subtitle">
                    The smrtnrll browser extension is used by college students to get into classes that are currently full. The way it works
                    is by continually refreshing the page and clicking enroll until someone drops the class at which case you are enrolled. I've
                    used this to succesfully get into 2 classes.
                </h3>
                <video controls poster="demoPoster" class="page_video">
                    <source src={demoVideo} type="video/mp4"></source>
                </video>
            </div>
        </body>
    </>
)

export default SmrtnrllBrowserExtension
