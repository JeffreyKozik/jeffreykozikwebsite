import { StyleSheet, css } from 'aphrodite';
import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React from 'react'
import { bounceInDown } from 'react-animations';
import MediaQuery from 'react-responsive'

import './bootstrap.css'


import sciquelScreenshot from "../images/homepage_squares/sciquelhomepage1.png"
import urbanearthScreenshot from "../images/homepage_squares/urbanearthlogo.png"
import jeffreykozikScreenshot from "../images/homepage_squares/jeffreykozikwebsitescreenshot.png"
import oneworldbrowserextensionScreenshot from "../images/homepage_squares/1worldscreenshot.png"
import smrtnrllbrowserextensionScreenshot from "../images/homepage_squares/smrtnrllscreenshot.png"
import searchengineutilitybeltScreenshot from "../images/homepage_squares/searchengineutilitybeltscreenshot.png"
import totalcostScreenshot from "../images/homepage_squares/totalcostscreenshot.png"
import multitabsearchScreenshot from "../images/homepage_squares/multitabscreenshot.png"
import seobrowserextensionScreenshot from "../images/homepage_squares/seoscreenshot.png"
import squarePOS from "../images/homepage_squares/squarepos.png"
import automatedWayToGetJSErrors from "../images/homepage_squares/automatedwaytogetjserrors.png"
import automatingUsernameCheckProcess from "../images/homepage_squares/automatingusernamecheckprocess.png"
import shampooColorMixModel from "../images/homepage_squares/redblueshampoo.jpeg"
import autopayHealthcare from "../images/homepage_squares/autopayhealthcare.png"
import circumvent2FASelenium from "../images/homepage_squares/circumvent2FA.png"
import fixingSeleniumTaxScript from "../images/homepage_squares/beautifulsoup.png"
import germanImmigrationAutomation from "../images/homepage_squares/germanImmigrationAutomation.png"
import rsa from "../images/homepage_squares/rsashield.jpeg"
import smoothNumbers from "../images/homepage_squares/smoothnumbers.jpeg"
import walksatdpll from "../images/homepage_squares/walksatdpll.jpeg"
import tradingViewGraphAutomation from "../images/homepage_squares/tradingviewgraphautomation.png"
import pgfixing3dprinter from "../images/homepage_squares/3dprinter.jpg"
import airCharger from "../images/homepage_squares/aircharger2.png"
import welcomeBackHack from "../images/homepage_squares/welcomebackhack.png"
import giveBackHack from "../images/homepage_squares/givebackhack.png"
import pathfindingaiproject from "../images/homepage_squares/astar.jpeg"
import inline from "../images/homepage_squares/inline.jpeg"
import automatedresourcecollection from "../images/homepage_squares/goldbars.jpeg"
import enhancedautomatedresourcecollection from "../images/homepage_squares/enhanced.png"
import automatedtacticalbattles from "../images/homepage_squares/automatedtacticalbattles.png"
import iosextensionunicart from "../images/homepage_squares/iosextensionunicart.png"
import smrtnrllselenium from "../images/homepage_squares/smrtnrllselenium.png"
import pgautomation from "../images/homepage_squares/pgautomation.jpeg"
import pgrinse from "../images/homepage_squares/shampoo_rinse.jpeg"
import tasktimerecorder from "../images/homepage_squares/tasktimerecorderfirstpage.png"
import imperativeinterpreter from "../images/homepage_squares/imperativeinterpreter.png"

const styles = StyleSheet.create({
  bounceInDown: {
    animationName: bounceInDown,
    animationDuration: '2s'
  }
})

let imageArray = [sciquelScreenshot, urbanearthScreenshot, jeffreykozikScreenshot,
    oneworldbrowserextensionScreenshot, smrtnrllbrowserextensionScreenshot, searchengineutilitybeltScreenshot,
    totalcostScreenshot, multitabsearchScreenshot, seobrowserextensionScreenshot, squarePOS, automatedWayToGetJSErrors, automatingUsernameCheckProcess,
    shampooColorMixModel, autopayHealthcare, circumvent2FASelenium, fixingSeleniumTaxScript, germanImmigrationAutomation, rsa,
    smoothNumbers, walksatdpll, tradingViewGraphAutomation, pgfixing3dprinter, airCharger, welcomeBackHack, giveBackHack, pathfindingaiproject,
    inline, automatedresourcecollection, enhancedautomatedresourcecollection, automatedtacticalbattles,
    iosextensionunicart, smrtnrllselenium, pgautomation, pgrinse, tasktimerecorder, imperativeinterpreter]
// state={{portName: [portfolioNameParam]}}

function ProjectComponent({ name, link, tags, startDate, endDate, imagePath, description }) {
  return(
      <>
      <MediaQuery maxWidth={540}>
          <div>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-4">
                      <img src={imageArray[imagePath]} className="img img-fluid rounded-start" alt="homepage screenshot"/>
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
                      <img src={imageArray[imagePath]} className="img img-fluid rounded-start" alt="homepage screenshot"/>
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
  description: PropTypes.string.isRequired,
}

export default ProjectComponent;
