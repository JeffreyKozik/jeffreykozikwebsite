import * as React from "react"
import Gist from "react-gist"
import rsa_webpage_edited from "../../images/rsa_webpage_edited.mp4"
import * as pages from "../../page_styling/pages.module.css"

const RSAComponent = () => (
    <>
        <h1 className={pages.page_title}> RSA Implementation in Flask </h1>
        <h3 className={pages.page_subtitle}>
            RSA implementation I coded in Python using Miller-Rabin and rendered on a webpage using Flask and HTML.
            Was part of school project for Computer Security class.
        </h3>
        <video controls preload="auto" className={pages.page_video}>
            <source src={rsa_webpage_edited} type="video/mp4"></source>
        </video>
        <Gist className={pages.page_description} id="11c2f2ba36ce6a6aadc3b6887d491996"/>
        <p className={pages.page_description}>
        </p>
    </>
)

export default RSAComponent
