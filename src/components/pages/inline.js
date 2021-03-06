import * as React from "react"
import * as pages from "../../page_styling/pages.module.css"
import sqlDemo from "../../images/inline_muted.mp4";
import flaskDemo from "../../images/inline_flask_demo_edited.mp4"

const InLineComponent = () => (
    <>
        <h1 className={pages.page_title}> inLine </h1>
        <h3 className={pages.page_subtitle}>
            Myself and one other person created the inLine database to help businesses manage waitlists so that
            customers don't have to physically wait in line, and can instead spend their time more productively until
            there's room for them at the resturant or business.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={sqlDemo} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            MySQL is used to control the database and Python is used for the backend logic. We also began to create
            a website with Flask as the framework.
        </p>
        <video controls preload="auto" className={pages.page_video}>
            <source src={flaskDemo} type="video/mp4"></source>
        </video>
    </>
)

export default InLineComponent
