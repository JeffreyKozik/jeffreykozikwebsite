import * as React from "react"
import socrates from "../../images/welcomebackhacksocrates.png"
import * as pages from "../../page_styling/pages.module.css"

const WelcomeBackHackComponent = () => (
    <>
        <h1 className={pages.page_title}> Lexigraphic Correlatory Stagnation Combatant (LCSC) </h1>
        <h3 className={pages.page_subtitle}>
            Myself along with two core teammates won "Best in Creativity" at the 12-hour WelcomeBackHack Hackthon at
            Case Western Reserve University during the Fall of 2019.
        </h3>
        <img className={pages.page_video} src={socrates} alt="Team has lots of his own canine."/>
        <p className={pages.page_description}>
            We created a website brainteaser game. In the game the user tries to guess what the character
            Socrates is thinking. If they're wrong Socrates gives a clue that somehow relates the incorrect guess
            with the correct answer. For example if Socrates is thinking of "dog" and the user guesses "cat" Socrates'
            next clue may be "Pets are great companions."
        </p>
        <p className={pages.page_description}>
            Our final product wasn't fully functional, however we attempted multiple avenues to try to create
            functionality. Myself and one of my teammates mostly researched using Beautiful Soup to scrape a
            website that gave similar words to the inputted word. Other teammates explored API options.
        </p>
    </>
)

export default WelcomeBackHackComponent
