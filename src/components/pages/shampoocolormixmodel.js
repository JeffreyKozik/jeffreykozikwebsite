import { Link } from "gatsby"
import * as React from "react"
import shampooPic from "../../images/redblueshampoo.jpeg"
import * as pages from "../../page_styling/pages.module.css"

const ShampooColorMixModelComponent = () => (
    <>
        <h1 className={pages.page_title}> Shampoo Color Mix Model </h1>
        <h3 className={pages.page_subtitle}>
            Machine learning model I created why interning at Procter & Gamble in R&D that predicted whether or not two
            shampoos would mix succesfully or unsuccesfully.
        </h3>
        <img className={pages.page_video} src={shampooPic} alt="shampoo red blue screenshot"/>
        <p className={pages.page_description}>
            At my P&G internship I've also done <Link to="projects/pgshampoorinsability">computer vision work</Link>,
            <Link to="projects/pgautomation">automation work</Link>, and <Link to="projects/pgfixing3dprinter">3D printer work</Link>.
        </p>
        <p className={pages.page_description}>
            Let's say a factory creates a red shampoo then once that's finished they manufacture a blue shampoo. One question
            that must be answered in this process is if the pipes need to be washed out with water in between making the red and
            the blue shampoo to get rid of the red shampoo residue, or if they red residue is close enough in color, smell, and chemistry
            to the the blue shampoo that it doesn't need to be rinsed out. The less washes that have to be done the better because
            <ol>
                <li>It costs money to rinse out the pipes.</li>
                <li>It takes time to rinse out the pipes which means less products can be made in a given period of time</li>
                <li>It's bad for the environment to rinse out the pipes when it's not needed because it uses a lot of clean water</li>
            </ol>
        </p>
        <p className={pages.page_description}>
            The process that's been done up until now to determine if two shampoos can "cross over" with each other and there doesn't need
            to be a washout is to look at an excel spreadsheet and see how high of a percentage of crossover is allowed. These spreadsheets
            are created in a very manual fashion following a large number of informal rules. This process has worked well so far and the people
            who maintain this spreadsheet do an amazing job. However as P&G produces more and more shampoos the spreadsheet gets bigger and bigger
            and much harder to maintain. So my task over the summer was to examine potential alternative methods to the spreadsheet model.
        </p>
        <p className={pages.page_description}>
            The area I was specifically tasked with was color crossover. The rules for color cross were based on another excel spreadsheet that said
            which colors could mix with which colors based on tests that were run some years ago. However, for example, sometimes it's hard to determine if a new shampoo
            falls in the "green" category or the "blue" category because there was no objective measure of color.
        </p>
        <p className={pages.page_description}>
            So, I built a machine learning model with python that trained on upwards 3 million datapoints (historical data) to determine if two shampoos crossed over or not.
            The data it took was the dye concentrations of the two shampoos being crossed. At first I used a K Nearest Neighbors model, and it gave my 95%
            accuracy (saying they crossed every time would give 90% accuracy) when I trained on a couple hundred thousand data points , but it was too slow,
            taking days to run on all data points. So, I switched to an XGBoost model which gave over 99% accuracy and completed in less than a few minutes.
            Unfortunately, I never had the time in my 12 week internship to transition the entire shampoo color mix excel sheet to this model as even above 99% accuracy
            isn't accurate enough for a commercial scale. However, it showed the power of machine learning to the team and hopefully inspires work in this
            direction in the future.
        </p>
        <p className={pages.page_description}>
            Some more detail: I also tried using a Naive Bayes model and Support Vector Machine model but they weren't
            very accurate in my case. Also, I used scipy, sklearn, and numpy for the ML model.
            I also used IBM LSF to run models faster.
        </p>
    </>
)

export default ShampooColorMixModelComponent
