import * as React from "react"
import trickortag_edited from "../../images/trickortag_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const TrickOrTagComponent = () => (
    <>
        <h1 className={pages.page_title}> Trick or Tag </h1>
        <h3 className={pages.page_subtitle}>
            Python program I wrote with 2 friends based off one of my friends base code
            that we modified to be a Halloween chase game using Python and pygame.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={trickortag_edited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            There are 2 players that alternate between who is the chaser and who is being chased.
            If the person being chased gets caught in 10 seconds they lose a life. Both players
            start with 3 lives and whoever dies first loses. There are also pumpkins that if you
            run into give you a temporary speed boost.
        </p>
        <p className={pages.page_description}>
            You can browse the code at the Github repository located <a href="https://github.com/JeffreyKozik/TrickOrTag">here</a>.
        </p>
    </>
)

export default TrickOrTagComponent
