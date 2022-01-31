import { Link } from "gatsby"
import * as React from "react"
import automatedtacticalbattles_edited from "../../images/automatedtacticalbattles_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const AutomatedTacticalBattlesComponent = () => (
    <>
        <h1 className={pages.page_title}> AI Project: Automated Tactical Battles </h1>
        <h3 className={pages.page_subtitle}>
            Java program I wrote with two teammates that trained our AI bots on a Q-learning reinforcement learning algorithm
            to fight against enemy bots. Uses <a href="http://engr.case.edu/ray_soumya/sepia/html/" target="_blank" rel="noreferrer">SEPIA</a>, a game framework
            created by Computer Science students at CWRU for the Java GUI frontend.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={automatedtacticalbattles_edited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            Our agents are the red ones who unfortunately lose, though they put up a fight. Our Q-learning algorithm
            worked but our heuristics weren't good enough.
        </p>
        <p className={pages.page_description}>
            See other projects also using SEPIA at the following links: "Enhanced Automated Resource Collection AI Project"
            (AI bot can build other bots) at this <Link to="/projects/enhancedautomatedresourcecollection">link</Link>,
            the "unenhanced" version (AI bot can't build other bots) at this <Link to="/projects/enhancedautomatedresourcecollection">link</Link>, and
            the "Pathfinding AI Project" at this <Link to="/projects/pathfindingaiproject">link</Link>.
        </p>
        <p className={pages.page_description}>
            The Github repository for this project can be found at this <a href="https://github.com/JeffreyKozik/AIProjects" target="_blank" rel="noreferrer">link</a> in the
            P6agents subdirectory. Note that it says only a few commits in the Github but that's just because for the project
            my group used a version control system that the University built that I wasn't able to import into Github, so I just uploaded the code
            to a new Github repo on my account.
        </p>
        <p className={pages.page_description}>
            Note: this program is written based off a template my professor created. However, myself and my two
            teammates created the "AI" logic for the Q-learning reinforcement learning algorithm.
        </p>
    </>
)

export default AutomatedTacticalBattlesComponent
