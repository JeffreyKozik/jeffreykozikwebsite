import * as React from "react"
import "../page_styling/pages.css"
import Seo from "../components/seo"
import socrates from "../images/welcomebackhacksocrates.png"

const GiveBackHackVol = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="GiveBackHack Vol" />
            <div class="page_container">
                <h1 class="page_title"> GiveBackHack Vol </h1>
                <h3 class="page_subtitle">
                    Myself along with a team of developers and businesspeople jointly created a business model and a prototype for a
                    volunteering website.
                </h3>
                <img class="page_video" src={socrates} alt="Team has lots of his own canine."/>
                <p class="page_description">
                    Vol was intended to be a website that would help users easily find volunteering opportunities in their communities.
                    In my experience it's always been hard to find a centralized place that lists volunteering opportunities. Typically for me
                    my volunteering has come as a result of word of mouth or being in the right place at the right time.
                </p>
                <p class="page_description">
                    Myself and one or two other team members coded the front end of the website using Boostrap (this was my first
                    time using Boostrap) and two other team members worked on getting the login flow to work thorugh Firebase Authentication.
                </p>
            </div>
        </body>
    </>
)

export default GiveBackHackVol
