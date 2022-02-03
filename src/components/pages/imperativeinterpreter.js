import * as React from "react"
import imperative_interpreter_edited from "../../images/imperative_interpreter_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const ImperativeInterpreterComponent = () => (
    <>
        <h1 className={pages.page_title}> Imperative Interpreter </h1>
        <h3 className={pages.page_subtitle}>
            Coded a C-like programming language with two teammates in Racket that could handle
            variables, arithmetic, if statements, while loops, continue, break, throws, try catch,
            and most importantly functions.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={imperative_interpreter_edited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            The Github repository for this project can be found at this <a href="https://github.com/JeffreyKozik/ImperativeInterpreter" target="_blank" rel="noreferrer">link</a>.
            Note that it says only a few commits in the Github but that's just because for the project
            we used a different repo that has other projects in it and that I don't have access to, so I put
            this project in a separate repo.
        </p>
        <p className={pages.page_description}>
            Note: this program was a continuation of an assignment a couple weeks earlier and in this
            assignment we implemented functions. In the assignment a couple weeks earlier we implemented most
            of the other features like variables and if statements, but instead of using our work from a couple
            weeks earlier we used a template from our professor because it was written better and gave us a better
            foundation to implement functions in this interpreter.
        </p>
    </>
)

export default ImperativeInterpreterComponent
