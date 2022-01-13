import * as React from "react"
import "../page_styling/pages.css"
import Seo from "../components/seo"

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
                <iframe src="https://codesandbox.io/embed/givebackhack-vol-q8n85?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="GiveBackHack Vol" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow scripts"></iframe>
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
