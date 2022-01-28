import * as React from "react"
import automateUsernameCheckProcess from "../../images/automateusernamecheckprocess.png"
import * as pages from "../../page_styling/pages.module.css"

const AutomatingUsernameCheckProcessComponent = () => (
    <>
        <h1 className={pages.page_title}> Automating Username Check Process </h1>
        <h3 className={pages.page_subtitle}>
            Desktop GUI I created using Python with tkinter for the frontend and Selenium and openpyxl for the backend that automatically filled
            out an excel sheet giving information about users that would be extremely tedious and take a long time to do manually.
        </h3>
        <img className={pages.page_video} src={automateUsernameCheckProcess} alt="automatedUsernameCheckProcess screenshot"/>
        <p className={pages.page_description}>
        </p>
    </>
)

export default AutomatingUsernameCheckProcessComponent
