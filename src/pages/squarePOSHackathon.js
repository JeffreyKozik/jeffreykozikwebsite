import * as React from "react"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const SquarePOSHackathon = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="The Square Build What’s POS-sible Hackathon" />
            <div class="page_container">
                <h1 class="page_title"> The Square Build What’s POS-sible Hackathon </h1>
                <h3 class="page_subtitle">
                    Myself and one other person created the inLine database to help businesses manage waitlists so that
                    customers don't have to physically wait in line, and can instead spend their time more productively until
                    there's room for them at the resturant or business.
                </h3>
                <p class="page_description">
                    MySQL is used to control the database and Python is used for the backend logic. We also began to create
                    a website with Flask as the framework.
                </p>
            </div>
        </body>
    </>
)

export default SquarePOSHackathon
