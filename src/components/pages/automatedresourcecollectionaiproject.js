import { Link } from "gatsby"
import * as React from "react"
import automatedresourcecollection_edited from "../../images/automatedresourcecollection_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const AutomatedResourceCollectionComponent = () => (
    <>
        <h1 className={pages.page_title}> AI Project: Automated Resource Collection </h1>
        <h3 className={pages.page_subtitle}>
            Java program I wrote with two teammates that determined optimal route for AI bot to
            take to harvest 1000 wood and 1000 gold from "forests" and "gold mines" with limited resources
            with a forward state space planner using A* Search and STRIPS-like language. Uses
            <a href="http://engr.case.edu/ray_soumya/sepia/html/" target="_blank" rel="noreferrer"> SEPIA</a>, a game framework
            created by Computer Science students at CWRU for the Java GUI frontend.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={automatedresourcecollection_edited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            See the "enhance" version (ai bot can build other ai bots) at this <Link to="/projects/enhancedautomatedresourcecollection">link</Link>.
            See more projects using SEPIA at the following links: the "Automated Tactial Battles AI Project" at this
            <Link to="/projects/automatedtacticalbattles"> link</Link> and the "Pathfinding AI Project" at this <Link to="/projects/pathfindingaiproject">link</Link>.
        </p>
        <p className={pages.page_description}>
            The Github repository for this project can be found at this <a href="https://github.com/JeffreyKozik/AIProjects" target="_blank" rel="noreferrer">link</a> in the
            P4agents subdirectory. Note that it says only a few commits in the Github but that's just because for the project
            my group used a version control system that the University built that I wasn't able to import into Github, so I just uploaded the code
            to a new Github repo on my account.
        </p>
        <p className={pages.page_description}>
            Note: this program is written based off a template my professor created. However, myself and my two
            teammates created the "AI" logic for the forward state space planner in this program.
        </p>
    </>
)

export default AutomatedResourceCollectionComponent
