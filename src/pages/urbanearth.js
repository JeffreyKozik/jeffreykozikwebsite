import * as React from "react"
import urbanEarthDemoVideo from "../images/urbanearthdemospedup.mp4"
import urbanEarthLogin from "../images/urbanearthlogin.png"
import urbanEarthSignUp from "../images/urbanearthsignup.png"
import urbanEarthRecord from "../images/urbanearthrecord.png"
import urbanEarthStats from "../images/urbanearthstats.png"
import urbanEarthSettings from "../images/urbanearthsettings.png"
import urbanEarthLogo from "../images/urbanearthlogo.png"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const UrbanEarth  = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="Urban Earth" />
            <div className="page_container">
                <h1 className="page_title"> Urban Earth </h1>
                <h3 className="page_subtitle">
                    Urban Earth is a project myself and a partner worked on during Fall of 2021. It's an iOS app that helps users
                    track how often they use sustainable forms of transportation and motivates them to keep at it.
                </h3>
                <video controls preload="auto" className="page_video">
                    <source src={urbanEarthDemoVideo} type="video/mp4"></source>
                </video>
                <p className="page_description">
                    Below are the first two pages of the app, the login and sign up pages. My partner did most of the work on these pages and used
                    Storyboard for the frontend, Swift for the in-app logic, and Firebase Authentication for the backend storing of users.
                </p>
                <img className="page_video" src={urbanEarthLogin}></img>
                <img className="page_video" src={urbanEarthSignUp}></img>
                <p className="page_description">
                    The next page below is the "Record" page which I did most of the work on. As this project was for a class at school, we only had a limited time
                    and thus the UI of this page could use some improvement, but the functionality is pretty much all there. A user can select what form of transportation
                    they're using, and the app will keep that as their default by storing it in Firebase's Firestore. They can then press record to begin recording
                    how far they're traveling. Based upon what form of transportation is being used and how far the travel is, a "sustainability score" is calculated. At this point,
                    the sustainability score is just available in terms of kg CO2, however we plan to add other units that are more relatable such as "equivalent trees planted". The
                    kg CO2 saved is calculated by comparing how much CO2 would have been emitted if the person traveled by an average gas car minus how much CO2 was
                    emitted by the form of transportation they actually used.
                </p>
                <img className="page_video" src={urbanEarthRecord}></img>
                <p className="page_description">
                    The "Stats" page which my partner and I contributed to on a roughly equal level, easily shows the user their sustainable transportation
                    trends over time. Once again, all of this information is stored in Firestore and the frontend was created with a library called
                    <a href="https://github.com/danielgindi/Charts" target="_blank" rel="noreferrer"> Charts</a>.
                </p>
                <img className="page_video" src={urbanEarthStats}></img>
                <p className="page_description">
                    The "Settings" page which my partner and I contributed to on a roughly equal level, allows a user to reset their password and also has the front end
                    done for picking out a sustainability unit and for auto trip tracking (which would allow the app to automatically track user
                    travel by always tracking location). However, the functionality of these features hasn't been implemented yet.
                </p>
                <img className="page_video" src={urbanEarthSettings}></img>
                <p className="page_description">
                    Finally, the last page that we were planning on implementing, and which we will implement if we continue this project forwards
                    is the Friends page. Currently this is an empty page, but our plans were for people to be able to be "friends" with their
                    friends and family on the app and see their "friends" sustainability scores as well to motivate them and help form a community.
                </p>
                <p className="page_description">
                    Also shown below is the logo for Urban Earth, which my partner designed, and a slide deck describing the app in more detail.
                </p>
                <img className="page_video" src={urbanEarthLogo}></img>
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQmk0OuoC_DKb1l1LOMnm4xqMSQMcRuHkUDkxdyhd6xSGsKrqf09fmTU5QuTjLbuHpbg_BbHbkXHiAM/embed?start=false&loop=true&delayms=60000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </div>
        </body>
    </>
)

export default UrbanEarth
