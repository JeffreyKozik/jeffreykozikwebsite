import * as React from "react"
import pgautomation from "../../images/pgautomation.jpeg"
import * as pages from "../../page_styling/pages.module.css"

const PgAutomationComponent = () => (
    <>
        <h1 className={pages.page_title}> Automation Work at P&G </h1>
        <h3 className={pages.page_subtitle}>
            Throughout my two internships at P&G I did work beyond my assigned work by automating two
            of my coworkers excel spreasheets with python and VBA and I began automation of a manual entry task
            through a custom browser extension.
        </h3>
        <img className={pages.page_video} src={pgautomation} alt="pg automation"/>
        <p className={pages.page_description}>
            My coworker had a gigantic excel spreadsheet he had to split into many different smaller spreadsheets
            based on various criteria and he had to have special different headers for each of these spreadsheets and
            a certain format as well. He used to do this manually, but I wrote him a script, originally in VBA, but then
            in Python because it was faster and less buggy, that automated this work for him and saved him countless hours.
        </p>
        <p className={pages.page_description}>
            My other coworker had an excel spreadsheet that he wanted rows sorted in a certain way that excel wasn't
            able to do with its built in functionality, so I wrote him a script, again originally in VBA, but then in Python,
            to do this task for him.
        </p>
        <p className={pages.page_description}>
            Those two excel automations above were in my first internship at P&G. In my second internship, I had used
            selenium to automate a data retrieval task related to my main project which you can read about more at this
            link. One of my coworkers saw this and connected me with someone who was interested in speeding up a process
            that was very tedious to do manually. I began the creation of a browser extension to do that (this was the first
            browser extension I ever made). It did about half of the task but unfortunately I ran out of time and was unable to finish it.
            Still, I passed on the code so that they could finish it and I helped spread the idea of browser automation to the company.
        </p>
    </>
)

export default PgAutomationComponent
