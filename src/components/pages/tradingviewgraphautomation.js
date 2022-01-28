import * as React from "react"
import Gist from "react-gist"
import tradingviewautomation_edited from "../../images/tradingviewautomation_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const TradingViewGraphAutomationComponent = () => (
    <>
        <h1 className={pages.page_title}> TradingView Graph Automation </h1>
        <h3 className={pages.page_subtitle}>
            Selenium script and GUI I wrote with python, openpyxl, tkinter, PIL, and Screenshot
            to automate the process of taking screenshots of market activity. Process is easily
            repeatable because defaults are saved.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={tradingviewautomation_edited} type="video/mp4"></source>
        </video>
        <Gist className={pages.page_description} id='7535e15d618ed5331a70c8e6508fa2b4'/>
        <p className={pages.page_description}>
        </p>
    </>
)

export default TradingViewGraphAutomationComponent
