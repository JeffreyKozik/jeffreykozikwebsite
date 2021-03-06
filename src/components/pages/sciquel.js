import * as React from "react"
import sciquelhomepage1 from "../../images/sciquelhomepage1.png"
import sciquelhomepage2andfooter from "../../images/sciquelhomepage2andfooter.png"
import sciquelarticlepage from "../../images/sciquelarticlepage.png"
import sciquelarticlepage2 from "../../images/sciquelarticlepage2.png"
import sciquelaboutuspage from "../../images/sciquelaboutuspage.png"
import sciquelgetinvolvedpage1 from "../../images/sciquelgetinvolvedpage.png"
import sciquelgetinvolvedpage2 from "../../images/sciquelgetinvolvedpage2.png"
import demoVideo from "../../images/sciqueldemofinished.mp4"
import responsiveVideo from "../../images/sciquelresponsivefinal.mp4"
import * as pages from "../../page_styling/pages.module.css"

const SciquelComponent = () => (
    <>
        <h1 className={pages.page_title}> sciquel </h1>
        <h3 className={pages.page_subtitle}>
            Sciquel is a website that myself and one other person worked together on to code. It is a project that a number of
            Harvard Medical School students came up with to make science more accessible to the average person as academic papers
            are often very complicated to read and more often than not cost money to read.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={demoVideo} type="video/mp4"></source>
        </video>
        <img className={pages.page_video} src={sciquelhomepage1}></img>
        <img className={pages.page_video} src={sciquelhomepage2andfooter}></img>
        <video controls preload="auto" className={pages.page_video}>
            <source src={responsiveVideo} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            The images and video above show the homepage which is what I worked on mostly. I initially used Bootstrap, but eventually switched to flexbox because I wanted a little bit more
            customization on the components. I also worked hard to make this page responsive (as you can see in the video above) which
            was especially tricky because of the overlapping components. My teammate worked on header and footer and the rest of the pages screenshotted below.
        </p>
        <img className={pages.page_video} src={sciquelarticlepage}></img>
        <img className={pages.page_video} src={sciquelarticlepage2}></img>
        <img className={pages.page_video} src={sciquelaboutuspage}></img>
        <img className={pages.page_video} src={sciquelgetinvolvedpage1}></img>
        <img className={pages.page_video} src={sciquelgetinvolvedpage2}></img>
    </>
)

export default SciquelComponent
