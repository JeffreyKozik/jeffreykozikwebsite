import * as React from "react"
import "../page_styling/pages.css"
import Seo from "../components/seo"
import aircharger2 from "../images/aircharger2.png";
import aircharger3 from "../images/aircharger3.png";
import aircharger4 from "../images/aircharger4.mov";
import aircharger5 from "../images/aircharger5.mov";
import aircharger6 from "../images/aircharger6.mov";
import aircharger7 from "../images/aircharger7.png";
import aircharger8 from "../images/aircharger8.png";

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
                <p class="page_description">
                    My friend from high school reached out to me with this idea in February of 2021 and I began making
                    serious progress on the prototype at the beginning of May. The idea was that iPhone 12s (at the time
                    the newest iPhone) had subpar battery life and so a battery pack for these phones would be in high demand.
                    However, although a few magsafe battery packs already existed on the market, most were clunky and big almost
                    doubling or tripling the thickness of the phone. So the AirCharger would be a thinner, sleeker alternative.
                </p>
                <div class="page_video">
                    <img src={aircharger8} alt="aircharger8"/>
                </div>
                <p class="page_description">
                    This was the first prototype. It was based on this <a href="https://www.instructables.com/DIY-Wireless-Charging-Power-Bank/"> instructables tutorial </a>.
                    
                </p>
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
            </div>
        </body>
    </>
)

export default AirCharger
