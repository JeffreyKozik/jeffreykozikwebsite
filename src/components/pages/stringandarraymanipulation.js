import * as React from "react"
import stringShot from "../../images/homepage_squares/stringshot.png"
import * as pages from "../../page_styling/pages.module.css"

const StringAndArrayManipulationComponent = () => (
    <>
        <h1 className={pages.page_title}> String and Array Manipulation </h1>
        <h3 className={pages.page_subtitle}>
            String and array manipulation algorithms I wrote in Java
        </h3>
        <img className={pages.page_video} src={stringShot} alt="string screenshot"/>
        <p className={pages.page_description}>
            You can browse the code at the Github repository located <a href="https://github.com/JeffreyKozik/StringAndArrayManipulation">here</a>.
        </p>
    </>
)

export default StringAndArrayManipulationComponent
