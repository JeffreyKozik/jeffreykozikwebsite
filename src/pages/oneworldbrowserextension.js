import * as React from "react"
import demoVideo from "../images/1world.mp4";
import "../page_styling/oneworldbrowserextension.css"
import Seo from "../components/seo"

const OneWorldBrowserExtension = () => (
    <>
        <Seo title="One World Browser Extension" />
        <h1 id="one_world_browser_extension_title"> One World Browser Extension </h1>
        <div class="one_world_container">
            <video controls id="one_world_video">
                <source src={demoVideo} type="video/mp4"></source>
            </video>
        </div>
        <p>

    </>
)

export default OneWorldBrowserExtension
