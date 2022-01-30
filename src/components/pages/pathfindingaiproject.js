import * as React from "react"
import aiprojectpathfinding from "../../images/aiprojectpathfinding.mp4"
import * as pages from "../../page_styling/pages.module.css"

const PathfindingAIProjectComponent = () => (
    <>
        <h1 className={pages.page_title}> AI Project: Pathfinding </h1>
        <h3 className={pages.page_subtitle}>
            Java program I wrote with two teammates that navigated an AI bot through a maze
            using A* search both with an "enemy agent" blocking the path and without. Uses
            <a href="http://engr.case.edu/ray_soumya/sepia/html/">SEPIA</a>, a game framework
            created by Computer Science students at CWRU for the Java GUI frontend.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={aiprojectpathfinding} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            The Github repository for this project can be found at this <a href="https://github.com/JeffreyKozik/AIProjects">link</a> in the
            P2agents subdirectory. Note that it says only a few commits in the Github but that's just because for the project 
            my group used a version control system that the University built that I wasn't able to import into Github, so I just uploaded the code
            to a new Github repo on my account.
        </p>
        <p className={pages.page_description}>
            Note: this program is written based off a template my professor created. However, myself and my two
            teammates created the "AI" logic for A* search in this program.
        </p>
    </>
)

export default PathfindingAIProjectComponent
