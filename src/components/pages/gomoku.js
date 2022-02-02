import * as React from "react"
import gomoku_edited from "../../images/gomoku_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const GomokuComponent = () => (
    <>
        <h1 className={pages.page_title}> Gomoku </h1>
        <h3 className={pages.page_subtitle}>
            Java program I wrote for either 2 people to play Gomoku or for 1 person to play
            Gomoku against the AI I wrote (which has beaten me many times).
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={gomoku_edited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            You can browse the code at the Github repository located <a href="https://github.com/JeffreyKozik/Gomoku">here</a>.
        </p>
        <p className={pages.page_description}>
            Gomoku is a game where 5 in a row wins and there are a couple more rules that control
            what you're allowed to do. For example you can't make a move that would simultaneoulsy create
            2 four in a rows and you can't make a move that would simultaneously create 2 three in a rows
            that are open on both ends. The way I programmed it you can also customize the dimensions of the board
            and how many in a row are needed to win in your custom game.
        </p>
        <p className={pages.page_description}>
            The AI considers every single possible move on the board and looks at how many
            2 in a rows, 3 in a rows, and 4 in a rows the move would form for the AI and how many
            1 in a rows, 2 in a row, 3 in a rows, and 4 in a rows the move would block for the opponent.
            Based upon the weights assigned to each of these, the AI gives a score to each move and makes the
            one with the highest score. I've adjusted the weights quite a bit over time for the AI and I find
            making it more defensive works best as oftentimes humans overlook when the AI can win.
        </p>
    </>
)

export default GomokuComponent
