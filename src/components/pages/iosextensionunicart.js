import * as React from "react"
import unicartscreenshot from "../../images/unicartscreenshot.png"
import * as pages from "../../page_styling/pages.module.css"

const IosExtensionUnicartComponent = () => (
    <>
        <h1 className={pages.page_title}> Unicart iOS Extension </h1>
        <h3 className={pages.page_subtitle}>
            I turned my client's already existing Chrome extension into an iOS extension on the Apple App Store.
        </h3>
        <img className={pages.page_video} src={unicartscreenshot} alt="unicart screenshot"/>
        <p className={pages.page_description}>
            Just to be clear I didn't do any coding on this project. I ran the code through a converter and went through the
            process of putting this app first on TestFlight and then on the App Store. This app is still under development
            so I will keep other details about it private.
        </p>
    </>
)

export default IosExtensionUnicartComponent
