import { Link } from "gatsby"
import * as React from "react"
import threedprinter from "../../images/3dprinter.jpg"
import * as pages from "../../page_styling/pages.module.css"

const PgFixing3DPrinterComponent = () => (
    <>
        <h1 className={pages.page_title}> P&G: Fixing 3D Printer </h1>
        <h3 className={pages.page_subtitle}>
            During my first summer with P&G, I worked at fixing a 3D printer P&G acquired from
            a startup that no longer exists. I used <a href="https://marlinfw.org/">Marlin firmware</a> and <a href="https://www.pronterface.com/">Pronterface</a>.
        </h3>
        <img className={pages.page_video} src={threedprinter} alt="3d printer"/>
        <p className={pages.page_description}>
            At P&G I've also done <Link to="projects/shapoocolormixmodel">machine learning work</Link>,
            <Link to="projects/pgfixing3dprinter">computer vision work</Link>, and <Link to="projects/pgautomation">automation work</Link>.
        </p>
        <p className={pages.page_description}>
            I was working remotely during the summer so I remote desktop controlled the 3D printer and viewed what I was doing
            via an external camera. The 3D printer nozzle was having trouble knowing where the print bed was and as a result
            would get too close to the print bed and start digging into it. The 3D printer was running on a modified version
            of Marlin firmware. I was able to edit the configurations of this firmware the 3D printer was using over the command line,
            and I was able to control the 3D printer with pronterface. However, I didn't have access to the source code so
            my view into how the 3D printer was working was very limited. Unfortunately, I wasn't able to fix the 3D printer, and
            even if I were best case it would work as a normal 3D printer (the startup hadn't gotten to adding really any of the
            special features). However, I was able to make the recommendation that they stop trying to fix it because if it were even
            possible it would take a lot of time and only end up being a normal 3D printer. And I learned a lot about how 3D printers work along the way.
        </p>
    </>
)

export default PgFixing3DPrinterComponent
