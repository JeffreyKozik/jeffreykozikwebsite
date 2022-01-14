import * as React from "react"
import sciquelhomepage1 from "../images/sciquelhomepage1.png"
import sciquelhomepage2andfooter from "../images/sciquelhomepage2andfooter.png"
import sciquelarticlepage from "../images/sciquelarticlepage.png"
import sciquelarticlepage2 from "../images/sciquelarticlepage2.png"
import sciquelaboutuspage from "../images/sciquelaboutuspage.png"
import sciquelgetinvolvedpage1 from "../images/sciquelgetinvolvedpage.png"
import sciquelgetinvolvedpage2 from "../images/sciquelgetinvolvedpage2.png"
import demoVideo from "../images/sciqueldemofinished.mp4"
import responsiveVideo from "../images/sciquelresponsivefinal.mp4"
import "../page_styling/pages.css"
import Seo from "../components/seo"

const Sciquel = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="sciquel" />
            <div className="page_container">
                <h1 className="page_title"> sciquel </h1>
                <h3 className="page_subtitle">
                    Sciquel is a website that myself and one other person worked together on to code. It is a project that a number of
                    Harvard Medical School students came up with to make science more accessible to the average person as academic papers
                    are often very complicated to read and more often than not cost money to read.
                </h3>
                <video controls preload="auto" className="page_video">
                    <source src={demoVideo} type="video/mp4"></source>
                </video>
                <h3 className="page_subtitle">
                    The video above shows the state of the website at the point we stopped working on it. The code should be published shortly and I'll provide
                    a link at that point, but right now it's in the hands of the Sciquel team to publish when they're ready.
                     My teammate and I worked on this project from the end of December 2021 to the beginning of Januarary 2022 on a part time basis
                    when we were free during the holiday. Our contact from the Sciquel team created a Figma template which we used as the
                    starting point for our front end design, but we made changes where we felt it would look better one way versus the other.
                    We used JavaScript, HTML, CSS, and Bootstrap for the implementation. If we had more time we would have made the website more responsive, integrated the website
                    with a CMS for easy article publishing, and we would have used Firebase Authentication for the login flow and Firestore to keep track
                    of some basic concepts such as comments.
                </h3>
                <img className="page_video" src={sciquelhomepage1}></img>
                <img className="page_video" src={sciquelhomepage2andfooter}></img>
                <p className="page_description">
                    The images above show the homepage which is what I worked on mostly. I initially used Bootstrap, but eventually switched to flexbox because I wanted a little bit more
                    customization on the components. I also worked hard to make this page responsive (as you can see in the video below) which
                    was especially tricky because of the overlapping components. My teammate worked on header and footer and the rest of the pages screenshotted below.
                </p>
                <video controls preload="auto" className="page_video">
                    <source src={responsiveVideo} type="video/mp4"></source>
                </video>
                <img className="page_video" src={sciquelarticlepage}></img>
                <img className="page_video" src={sciquelarticlepage2}></img>
                <img className="page_video" src={sciquelaboutuspage}></img>
                <img className="page_video" src={sciquelgetinvolvedpage1}></img>
                <img className="page_video" src={sciquelgetinvolvedpage2}></img>
            </div>
        </body>
    </>
)

export default Sciquel
