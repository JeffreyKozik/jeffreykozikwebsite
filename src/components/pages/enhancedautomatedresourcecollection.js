import { Link } from "gatsby"
import * as React from "react"
import enhancedautomatedresourcecollection_edited from "../../images/enhancedautomatedresourcecollection_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const EnhancedAutomatedResourceCollectionAgentComponent = () => (
    <>
        <h1 className={pages.page_title}> AI Project: Enhanced Automated Resource Collection </h1>
        <h3 className={pages.page_subtitle}>
            Java program I wrote with two teammates that determined optimal route for AI bot (which can
            create new AI bots) to take to harvest 2000 wood and 3000 gold from "forests" and "gold mines" with limited resources
            with a forward state space planner using A* Search and STRIPS-like language. Uses
            <a href="http://engr.case.edu/ray_soumya/sepia/html/" target="_blank" rel="noreferrer">SEPIA</a>, a game framework
            created by Computer Science students at CWRU for the Java GUI frontend.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={enhancedautomatedresourcecollection_edited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            See the "unenhanced" version (ai bot can't build other ai bots) at this <Link to="/projects/automatedresourcecollection">link</Link>.
            See more projects using SEPIa at the following links: the "Automated Tactial Battles AI Project" at this
            <Link to="/projects/automatedtacticalbattles">link</Link> and the "Pathfinding AI Project" at this <Link to="/projects/pathfindingaiproject">link</Link>.
        </p>
        <p className={pages.page_description}>
            The Github repository for this project can be found at this <a href="https://github.com/JeffreyKozik/AIProjects" target="_blank" rel="noreferrer">link</a> in the
            P5agents subdirectory. Note that it says only a few commits in the Github but that's just because for the project
            my group used a version control system that the University built that I wasn't able to import into Github, so I just uploaded the code
            to a new Github repo on my account.
        </p>
        <p className={pages.page_description}>
            Note: this program is written based off a template my professor created. However, myself and my two
            teammates created the "AI" logic for the forward state space planner in this program.
        </p>
    </>
)

export default EnhancedAutomatedResourceCollectionAgentComponent
