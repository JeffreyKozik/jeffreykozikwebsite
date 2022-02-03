import * as React from "react"
import tasktimerecorderfirstpage from "../../images/tasktimerecorderfirstpage.png"
import * as pages from "../../page_styling/pages.module.css"

const TaskTimeRecorderComponent = () => (
    <>
        <h1 className={pages.page_title}> Task Time Recorder </h1>
        <h3 className={pages.page_subtitle}>
            Google Sheet I created to track how I spent my time and how efficient I was at accomplishing tasks.
            Had multiple Google Apps Script Functions to automate the entire process.
        </h3>
        <a href="https://docs.google.com/presentation/d/e/2PACX-1vQDjjuQv_f2egci7C21o1arbqqVi9JSafVPeWviiTKqeZpECaWCAlDwk0V8lHOG2I0W9OHb6f5MuALJ/pub?start=false&loop=false&delayms=60000" target="_blank" rel="noreferrer"><img className={pages.page_video} src={tasktimerecorderfirstpage} alt="task time recorder homepage screenshot"/></a>
        <p className={pages.page_description}>
            View the entire slideshow <a href="https://docs.google.com/presentation/d/e/2PACX-1vQDjjuQv_f2egci7C21o1arbqqVi9JSafVPeWviiTKqeZpECaWCAlDwk0V8lHOG2I0W9OHb6f5MuALJ/pub?start=false&loop=false&delayms=60000" target="_blank" rel="noreferrer">here</a>
            and the Github repository with the Google Apps Script Macros <a href="https://github.com/JeffreyKozik/TaskTimeRecorder" target="_blank" rel="noreferrer">here</a>.
        </p>
        <p className={pages.page_description}>
            I plan to create an app and website to track time and efficiency and automatically plan out days and timelines sometime in the future but currently I use
            <a href="https://track.toggl.com" target="_blank" rel="noreferrer">toggl</a> which tracks time really great, but doesn't have
            the other features I want such as tracking efficiency and automatically planning out days and goals.
        </p>
    </>
)

export default TaskTimeRecorderComponent
