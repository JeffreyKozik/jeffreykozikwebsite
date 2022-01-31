import * as React from "react"
import totalcostdemo from "../../images/totalcostimovied.mp4"
import * as pages from "../../page_styling/pages.module.css"

const TotalCostBrowserExtensionComponent = () => (
    <>
        <h1 className={pages.page_title}> Total Cost Browser Extension </h1>
        <h3 className={pages.page_subtitle}>
            Custom browser extension I coded so that payment information across 12 tabs could be displayed in a single location.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={totalcostdemo} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            In the video the "Options" page of the browser extension is shown which is essentially a dashboard displaying payment
            information across multiple different tabs. In the video 5 tabs are used, but in practice 12 are used. The payment values
            are redacted in the video, but you can still see the three columns: Initial Payments, Recurring Payments, Total Payments.
            Originally, I had the browser extension visiting each tab individually and scraping it, but then I changed it so that it simply
            sends custom HTTP requests to retrieve the information from each tab. This increased the speed 5x. The payment info can be updated
            by either refreshing the "Options" page or pressing the "REFRESH ALL" button. If the user wishes to only refresh information for one
            tab they can press the "REFRESH" button in that row.
        </p>
        <p className={pages.page_description}>
            UPDATE: I created a new feature where you can enter in the names of your subdomains in a text box (which saves your preferences
            automatically) instead of having to have the tabs open.
        </p>
    </>
)

export default TotalCostBrowserExtensionComponent
