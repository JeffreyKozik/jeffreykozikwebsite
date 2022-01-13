import * as React from "react"
import "../page_styling/pages.css"
import Seo from "../components/seo"
// import sqlDemo from "../images/inline database demo 2.mp4";
import flaskDemo from "../images/inline flask demo.mp4"

const InLine = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="inLine" />
            <div className="page_container">
                <h1 className="page_title"> inLine </h1>
                <h3 className="page_subtitle">
                    Myself and one other person created the inLine database to help businesses manage waitlists so that
                    customers don't have to physically wait in line, and can instead spend their time more productively until
                    there's room for them at the resturant or business.
                </h3>
                <video controls preload="auto" className="page_video">
                    <source src={flaskDemo} type="video/mp4"></source>
                </video>
                <p className="page_description">
                    MySQL is used to control the database and Python is used for the backend logic. We also began to create
                    a website with Flask as the framework.
                </p>
                <video controls preload="auto" className="page_video">
                    <source src={flaskDemo} type="video/mp4"></source>
                </video>
            </div>
        </body>
    </>
)

export default InLine
