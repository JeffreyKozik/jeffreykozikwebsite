import * as React from "react"
import Gist from "react-gist"
import smooth_numbers_edited from "../../images/smooth_numbers_edited.mp4"
import rsa1 from "../../images/rsa1.png"
import rsa2 from "../../images/rsa2.png"
import rsa3 from "../../images/rsa3.png"
import * as pages from "../../page_styling/pages.module.css"

const SmoothNumbersComponent = () => (
    <>
        <h1 className={pages.page_title}> Smooth Numbers Python Script </h1>
        <h3 className={pages.page_subtitle}>
            Python script I wrote to solve problems in computational number theory.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={smooth_numbers_edited} type="video/mp4"></source>
        </video>
        <p className={pages.page_description}>
            2-smooth numbers are numbers whose largest prime factor is 2 or less. For example 2, 4, 8, 16, 32 are 2-smooth numbers.
            n-smooth numbers in general are numbers whose largest prime factor is n or less. One problem that often needs
            to be solved in computational number theory for integer factorization algorithms (which are often used in
            computer security algoriths) is the following. Let's say we have a sequence of 1000 integers each integer is a
            random number between 1 and 1000. For example the sequence could be: 1000 97 287 546 ... (a total of 1000 integers).
            There is a subset of length n of L(x)^(1/sqrt(2)) smooth numbers (where L(x) is defined by the pictures shown below)
            whose product is a square number. The question we want to answer is in the worst case how large is this n.
            We signify that with a capital N. In the program I wrote, it generates 5 (it can do as many as inputted but in the video
            I did 5 for brevity's sake) random sequences of 1000 integers from 1-1000. Then it finds the smallest subsequence of
            2-smooth numbers (because L(x) rounds down to 2) that when multiplied together make a square number. It compares
            the theoretical N value with the experimental value.
        </p>
        <img className={pages.page_video} src={rsa1} alt="rsa1 screenshot"/>
        <img className={pages.page_video} src={rsa2} alt="rsa2 screenshot"/>
        <img className={pages.page_video} src={rsa3} alt="rsa3 screenshot"/>
        <Gist className={pages.page_description} id="355a037a3b071ec827fd6fb2313687b9"/>
    </>
)

export default SmoothNumbersComponent
