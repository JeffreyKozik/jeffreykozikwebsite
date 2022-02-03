import * as React from "react"
import railyard_edited from "../../images/railyard_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const RailyardComponent = () => (
    <>
        <h1 className={pages.page_title}> Railyard Cycle and Closest Sort </h1>
        <h3 className={pages.page_subtitle}>
            Java program to sort arrays using the metaphor of railyards with classification
            yards and parallel tracks.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={railyard_edited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            In this program a railyard consists of multiple classification yards which each of a
            certain amount of parallel tracks. The elements on the array come into the railyard unsorted,
            and then go into one of the parallel tracks in one of the classification yard and come out
            the other end sorted. I implemented two variations of merge sort, cycle sort and closest sort
            in this project.
        </p>
        <p className={pages.page_description}>
            You can browse the code at the Github repository located <a href="https://github.com/JeffreyKozik/RailYard">here</a>.
        </p>
    </>
)

export default RailyardComponent
