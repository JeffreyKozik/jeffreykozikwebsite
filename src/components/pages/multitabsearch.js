import * as React from "react"
import multitabdemo from "../../images/multitabedited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const MultiTabSearchComponent = () => (
    <>
        <h1 className={pages.page_title}> Search Multiple Tabs Browser Extension </h1>
        <h3 className={pages.page_subtitle}>
            Custom browser extension I coded so that 12 different tabs could be searched across simultaneously.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={multitabdemo} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            In the video I had to redact quite a bit of information because it's a business's private clients. However, you can tell from
            the video that when a name is searched the tabs that have that name change their name to "FOUND" and the ones that aren't
            change their names to their corresponding subdomain so it's easier to tell what tab corresponds to what. In the video only 2
            tabs are shown, but the browser extension can be used with as many tabs as needed, in this case 12 were used by the client.
        </p>
    </>
)

export default MultiTabSearchComponent
