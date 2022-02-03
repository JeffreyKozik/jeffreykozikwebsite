import * as React from "react"
import basketball from "../../images/basketball.png"
import * as pages from "../../page_styling/pages.module.css"

const BasketballComponent = () => (
    <>
        <h1 className={pages.page_title}> Basketball Game Simulator </h1>
        <h3 className={pages.page_subtitle}>
            Khan Academy JavaScript project I created in 2016 to simulate basktball games
            using data from <a href="https://www.basketball-reference.com/" target="_blank" rel="noreferrer"> basketball-reference.com </a>.
        </h3>
        <a href="https://www.khanacademy.org/computer-programming/basketball-game/6687774851858432" target="_blank" rel="noreferrer">
            <img className={pages.page_video} src={basketball} alt="basketball screenshot"/>
        </a>
        <p className={pages.page_description}>
            Click on link <a href="https://www.khanacademy.org/computer-programming/basketball-game/6687774851858432" target="_blank" rel="noreferrer">here</a>
            to go to the simulation page. To run a simluation click on the right hand side of the embed which shows a mock
            basketball court and some circles representing players. Then press "a" on your keyboard to see the action unfold.
            If you want to run the simulation quickly simply hold down "a" on your keyboard. If you want to
            change the teams playing, simply edit the name shown on line 167 and 168 of the code to one of the other
            team names from the previous lines.
        </p>
        <p className={pages.page_description}>
            This was one of the first projects I made when I learned how to code. It's written
            entirely in JavaScript. It also includes the NBA team with the longest streak without losing
            (Seattle Supersonics).
        </p>
    </>
)

export default BasketballComponent
