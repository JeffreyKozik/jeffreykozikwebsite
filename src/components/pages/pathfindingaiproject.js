import * as React from "react"
import jeffreykozikScreenshot from "../../images/jeffreykozikwebsitescreenshot.png"
import * as pages from "../../page_styling/pages.module.css"

const JeffreyKozikWebsiteComponent = () => (
    <>
        <h1 className={pages.page_title}> Jeffrey Kozik Website </h1>
        <h3 className={pages.page_subtitle}>
            Portfolio website I coded with React and Gatsby and a number of react packages including
            material-ui, react-select, font-awesome, lodash, simple analytics, and matomo analytics.
        </h3>
        <img className={pages.page_video} src={jeffreykozikScreenshot} alt="jeffreykozik.com screenshot"/>
        <p className={pages.page_description}>
            I first created this website using a VanillaJS framework with CSS and HTML. However, I decided to switch
            to React because it's faster, has better SEO, has a big community with lots of packages, and the code is easier to maintain
            using components with jsx. At first I used create-react-app, but then I wanted to make it multiple pages, and while there
            exists a way to do it with create-react-app and react-router, it isn't as optimal as doing it with Gatsby. I switched to Gatsby
            specifically because this is a largely static site and the DOM isn't changed frequently by the user.
        </p>
    </>
)

export default JeffreyKozikWebsiteComponent
