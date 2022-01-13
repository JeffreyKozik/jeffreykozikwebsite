import * as React from "react"
import "../page_styling/pages.css"
import Seo from "../components/seo"
import aircharger2 from "../images/aircharger2.png";
import aircharger3 from "../images/aircharger3.png";
import aircharger4 from "../images/aircharger4.mp4";
import aircharger5 from "../images/aircharger5.mp4";
import aircharger6 from "../images/aircharger6.mp4";
import aircharger7 from "../images/aircharger7.png";
import aircharger8 from "../images/aircharger8.png";

const AirCharger = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="AirCharger" />
            <div className="page_container">
                <h1 className="page_title"> AirCharger </h1>
                <h3 className="page_subtitle">
                    Prototype for small, sleek iPhone magsafe battery pack.
                </h3>
                <video controls preload="auto" className="page_video">
                    <source src={aircharger5} type="video/mp4"></source>
                </video>
                <p className="page_description">
                    My friend from high school reached out to me with this idea in February of 2021 and I began making
                    serious progress on the prototype at the beginning of May. The idea was that iPhone 12s (at the time
                    the newest iPhone) had subpar battery life and so a battery pack for these phones would be in high demand.
                    However, although a few magsafe battery packs already existed on the market, most were clunky and big almost
                    doubling or tripling the thickness of the phone. So the AirCharger would be a thinner, sleeker alternative.
                </p>
                <img className="page_video" src={aircharger8} alt="aircharger8"/>
                <p className="page_description">
                    This was the first prototype. It was based on this <a href="https://www.instructables.com/DIY-Wireless-Charging-Power-Bank/" target="_blank" rel="noreferrer">instructables tutorial</a>.
                    Except instead of using three 3.7V Li-ion Batteries (18650) which provided a lot of storage (6600 mAH or about 3x battery size of iPhone 12),
                    I used four much smaller, and as a result much lower capacity, LIR 2032H (high capacity coin cell) batteries which provided 280 mAH or about 10% of the battery life of an iPhone 12.
                </p>
                <img className="page_video" src={aircharger7} alt="aircharger7"/>
                <video controls preload="auto" className="page_video">
                    <source src={aircharger6} type="video/mp4"></source>
                </video>
                <p className="page_description">
                    Since I was using a much lower battery capacity, I had to modify the battery charger by removing the R4 resistor which was 1.2K ohms and replacing it with a
                    33K ohm resistor (I followed <a href="https://www.instructables.com/Cheap-LIR2032-Coin-Cell-Charger/" target="_blank" rel="noreferrer">this instructable</a>).
                </p>
                <video controls preload="auto" className="page_video">
                    <source src={aircharger4} type="video/mp4"></source>
                </video>
                <p className="page_description">
                    Since I only had an iPhone 11 to work with I attached a metal ring to the back of the phone (iPhone 12's have this built in) and
                    I attached a magnet to my prototype encasing (a plastic pouch) for the battery.
                </p>
                <img className="page_video" src={aircharger3} alt="aircharger3"/>
                <p className="page_description">
                    As shown at the very top of the page, my first prototype indicated that the phone was charging, so on that front it was a success!
                    However, after about 10 minutes of charging, the battery of my phone had actually decreased a percentage (even though I wasn't using it).
                    I figured out that this was due to the fact that my mAH calculation was off. I thought that since my batteries had a combined mAH of 280,
                    and my phone had a mAH of roughly 10x that, it meant the battery would add 10% charge to my phone. I failed to take into consideration that
                    my batteries were 3.7 V and went through a boost converter from 3.7V to 5V which meant that the mAH at 5V was only 207 (3.7*280/5=207).
                    On top of that, the boost converter is at a maximum only 90% efficient which decreases the storage capacity further. I was also losing efficiency
                    due to thick wires (high resistance) and probably other inefficiencies in my amateur design. So, my second prototype used a bigger battery (1100 mAH lithium polymer pouch battery) and
                    thinner (lower resistance) wires. Unfortunately, although this worked, the battery got extremely hot, so I had to take apart this prototype.
                </p>
                <img className="page_video" src={aircharger2} alt="aircharger2"/>
                <p className="page_description">
                    I also 3D printed a case for the battery. The idea was for the battery to be about the size of the wired magsafe charging puck Apple sells. However,
                    there were difficulties in printing the filament so thin. I was able to work around those difficulties and make a prototype case that magnetically
                    attached to the back of my iPhone!
                </p>
                <p className="page_description">
                    I also explored for a while designing a circuit for this battery pack so that it could be soldered in a factory on pcb instead of myself having
                    to solder it without any pcb. However, it was difficult to fully design this circuit using the software I was using because I couldn't add components
                    such as a qi wireless charger in, and I would have had to still solder the battery on my own. In the end, this was a cool idea I spent quite a bit of time on and I
                    learned a ton about hardware, circuits, and the manufacturing process. It was also difficult to get this in a price point that people would actually buy the
                    product at, especially since I wasn't ordering the parts in bulk. I had some other ideas such as mini solar panels on the back of the battery
                    and an LED screen that could attach to an app to display custom designs, but these were ultimately too expensive, bulky, and power consuming.
                    I would love to continue this project in the future or one similar when I find the time.
                </p>
            </div>
        </body>
    </>
)

export default AirCharger
