import * as React from "react"
import Gist from "react-gist"
import gemini2FA from "../../images/gemini2FA.mov"
import * as pages from "../../page_styling/pages.module.css"

const Circumvent2FASeleniumComponent = () => (
    <>
        <h1 className={pages.page_title}> Circumvent 2FA with Selenium </h1>
        <h3 className={pages.page_subtitle}>
            Selenium script I wrote with Python utilizing pickle and cookies to allow automation of
            websites with 2FA.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={gemini2FA}></source>
        </video>
        <p className={pages.page_description}>
            Let's say there's some task you want to automate on a website and you need the script to
            log in every day to do it. The problem is, whenever you login you're asked for 2FA code which your
            script can't supply because it's sent to some 3rd party app or your phone. Which would mean you'd have
            to enter in your password everyday, or worse even more frequently which kind of ruins the whole
            point of the automation. So instead, you can have the script click "remember me" so that it doesn't ask
            for 2FA the next time. But, the selenium script runs in a browser environment that doesn't actually save
            information like "remember me". So, the way to get around it is to save cookies once you log in with 2FA
            and "remember me" and then load those cookies the second time you run the selenium script so it doesn't
            ask for 2FA for 30 days. Below is the code I wrote to solve this problem.
        </p>
        <Gist className={pages.page_description} id='c52ae005ee8ef1fbecbe876c0ca358b4'/>
    </>
)

export default Circumvent2FASeleniumComponent
