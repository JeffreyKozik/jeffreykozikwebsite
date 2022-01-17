import * as React from "react"
import multitabdemo from "../images/multitabedited.mp4"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const MultiTabSearch = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="sciquel" />
            <div className="page_container">
                <h1 className="page_title"> Search Multiple Tabs Browser Extension </h1>
                <h3 className="page_subtitle">
                    Custom browser extension I coded so that 12 different tabs could be searched across simultaneously.
                </h3>
                <video controls preload="auto" className="page_video">
                    <source src={multitabdemo} type="video/mp4"></source>
                </video>
                <p className="page_description">
                    In the video I had to redact quite a bit of information because it's a business's private clients. However, you can tell from
                    the video that when a name is searched the tabs that have that name change their name to "FOUND" and the ones that aren't
                    change their names to their corresponding subdomain so it's easier to tell what tab corresponds to what.
                </p>
            </div>
        </body>
    </>
)

export default MultiTabSearch
