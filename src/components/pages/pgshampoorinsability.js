import { Link } from "gatsby"
import * as React from "react"
import pgshampoo from "../../images/shampoo_rinse.jpeg"
import * as pages from "../../page_styling/pages.module.css"
// ADD LINKS
const PgShampooRinsabilityComponent = () => (
    <>
        <h1 className={pages.page_title}> P&G: Measuring Shampoo Rinsability with Computer Vision </h1>
        <h3 className={pages.page_subtitle}>
            I measured rinsability of shampoos using computer vision and used various tools such as
            Python, <a href="https://soft-matter.github.io/trackpy/v0.5.0/" target="_blank" rel="noreferrer">Trackpy</a>, <a href="https://perso.univ-rennes1.fr/joris.heyman/trac.html" target="_blank" rel="noreferrer">TracTrac</a>,
            Jupyter notebooks, Anaconda prompt, pandas, matplotlib, OpenCV, MATLAB, TensorFlow & PyTorch.
         </h3>
        <img className={pages.page_video} src={pgshampoo} alt="pgshampoo rinsability"/>
        <p className={pages.page_description}>
            At my P&G internship I've also done <Link to="projects/shapoocolormixmodel">machine learning work</Link>,
            <Link to="projects/pgautomation">automation work</Link>, and <Link to="projects/pgfixing3dprinter">3D printer work</Link>.
        </p>
        <p className={pages.page_description}>
            It's important to know how easily shampoos rinse because if they don't rinse very easily they could
            get stuck in someone's eyes. What's traditionally done to make sure that shampoo is "rinsable" enough
            is an ICE test (Isolated Chicken Eye) where shampoo samples are sent to an outside lab and put onto
            chicken eyes (detached from the chicken) and rinsed off and various attributes are measures such as the redness
            and swelling of the eye.
        </p>
        <p className={pages.page_description}>
            However, this test is imperfect because it takes a lot of time to get results back, it's expensive, and it's not
            always accurate because it doesn't necessarily mimic how people actually use shampoo. So my task for the summer was to
            explore alternative or supplemental options to the ICE test.
        </p>
        <p className={pages.page_description}>
            The first half of the internship I was remote and so was my boss so I was mostly testing out various computer vision technologies
            using BB pellets and a marble maze. I used Trackpy and wrote a Python program to measure the speed of these pellets as they went
            through the marble maze. I also explored other options such as using some of OpenCV's technologies, a tool that was a MATLAB app,
            as well as TensorFlow & PyTorch. However, I found that once the in lab tests came back, TracTrac was the most interesting at tracking
            small particles.
        </p>
        <p className={pages.page_description}>
            I was unable to develop a full fledged model by the end of my summer internship, however I was able to give the reccomendations around
            the particle tracking technologies and provide documentation and presentations so that my coworkers could carry the work forward.
        </p>
    </>
)

export default PgShampooRinsabilityComponent
