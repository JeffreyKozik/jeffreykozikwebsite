import * as React from "react"
import totalcostdemo from "../images/totalcostimovied.mp4"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const TotalCostBrowserExtension = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="Total Cost Browser Extension" />
            <div className="page_container">
                <h1 className="page_title"> Search Multiple Tabs Browser Extension </h1>
                <h3 className="page_subtitle">
                    Custom browser extension I coded so that payment information across 12 tabs could be displayed in a single location.
                </h3>
                <video controls preload="auto" className="page_video">
                    <source src={totalcostdemo} type="video/mp4"></source>
                </video>
                <p className="page_description">
                    In the video the "Options" page of the browser extension is shown which is essentially a dashboard displaying payment
                    information across multiple different tabs. In the video 5 tabs are used, but in practice 12 are used. The payment values
                    are redacted in the video, but you can still see the three columns: Initial Payments, Recurring Payments, Total Payments.
                    Originally, I had the browser extension visiting each tab individually and scraping it, but then I changed it so that it simply
                    sends custom HTTP requests to retrieve the information from each tab. This increased the speed 5x. The payment info can be updated
                    by either refreshing the "Options" page or pressing the "REFRESH ALL" button. If the user wishes to only refresh information for one
                    tab they can press the "REFRESH" button in that row.
                </p>
            </div>
        </body>
    </>
)

export default TotalCostBrowserExtension