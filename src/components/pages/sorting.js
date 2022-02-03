import * as React from "react"
import sortingDemo from "../../images/sorting_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const SortingComponent = () => (
    <>
        <h1 className={pages.page_title}> Sorting </h1>
        <h3 className={pages.page_subtitle}>
            Programmed an implementation of merge sort and tested the functionality and runtime.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={sortingDemo} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            You can browse the code at the Github repository located <a href="https://github.com/JeffreyKozik/Sorting">here</a>.
        </p>
    </>
)

export default SortingComponent
