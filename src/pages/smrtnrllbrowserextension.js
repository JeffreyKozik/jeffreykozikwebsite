import * as React from "react"
import demoVideo from "../images/smrtnrlldemo.mp4";
import "../page_styling/pages.css"
import Seo from "../components/seo"

const SmrtnrllBrowserExtension = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="smrtnrll browser extension" />
            <div class="page_container">
                <h1 class="page_title"> smrtnrll browser extension </h1>
                <h3 class="page_subtitle">
                    The One World Browser Extension is used in conjunction with a Square Business account to easily offset a
                    business's inventory carbon emissions. To see it in action feel free to enter data into the table below.
                </h3>
                <video controls id="page_video">
                    <source src={demoVideo} type="video/mp4"></source>
                </video>
                <p class="page_description">
                    The consumption categories and supply chain categories as well as the amount of CO2 emitted per dollar spent
                    in each of those categories comes from <a href="https://www.gov.uk/government/statistics/uks-carbon-footprint">publicly available data from the UK government</a>.
                </p>
                <p class="page_description">
                    Products are automatically categorized by using an Azure Function which utilizes the Bing API to search the name of the product
                    and compare the words in the results with the words in the results of Bing searches for each of the categories via nltk and sklearn's TFIDF vectorization.
                    Then the user is able to easily offset their carbon emissions using Patch. I've also tried approaches using Google Cloud's Google Cloud Function, Google Cloud Run (with Docker) and VADER.
                </p>
                <p class="page_description">
                    Note: in the video, there's a calculation error that has been corrected now. In the video I say 1t = 100kg but in fact 1t = 1000kg.
                    So really 0.01t should be offset in the video, not 0.13t. So offsetting $100 worth of apples (12.77 kg CO2) through the project chosen
                    on Patch would cost $0.13 not $1.27.
                </p>
            </div>
        </body>
    </>
)

export default SmrtnrllBrowserExtension
