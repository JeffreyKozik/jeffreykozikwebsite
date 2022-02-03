import * as React from "react"
import malthus from "../../images/malthus.png"
import * as pages from "../../page_styling/pages.module.css"

const ThomasRobertMalthusComponent = () => (
    <>
        <h1 className={pages.page_title}> Thomas Robert Malthus </h1>
        <h3 className={pages.page_subtitle}>
            Presentation I coded in 2016 with javascript on Thomas Robert Malthus' theory of overpopulation
        </h3>
        <a href="https://www.khanacademy.org/computer-programming/thomas-robert-malthus/4574807183458304" target="_blank" rel="noreferrer">
            <img className={pages.page_video} src={malthus} alt="basketball screenshot"/>
        </a>
        <p className={pages.page_description}>
            Click on link <a href="https://www.khanacademy.org/computer-programming/thomas-robert-malthus/4574807183458304" target="_blank" rel="noreferrer">here</a>
            to go to the presentation page.
        </p>
    </>
)

export default ThomasRobertMalthusComponent
