import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types';
import './bootstrap.css'

import MediaQuery from 'react-responsive'

import sciquelScreenshot from "../images/homepage_squares/sciquelhomepage1.png"
import urbanearthScreenshot from "../images/homepage_squares/urbanearthlogo.png"
import jeffreykozikScreenshot from "../images/homepage_squares/jeffreykozikwebsitescreenshot.png"
import oneworldbrowserextensionScreenshot from "../images/homepage_squares/1worldscreenshot.png"
import smrtnrllbrowserextensionScreenshot from "../images/homepage_squares/smrtnrllscreenshot.png"
import searchengineutilitybeltScreenshot from "../images/homepage_squares/searchengineutilitybeltscreenshot.png"
import totalcostScreenshot from "../images/homepage_squares/totalcostscreenshot.png"
import multitabsearchScreenshot from "../images/homepage_squares/multitabscreenshot.png"
import seobrowserextensionScreenshot from "../images/homepage_squares/seoscreenshot.png"

let imageArray = [sciquelScreenshot, urbanearthScreenshot, jeffreykozikScreenshot, oneworldbrowserextensionScreenshot, smrtnrllbrowserextensionScreenshot, searchengineutilitybeltScreenshot, totalcostScreenshot, multitabsearchScreenshot, seobrowserextensionScreenshot]

function ProjectComponent({ name, link, tags, startDate, endDate, imagePath, description }) {
  return(
      <>
      <MediaQuery maxWidth={540}>
          <div>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-4">
                      <img src={imageArray[imagePath]} className="img img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title h5"><Link className="a" to={link}>{name}</Link></h5>
                        <p className="card-text p"><small className="text-muted small">{startDate}</small></p>
                      </div>
                    </div>
                </div>
            </div>
         </div>
      </MediaQuery>
      <MediaQuery minWidth={541}>
          <div>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-4">
                      <img src={imageArray[imagePath]} className="img img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title h5"><Link className="a" to={link}>{name}</Link></h5>
                        <p className="card-text p">{description}</p>
                        <p className="card-text p"><small className="text-muted small">{startDate}</small></p>
                      </div>
                    </div>
                </div>
            </div>
         </div>
      </MediaQuery>
      </>
  )
}

ProjectComponent.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ProjectComponent;
