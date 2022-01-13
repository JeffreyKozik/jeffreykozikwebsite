import * as React from "react"
import "../page_styling/pages.css"
import Seo from "../components/seo"

import volhtml from "../images/volhtml.png";
import friendshtml from "../images/friendshtml.png"

// allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
// sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow scripts"

const GiveBackHackVol = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="GiveBackHack Vol" />
            <div className="page_container">
                <h1 className="page_title"> GiveBackHack Vol </h1>
                <h3 className="page_subtitle">
                    Myself along with a team of developers and businesspeople jointly created a business model and a prototype for a
                    volunteering website.
                </h3>
                <iframe className="page_video"
                        src="https://codesandbox.io/embed/givebackhack-vol-q8n85?fontsize=14&module=%2Fvol.html"
                        style={{width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden'}}
                        title="GiveBackHack Vol"
                ></iframe>
                <p className="page_description">
                    Navigate to <a href="https://q8n85.csb.app/vol.html" target="_blank" rel="noreferrer"> https://q8n85.csb.app/vol.html </a> and
                    <a href="https://q8n85.csb.app/friends.html" target="_blank" rel="noreferrer"> https://q8n85.csb.app/friends.html </a> to see the
                    pages that I created. The website is quite buggy because it was a very preliminary prototype and it hasn&apos;t been updated since 2019.
                    There&apos;s no need to sign up or login (the database supporting this feature has been deactivated) simply click on the links I@apos;ve provided to see the front end design.
                </p>
                <img className="page_video" src={volhtml} alt="aircharger2"/>
                <img className="page_video" src={friendshtml} alt="aircharger2"/>
                <p className="page_description">
                    Vol was intended to be a website that would help users easily find volunteering opportunities in their communities.
                    In my experience it&apos;s always been hard to find a centralized place that lists volunteering opportunities. Typically for me
                    my volunteering has come as a result of word of mouth or being in the right place at the right time.
                </p>
                <p className="page_description">
                    Myself and one or two other team members coded the front end of the website using Boostrap (this was my first
                    time using Boostrap) and two other team members worked on getting the login flow to work thorugh Firebase Authentication.
                </p>
            </div>
        </body>
    </>
)

export default GiveBackHackVol
