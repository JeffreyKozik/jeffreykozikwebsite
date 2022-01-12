import * as React from "react"
import "../page_styling/pages.css"
import Seo from "../components/seo"
import socrates from "../images/smrtnrllbrowserextensionpic.png"

const WelcomeBackHack = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="Lexigraphic Correlatory Stagnation Combatant (LCSC)" />
            <div class="page_container">
                <h1 class="page_title"> Lexigraphic Correlatory Stagnation Combatant (LCSC) </h1>
                <h3 class="page_subtitle">
                    Myself along with two core teammates won "Best in Creativity" at the 12-hour WelcomeBackHack Hackthon at
                    Case Western Reserve University during the Fall of 2019.
                </h3>
                <div class="page_video">
                    <img src={socrates} alt="Team has lots of his own canine."/>
                </div>
                <p class="page_description">
                    We created a website brainteaser game. In the game the user tries to guess what the character
                    Socrates is thinking. If they're wrong Socrates gives a clue that somehow relates the incorrect guess
                    with the correct answer. For example if Socrates is thinking of "dog" and the user guesses "cat" Socrates'
                    next clue may be "Pets are great companions."
                </p>
                <p class="page_description">
                    Our final product wasn't fully functional, however we attempted multiple avenues to try to create
                    functionality. Myself and one of my teammates mostly researched using Beautiful Soup to scrape a
                    website that gave similar words to the inputted word. Other teammates explored API options.
                </p>
            </div>
        </body>
    </>
)

export default WelcomeBackHack
