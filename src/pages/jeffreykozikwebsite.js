import * as React from "react"
import jeffreykozikScreenshot from "../images/smrtnrllbrowserextensionpic.png"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const JeffreyKozikWebsite = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="Jeffrey Kozik Website" />
            <div className="page_container">
                <h1 className="page_title"> Jeffrey Kozik Website </h1>
                <h3 className="page_subtitle">

                </h3>
                <img className="page_video" src={jeffreykozikScreenshot} alt="jeffreykozik.com screenshot"/>
                <p className="page_description">
                    The way it works is by continually refreshing the page and clicking enroll until someone drops the class at which case
                    you are enrolled. I've used this to succesfully get into 2 classes.
                </p>
            </div>
        </body>
    </>
)

export default JeffreyKozikWebsite
