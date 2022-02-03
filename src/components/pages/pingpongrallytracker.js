import * as React from "react"
import rally_demo from "../../images/pingpongtracking_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const RallyTrackerComponent = () => (
    <>
        <h1 className={pages.page_title}> Ping Pong Rally Tracker</h1>
        <h3 className={pages.page_subtitle}>
            Python program using OpenCV, numpy, imutils, and pyplot to track how many hits in a row in a
            ping pong rally. Detects movement from frame to frame and looks for contours and template matches for ping pong ball.
            Records hit each time ball passes center of video frame.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={rally_demo} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            You can browse the code at the Github repository located <a href="https://github.com/JeffreyKozik/PingPongRallyTracker">here</a>.
        </p>
    </>
)

export default RallyTrackerComponent
