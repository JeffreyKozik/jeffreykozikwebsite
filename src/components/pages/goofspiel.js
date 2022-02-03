import * as React from "react"
import goofspiel from "../../images/goofspiel.png"
import * as pages from "../../page_styling/pages.module.css"

const GoofspielComponent = () => (
    <>
        <h1 className={pages.page_title}> Goofspiel </h1>
        <h3 className={pages.page_subtitle}>
            Coded JS game to play against computer
        </h3>
        <a href="https://www.khanacademy.org/computer-programming/goofspiel/5055435377475584" target="_blank" rel="noreferrer">
            <img className={pages.page_video} src={goofspiel} alt="goofspiel screenshot"/>
        </a><p className={pages.page_description}>
            View the Github repo <a href="https://github.com/JeffreyKozik/Goofspiel">here</a>.
        </p>
        <p className={pages.page_description}>
            Click on link <a href="https://www.khanacademy.org/computer-programming/goofspiel/5055435377475584" target="_blank" rel="noreferrer">here</a>
            to go to the game page. To play, click a value from the bar on the top 1-13 (you can only use each value once). A good strategy
            is to play higher value cards for higher value prizes and lower value cards for lower value prizes. Then press flip to see the computer's
            card. Whoever's was higher adds the prize card to the score. Play continues until all 13 cards are used.
        </p>
        <p className={pages.page_description}>
            The way the game works is each player has 13 cards one with value 1, one with value 2,
            ..., all the way up until 1 with value 3. A prize card is randomly put in front of the
            two players and each player puts one of their cards facedown. Then they flip the card
            and whoever played the higher card wins the prize card. Whoever ends up with the most
            points (where the value of a prize card corresponds to points) wins the game.
        </p>
    </>
)

export default GoofspielComponent
