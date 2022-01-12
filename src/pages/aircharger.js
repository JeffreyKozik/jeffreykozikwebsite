import * as React from "react"
import "../page_styling/pages.css"
import Seo from "../components/seo"
import aircharger2 from "../images/aircharger2.HEIC";
import aircharger3 from "../images/aircharger3.HEIC";
import aircharger4 from "../images/aircharger4.mov";
import aircharger5 from "../images/aircharger5.mov";
import aircharger6 from "../images/aircharger6.mov";
import aircharger7 from "../images/aircharger7.HEIC";
import aircharger8 from "../images/aircharger8.HEIC";

const AirCharger = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="AirCharger" />
            <div class="page_container">
                <h1 class="page_title"> AirCharger </h1>
                <h3 class="page_subtitle">
                    Prototype for small, sleek iPhone magsafe battery pack.
                </h3>
                <video controls class="page_video">
                    <source src={aircharger5} type="video/mov"></source>
                </video>
                <div class="page_video">
                    <img src={aircharger8} alt="aircharger8"/>
                </div>
                <div class="page_video">
                    <img src={aircharger7} alt="aircharger7"/>
                </div>
                <video controls class="page_video">
                    <source src={aircharger4} type="video/mov"></source>
                </video>
                <video controls class="page_video">
                    <source src={aircharger6} type="video/mov"></source>
                </video>
                <div class="page_video">
                    <img src={aircharger3} alt="aircharger3"/>
                </div>
                <div class="page_video">
                    <img src={aircharger2} alt="aircharger2"/>
                </div>
                <p class="page_description">

                </p>
                <p class="page_description">
                    Our final product wasn't fully functional, however we attempted multiple avenues to try to create
                    functionality. Myself and one of my teammates mostly researched using Beautiful Soup to scrape a
                    website that gave similar words to the inputted word. Other teammates explored API options.
                </p>
            </div>
        </body>
    </>
)

export default AirCharger
