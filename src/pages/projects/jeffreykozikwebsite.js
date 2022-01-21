import * as React from "react"
import jeffreykozikScreenshot from "../../images/jeffreykozikwebsitescreenshot.png"
import "../../page_styling/pages.module.css"
import Seo from "../../components/seo"
import {Helmet} from "react-helmet";

const JeffreyKozikWebsite = () => (
    <>
        <Helmet>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Helmet>
        <body>
            <Seo title="Jeffrey Kozik Website" />
            <div className="page_container">
                <h1 className="page_title"> Jeffrey Kozik Website </h1>
                <h3 className="page_subtitle">
                    Portfolio website I created with React and Gatsby and a number of react packages including
                    material-ui, react-select, and react-helmet.
                </h3>
                <img className="page_video" src={jeffreykozikScreenshot} alt="jeffreykozik.com screenshot"/>
                <p className="page_description">
                    I first created this website using a VanillaJS framework with CSS and HTML. However, I decided to switch
                    to React because it's faster, has better SEO, has a big community with lots of packages, and the code is easier to maintain
                    using components with jsx. At first I used create-react-app, but then I wanted to make it multiple pages, and while there
                    exists a way to do it with create-react-app and react-router, it isn't as optimal as doing it with Gatsby. I switched to Gatsby
                    specifically because this is a largely static site and the DOM isn't changed frequently by the user.
                </p>
            </div>
        </body>
    </>
)

export default JeffreyKozikWebsite
