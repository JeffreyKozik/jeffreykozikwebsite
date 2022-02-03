import * as React from "react"
import automateUsernameCheckProcess from "../../images/automateusernamecheckprocess.mp4"
import Gist from "react-gist"
import * as pages from "../../page_styling/pages.module.css"

const AutomatingUsernameCheckProcessComponent = () => (
    <>
        <h1 className={pages.page_title}> Automating Username Check Process </h1>
        <h3 className={pages.page_subtitle}>
            Desktop GUI I created using Python with tkinter for the frontend and Selenium and openpyxl for the backend that automatically filled
            out an excel sheet giving information about users that would be extremely tedious and take a long time to do manually.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={automateUsernameCheckProcess} type="video/mp4"></source>
        </video>
        <Gist className={pages.page_description} id='0d71714e8a926f680f51d82bc07ea4df'/>
        <p className={pages.page_description}>
        </p>
    </>
)

export default AutomatingUsernameCheckProcessComponent
