import _ from 'lodash'
import PropTypes from "prop-types"
import React from 'react'
import MediaQuery from 'react-responsive'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import ProjectComponent from "./projectcomponent.js"

import './bootstrap.css'
import * as homepage from './homepage.module.css';

class HomePage extends React.Component {
    handleTypeChange = (selectedOptions) => {
        let oldArray = Array.from(this.state.originalProjectsArrayState);
        let oldArrayClone = _.cloneDeep(oldArray);
        for(let i = 0; i < oldArrayClone.length; i++){
            let inSelection = false;
            for (let j = 0; j < selectedOptions.length; j++){
                if(oldArrayClone[i].tags.includes(selectedOptions[j].value)){
                    inSelection = true;
                    break;
                }
            }
            if(!inSelection){
                for (let k = 0; k < this.state.toolValueState.length; k++){
                    if(oldArrayClone[i].tags.includes(this.state.toolValueState[k].value)){
                        inSelection = true;
                        break;
                    }
                }
                if(!inSelection){
                    for (let k = 0; k < this.state.occasionValueState.length; k++){
                        if(oldArrayClone[i].tags.includes(this.state.occasionValueState[k].value)){
                            inSelection = true;
                            break;
                        }
                    }
                    if(!inSelection){
                        oldArrayClone.splice(i, 1);
                    }
                }
            }
        }

        this.setState({
            typeValueState: selectedOptions,
            currentProjectsArrayState: Array.from(oldArrayClone)
        });
    }

    handleToolChange = (selectedOptions) => {
        let oldArray = Array.from(this.state.originalProjectsArrayState);
        let oldArrayClone = _.cloneDeep(oldArray);
        for(let i = 0; i < oldArrayClone.length; i++){
            let inSelection = false;
            for (let j = 0; j < selectedOptions.length; j++){
                if(oldArrayClone[i].tags.includes(selectedOptions[j].value)){
                    inSelection = true;
                    break;
                }
            }
            if(!inSelection){
                for (let k = 0; k < this.state.typeValueState.length; k++){
                    if(oldArrayClone[i].tags.includes(this.state.typeValueState[k].value)){
                        inSelection = true;
                        break;
                    }
                }
                if(!inSelection){
                    for (let k = 0; k < this.state.occasionValueState.length; k++){
                        if(oldArrayClone[i].tags.includes(this.state.occasionValueState[k].value)){
                            inSelection = true;
                            break;
                        }
                    }
                    if(!inSelection){
                        oldArrayClone.splice(i, 1);
                    }
                }
            }
        }

        this.setState({
            toolValueState: selectedOptions,
            currentProjectsArrayState: Array.from(oldArrayClone)
        });
    }

    handleOccasionChange = (selectedOptions) => {
        let oldArray = Array.from(this.state.originalProjectsArrayState);
        let oldArrayClone = _.cloneDeep(oldArray);
        for(let i = 0; i < oldArrayClone.length; i++){
            let inSelection = false;
            for (let j = 0; j < selectedOptions.length; j++){
                if(oldArrayClone[i].tags.includes(selectedOptions[j].value)){
                    inSelection = true;
                    break;
                }
            }
            if(!inSelection){
                for (let k = 0; k < this.state.typeValueState.length; k++){
                    if(oldArrayClone[i].tags.includes(this.state.typeValueState[k].value)){
                        inSelection = true;
                        break;
                    }
                }
                if(!inSelection){
                    for (let k = 0; k < this.state.toolValueState.length; k++){
                        if(oldArrayClone[i].tags.includes(this.state.toolValueState[k].value)){
                            inSelection = true;
                            break;
                        }
                    }
                    if(!inSelection){
                        oldArrayClone.splice(i, 1);
                    }
                }
            }
        }

        this.setState({
            occasionValueState: selectedOptions,
            currentProjectsArrayState: Array.from(oldArrayClone)
        });
    }

    listItemsFunction = (nameArrayParam) => {
        let listItems = []
        for(let i=0; i < this.state.currentProjectsArrayState.length; i++){
            listItems.push("");
        }
        for(let i = 0; i <  this.state.currentProjectsArrayState.length; i++){
            if((nameArrayParam.length == 0) || (nameArrayParam.includes( this.state.currentProjectsArrayState[i].name))){
                listItems[nameArrayParam.indexOf( this.state.currentProjectsArrayState[i].name)] =
                    <div key={i}><ProjectComponent name={ this.state.currentProjectsArrayState[i].name}
                                                   link={ this.state.currentProjectsArrayState[i].link}
                                                   tags={ this.state.currentProjectsArrayState[i].tags}
                                                   startDate={ this.state.currentProjectsArrayState[i].startDate}
                                                   endDate={ this.state.currentProjectsArrayState[i].endDate}
                                                   imagePath={ this.state.currentProjectsArrayState[i].imagePath}
                                                   description={ this.state.currentProjectsArrayState[i].description}/>
                   </div>
            }
        }
        return listItems
    }

    constructor(props){
        let originalProjectsArray = [];

        class Project{
          constructor(name, link, tags, startDate, endDate, imagePath, description){
            this.name = name;
            this.link = link;
            this.tags = tags;
            this.startDate = startDate;
            this.endDate = endDate;
            this.imagePath = imagePath;
            this.description = description;
            originalProjectsArray.push(this);
          }
        }

        // let harryPotterGame = new Project("Harry Potter Game", "", "", "", "", "");
        // let thomasRobertMalthusPresentation = new Project("Thomas Robert Malthus Presentation", "", "", "", "", "");
        // let basketballGameSimulator = new Project("Basktball Game Simulator", "", "", "", "", "");
        // let gomoku = new Project("Gomoku", "", "", "", "", "");
        // let railyard = new Project("Railyard", "", "", "", "", "");
        // let stringAndArrayManipulation = new Project("String and Array Manipulation", "", "", "", "", "");
        // let sorting = new Project("Sorting", "", "", "", "", "");
        // let hashtable = new Project("Hashtable", "", "", "", "", "");
        // let pingPongRallyTracker = new Project("Ping Pong Rally Tracker", "", "", "", "", "");
        // let trickOrTag = new Project("Trick or Tag", "", "", "", "", "");
        // let tedXCwru = new Project("TEDxCWRU", "", "", "", "", "");
        // let designForAmerica = new Project("Design For America", "", "", "", "", "");

        // 12 characters for titles,
        // 40 characters for descriptions
        let sciquel = new Project("Sciquel", "/projects/sciquel", ["Website", "Bootstrap", "HTML, CSS", "Personal"], "Dec 2021 - Jan 2022", "", 0, <>Makes science more accessible</>);
        let urbanEarth = new Project("Urban Earth", "/projects/urbanearth", ["iOS App", "Firebase", "Swift", "XCode", "School"], "Oct - Dec 2021", "", 1, <>Tracks & encourages sustainable travel</>);
        let jeffreykozikwebsite = new Project("This Website", "/projects/jeffreykozikwebsite", ["Website", "React", "Gatsby", "Bootstrap", "MUI", "JS", "HTML, CSS", "Personal"], "Dec 2021 - Jan 2022", "", 2, <>Portfolio website with React and Gatsby</>);
        let oneWorldBrowserExtension = new Project("1World", "/projects/1world", ["Extension", "Website", "Azure Functions", "Bing API", "nltk", "sklearn", "React", "Gatsby", "MUI", "JS", "HTML, CSS", "Google Cloud Functions", "Google Cloud Run", "Docker", "Google Custom Search Engine", "VADER", "Microsoft Azure", "Google Cloud Platform", "Hackathon", "AI"], "Nov 2021 - Jan 2022", "", 3, <>Helps small businesses easily offset CO2</>);
        let smrtnrllBrowserExtension = new Project("smrtnrll 2.0", "/projects/smrtnrllbrowserextension", ["Extension", "JS", "HTML, CSS", "Personal", "Automation"], "Dec 2020 - Oct 2021", "", 4, <>Auto-enrolls students in full classes</>);
        let bingUtilityBelt = new Project("BingAdFinder", "/projects/bingutilitybelt", ["Extension", "JS", "HTML", "CSS", "Personal"], "Nov 2021 - Jan 2022", "", 5, <>Highlights and counts ads on Bing</>);
        let totalCostBrowserExtensionIRSLogics = new Project("Total Cost", "/projects/totalcostbrowserextension", ["Extension", "JS", "HTML, CSS", "Freelance", "Automation"], "Oct - Nov 2021", "", 6, <>Displays 12 sites' cost info in 1 place</>);
        let multitabSearchBrowserExtensionIRSLogics = new Project("MultiSearch", "/projects/multitabsearch", ["Extension", "JS", "HTML, CSS", "Freelance", "Automation"], "Oct 2021", "", 7, <>Searches all open tabs simulatenously</>);
        let seoBrowserExtension = new Project("Site Checker", "/projects/seobrowserextension", ["Extension", "JS", "HTML, CSS", "Personal"], "Nov 2021", "", 8, <>Shows SEO tips using <a href="site-checker.org">site-checker.org</a></>);
        let squarePOSHackathon = new Project("Square Hacks", "/projects/squarePOSHackathon", ["Article", "Hackathon"], "Oct - Dec 2021", "", 9, <>Won "Best Feedback" at Square Hackathon</>);
        let automatedWayToGetJSErrors = new Project("AutoLint JS", "/projects/automatedwaytogetjserrors", ["CMDLine", "Python", "Selenium", "Freelance", "Automation"], "Oct 2021", "", 10, <>Auto-retrieves JS errors from url list</>);
        let automatingUsernameCheckProcess = new Project("AutoCheck", "/projects/automatingusernamecheckprocess", ["Desktop App", "tkinter", "openpyxl", "Python", "Selenium", "Freelance", "Automation"], "Oct 2021", "", 11, <>Auto fills out excel sheet via GUI</>);
        let shampooColorMixModel = new Project("Color Model", "/projects/shampoocolormixmodel", ["CMDLine", "Python", "scipy", "sklearn", "numpy", "IBM LSF", "Internship", "AI"], "Jun - Aug 2021", "", 12, <>Predicts shampoo color cross with ML</>);
        let autopayHealthcare = new Project("Autopay", "/projects/autopayhealthcare", ["CMDLine", "Python", "Selenium", "Freelance", "Automation"], "Oct 2021", "", 13, <>Autopays healthcare bill</>);
        let circumvent2FASelenium = new Project("Avoid 2FA", "/projects/circumvent2FAselenium", ["CMDLine", "Python", "Selenium", "Freelance", "Automation"], "Sep 2021", "", 14, <>Saves 2FA cookie for Selenium scripts</>);
        let fixingSeleniumTaxScript = new Project("Tax Script", "/projects/fixingseleniumtaxscript", ["CMDLine", "Python", "Selenium", "Beautiful Soup", "Freelance", "Automation"], "Sep 2021", "", 15, <>Fixed script with WebDriverWait and BS4</>);
        let germanImmigrationAutomation = new Project("Auto Appt", "/projects/germanimmigrationautomation", ["CMDLine", "Gmail API", "Python", "Selenium", "Google Cloud Platform", "Freelance", "Automation"], "Sep 2021", "", 16, <>Auto-finds appt and alerts via Gmail API</>);
        let rsa = new Project("RSA", "/projects/rsa", ["Website", "Flask", "Python", "HTML, CSS", "School"], "Nov - Dec 2021", "", 17, <>Implements RSA on webpage with Flask</>);
        let smoothNumbers = new Project("Smooth Nums", "/projects/smoothnumbers", ["CMDLine", "Python", "School"], "Nov 2021", "", 18, <>Solves comp number theory problems</>);
        let walksatDPLL = new Project("WalkSAT DPLL", "/projects/walksatdpll", ["CMDLine", "Java", "School", "AI"], "Sep - Oct 2021", "", 19, <>Tests WalkSAT, DPLL satisfiability algs</>);
        let tradingViewGraphAutomation = new Project("TradingView", "/projects/tradingviewgraphautomation", ["Desktop App", "PIL", "tkinter", "openpyxl", "Python", "Selenium", "Freelance", "Automation"], "Oct 2021", "", 20, <>Auto-screenshots market activity</>);
        let pgFixing3DPrinter = new Project("3D Print Fix", "/projects/pgfixing3dprinter", ["Hardware", "3D Print", "Marlin", "Pronterface", "Internship"], "May - July 2020", "", 21, <>Investigated with <a href="https://marlinfw.org/">Marlin</a>,<a href="https://www.pronterface.com/">Pronterface</a>.</>);
        let airCharger = new Project("Air Charger", "/projects/aircharger", ["Hardware", "Circuits", "3DPrint", "Personal"], "Feb - July 2021", "", 22, <>Prototyped sleek magsafe battery pack</>);
        let welcomeBackHack = new Project("LCSC", "/projects/welcomebackhack", ["CMDLine", "Python", "Beautiful Soup", "Hackathon"], "Aug 2019", "", 23, <>Won "Best in Creativity" WelcomeBackHack</>);
        let giveBackHackVol = new Project("GiveBackHack", "/projects/givebackhackvol", ["Website", "Bootstrap", "HTML, CSS", "Hackathon"], "Sep 2019", "", 24, <>Prototyped volunteer website</>);
        let pathfindingaiproject = new Project("PathfindAI", "/projects/pathfindingaiproject", ["CMDLine", "Java", "School", "AI"], "Apr 2021", "", 25, <>Navigated bot through a maze with enemy</>);
        let inline = new Project("inLine", "/projects/inline", ["CMDLine", "Website", "SQL", "Flask", "Python", "HTML, CSS", "School"], "Nov - Dec 2021", "", 26, <>Helps businesses manage waitlists</>);
        let automatedResourceCollection = new Project("CollectAI", "/projects/automatedresourcecollection", ["CMDLine", "Java", "School", "AI"], "Apr 2021", "", 27, <>Determines optimal route to collect</>);
        let enhancedAutomatedResourceCollection = new Project("CollectAI+", "/projects/enhancedautomatedresourcecollection", ["CMDLine", "Java", "School", "AI"], "Apr 2021", "", 28, <>CollectAI + bot can create new bots</>);
        let automatedTacticalBattles = new Project("TacticalAI", "/projects/automatedtacticalbattles", ["CMDLine", "Java", "School", "AI"], "May 2021", "", 29, <>Trained our bots w/ RL to fight enemies</>);
        let iosExtensionUnicart = new Project("iOS Unicart", "/projects/iosextensionunicart", ["iOS App", "Extension", "Freelance"], "Nov 2021", "", 30, <>Turned Chrome extension to iOS extension</>);
        let smrtnrllSelenium = new Project("smrtnrll 1.0", "/projects/smrtnrllselenium", ["CMDLine", "Python", "Selenium", "Personal"], "Dec 2020 - Feb 2021", "", 31, <>smrtnrll 2.0 w/ selenium not extension</>);
        let pgAutomation = new Project("P&G Automate", "/projects/pgautomation", ["CMDLine", "openpyxl", "VBA", "Python", "Internship", "Automation"], "May - Jul 2020, Jun - Aug 2021", "", 32, <>Automated 2 coworkers excel sheets, more</>);
        let computerVisionToMeasureRinsability = new Project("RinseCV", "/projects/pgshampoorinsability", ["CMDLine", "Computer Vision", "Python", "Internship", "AI"], "May - Jul 2020", "", 33, <>Measured rinsability w/ computer vision</>);
        let taskTimeRecorder = new Project("Task Time", "/projects/tasktimerecorder", ["Macro", "Apps Script", "Personal", "Automation"], "Sep - Dec 2020", "", 34, <>Tracked time, efficiency w/ Apps Script</>);
        let imperativeInterpreter = new Project("Interpeter", "/projects/imperativeinterpreter", ["CMDLine", "Racket", "School"], "Apr 2021", "", 35, <>Created C-like prog language w/ Racket</>);
        let huffmanEncoder = new Project("Huffman Encoder", "/projects/huffmanencoder", ["CMDLine", "Java", "School"], "Mar - Apr 2020", "", 36, <>Encoded, decoded file to save 58% space</>);

        super(props);

        const nameArray = this.props.nameArray;
        const titleName = this.props.titleName;

        let typeArray = ["Website", "Extension", "iOS App", "Desktop App", "CMDLine", "Hardware", "Macro", "Article"]
        let toolArray = ["JS",
                        "React",
                        "Gatsby",
                        "MUI",
                        "HTML, CSS",
                        "Boostrap",

                        "Python",
                        "nltk",
                        "scipy",
                        "sklearn",
                        "VADER",
                        "numpy",
                        "Flask",
                        "Selenium",
                        "Beautiful Soup",
                        "tkinter",
                        "openpyxl",
                        "PIL",

                        "Java",

                        "Swift",
                        "XCode",

                        "SQL",

                        "Google Cloud Platform",
                        "Firebase",
                        "Google Cloud Functions",
                        "Google Cloud Run",
                        "Docker",
                        "Google Custom Search Engine",
                        "Gmail API",

                        "Microsoft Azure",
                        "Azure Functions",
                        "Bing API",

                        "IBM LSF",

                        "3D Print",
                        "Marlin",
                        "Pronterface",
                        "Circuits",

                        "Apps Script",
                        "VBA",

                        "Racket",

                        "Automation",
                        "AI",
                        "Computer Vision"
                        ]
        let occasionArray = ["Personal", "Hackathon", "Freelance", "School", "Internship"]

        let typeOptions = []
        for(let i = 0; i < typeArray.length; i++){
            typeOptions.push({value: typeArray[i], label: typeArray[i]});
        }

        let toolOptions = []
        for(let i = 0; i < toolArray.length; i++){
            toolOptions.push({value: toolArray[i], label: toolArray[i]});
        }

        let occasionOptions = []
        for(let i = 0; i < occasionArray.length; i++){
            occasionOptions.push({value: occasionArray[i], label: occasionArray[i]});
        }

        const animatedComponentsType = makeAnimated();
        const animatedComponentsTool = makeAnimated();
        const animatedComponentsOccasion = makeAnimated();

        let typeValue = [];
        let toolValue = [];
        let occasionValue = [];

        let currentProjectsArray = _.cloneDeep(originalProjectsArray);

        this.state = {
            originalProjectsArrayState: originalProjectsArray,
            currentProjectsArrayState: currentProjectsArray,
            nameArrayState: nameArray,
            titleNameState: titleName,
            typeOptionsState: typeOptions,
            toolOptionsState: toolOptions,
            occasionOptionsState: occasionOptions,
            animatedComponentsTypeState: animatedComponentsType,
            animatedComponentsToolState: animatedComponentsTool,
            animatedComponentsOccasionState: animatedComponentsOccasion,
            typeValueState: typeValue,
            toolValueState: toolValue,
            occasionValueState: occasionValue
        }
    }

    // make is so that all selects are on same line (flexbox stuff)
    render(){
        return(
            <>
                <MediaQuery maxWidth={651}>
                    <body className={homepage.bodyClass}>
                        <h1 className="m-3" id={homepage.jeffrey_kozik}>{this.state.titleNameState}</h1>
                        <div className={homepage.select_div}>
                            <div className={homepage.mobile_portfolio_link}>jeffreykozik@protonmail.com</div>
                            <a className={homepage.mobile_portfolio_link} href="https://github.com/JeffreyKozik" target="_blank" rel="noreferrer">Github</a>
                            <a className={homepage.mobile_portfolio_link} href="https://fiverr.com/JeffreyKozik" target="_blank" rel="noreferrer">Fiverr</a>
                            <a className={homepage.mobile_portfolio_link} href="https://stackoverflow.com/users/16913644/jeffrey-kozik" target="_blank" rel="noreferrer">SO</a>
                            <a className={homepage.mobile_portfolio_link} href="https://jeff2.eth.link" target="_blank" rel="noreferrer">jeff2.eth</a>
                            <a className={homepage.mobile_portfolio_link} href="https://linkedin.com/in/kozik" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                        <div className={homepage.select_div}>
                            <Select  closeMenuOnSelect={false} components={this.state.animatedComponentsTypeState} isMulti options={this.state.typeOptionsState} multiple value={this.state.typeValueState} onChange={(selectedOption) => this.handleTypeChange(selectedOption)}/>
                            <Select closeMenuOnSelect={false} components={this.state.animatedComponentsToolState} isMulti options={this.state.toolOptionsState} multiple value={this.state.toolValueState} onChange={(selectedOption) => this.handleToolChange(selectedOption)}/>
                            <Select closeMenuOnSelect={false} components={this.state.animatedComponentsOccasionState} isMulti options={this.state.occasionOptionsState} multiple value={this.state.occasionValueState}  onChange={(selectedOption) => this.handleOccasionChange(selectedOption)}/>
                        </div>
                        <div className={homepage.projects_container}>
                            {this.listItemsFunction(this.state.nameArrayState)}
                        </div>
                    </body>
                </MediaQuery>
                <MediaQuery minWidth={652}>
                    <>
                        <h1 className="m-3" id={homepage.jeffrey_kozik}>{this.state.titleNameState}</h1>
                        <div className={homepage.select_div}>
                            <div className={homepage.portfolio_link}>jeffreykozik@protonmail.com</div>
                            <a className={homepage.portfolio_link} href="https://github.com/JeffreyKozik" target="_blank" rel="noreferrer">Github</a>
                            <a className={homepage.portfolio_link} href="https://fiverr.com/JeffreyKozik" target="_blank" rel="noreferrer">Fiverr</a>
                            <a className={homepage.portfolio_link} href="https://stackoverflow.com/users/16913644/jeffrey-kozik" target="_blank" rel="noreferrer">SO</a>
                            <a className={homepage.portfolio_link} href="https://jeff2.eth.link" target="_blank" rel="noreferrer">jeff2.eth</a>
                            <a className={homepage.portfolio_link} href="https://linkedin.com/in/kozik" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                        <div className={homepage.select_div}>
                            <Select closeMenuOnSelect={false} components={this.state.animatedComponentsTypeState} isMulti options={this.state.typeOptionsState} multiple value={this.state.typeValueState} onChange={(selectedOption) => this.handleTypeChange(selectedOption)}/>
                            <Select  closeMenuOnSelect={false} components={this.state.animatedComponentsToolState} isMulti options={this.state.toolOptionsState} multiple value={this.state.toolValueState} onChange={(selectedOption) => this.handleToolChange(selectedOption)}/>
                            <Select  closeMenuOnSelect={false} components={this.state.animatedComponentsOccasionState} isMulti options={this.state.occasionOptionsState} multiple value={this.state.occasionValueState}  onChange={(selectedOption) => this.handleOccasionChange(selectedOption)}/>
                        </div>
                        <div className={homepage.projects_container}>
                            {this.listItemsFunction(this.state.nameArrayState)}
                        </div>
                    </>
                </MediaQuery>
            </>
        )
    }
}

HomePage.propTypes = {
  nameArray: PropTypes.string,
  titleName: PropTypes.string
}

HomePage.defaultProps = {
  nameArray: [],
  titleName: "Jeffrey Kozik"
}

export default HomePage;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();





// 99 - 126 characters,
// let sciquel = new Project("Sciquel", "/projects/sciquel", "", "Dec 2021 - Jan 2022", "", 0, <>Website that myself and one other person worked together on to code to make science more accessible to the average person.</>);
// let urbanEarth = new Project("Urban Earth", "/projects/urbanearth", "", "Oct - Dec 2021", "", 1, <>An iOS app that helps users track how often they use sustainable forms of transportation and motivates them to keep at it.</>);
// let jeffreykozikwebsite = new Project("Jeffrey Kozik Website", "/projects/jeffreykozikwebsite", "", "Dec 2021 - Jan 2022", "", 2, <>Portfolio website I coded with React and Gatsby and a number of react packages including material-ui and react-select.</>);
// let oneWorldBrowserExtension = new Project("1World Browser Extension", "/projects/1world", "", "Nov 2021 - Jan 2022", "", 3, <>The 1World Browser Extension is used with a Square Business account to easily offset a business's inventory carbon emissions.</>);
// let smrtnrllBrowserExtension = new Project("smrtnrll Browser Extension", "/projects/smrtnrllbrowserextension", "", "Dec 2020 - Oct 2021", "", 4, <>The smrtnrll browser extension is used by college students to get into classes that are currently full. Add it to your browser <a href="https://chrome.google.com/webstore/detail/smrtnrll/faoobmndgioamolfhbnkdegeolmmgnmj?hl=en&authuser=0">here</a>.</>);
// let bingUtilityBelt = new Project("Bing Utility Belt", "/projects/bingutilitybelt", "", "Nov 2021 - Jan 2022", "", 5, <>Browser extension I created to show how pervasive ads are in search engines by highlighting ads on Bing.</>);
// let totalCostBrowserExtensionIRSLogics = new Project("Total Cost Browser Extension", "/projects/totalcostbrowserextension", "", "Oct - Nov 2021", "", 6, <>Custom browser extension I coded so that payment information across 12 tabs could be displayed in a single location.</>);
// let multitabSearchBrowserExtensionIRSLogics = new Project("Multitab Search Browser Extension", "/projects/multitabsearch", "", "Oct 2021", "", 7, <>Custom browser extension I coded so that 12 different tabs could be searched across simultaneously.</>);
// let seoBrowserExtension = new Project("Site Checker Browser Extension", "/projects/seobrowserextension", "", "Nov 2021", "", 8, <>Browser extension I coded for the owner of <a href="site-checker.org">site-checker.org</a> to easily get SEO tips for any website.</>);
// let squarePOSHackathon = new Project("Square Build What's POS-sible Hackathon", "/projects/squarePOSHackathon", "", "Oct - Dec 2021", "", 9, <>I came up with the idea of a browser extension for Square Businesses and won the "Best Feedback" (on Square API) award.</>);
// let automatedWayToGetJSErrors = new Project("Automated Way to Get JS Errors", "/projects/automatedwaytogetjserrors", "", "Oct 2021", "", 10, <>Selenium script I wrote with Python to automatically retrieve javascript errors from a list of urls in a text file.</>);
// let automatingUsernameCheckProcess = new Project("Automating Username Check Process", "/projects/automatingusernamecheckprocess", "", "Oct 2021", "", 11, <>Desktop GUI I created using Python, tkinter, Selenium, and openpyxl that automatically filled out an excel sheet.</>);
// let shampooColorMixModel = new Project("Shampoo Color Mix Model", "/projects/shampoocolormixmodel", "", "Jun - Aug 2021", "", 12, <>Machine learning model I created why interning at P&G in R&D that predicted whether or not two shampoos would mix succesfully.</>);
// let autopayHealthcare = new Project("Autopay Healthcare", "/projects/autopayhealthcare", "", "Oct 2021", "", 13, <>I coded a Selenium script with Python to automatically pay a healthcare bill for someone whose website didn't have an autopay option.</>);
// let circumvent2FASelenium = new Project("Circumvent 2FA Selenium", "/projects/circumvent2FAselenium", "", "Sep 2021", "", 14, <>Selenium script I wrote with Python utilizing pickle and cookies to allow automation of websites with 2FA.</>);
// let fixingSeleniumTaxScript = new Project("Fixing Selenium Tax Script", "/projects/fixingseleniumtaxscript", "", "Sep 2021", "", 15, <>First freelancing gig I did which was fixing a selenium script with WebDriverWait and tweaking a portion using Beautiful Soup.</>);
// let germanImmigrationAutomation = new Project("German Immigration Automation", "/projects/germanimmigrationautomation", "", "Sep 2021", "", 16, <>Selenium script I coded with Python and the Gmail API to automatically get client an appointment with Immigration office.</>);
// let rsa = new Project("RSA", "/projects/rsa", "", "Nov - Dec 2021", "", 17, <>RSA implementation I coded in Python using Miller-Rabin and rendered on a webpage using Flask and HTML.</>);
// let smoothNumbers = new Project("Smooth Numbers", "/projects/smoothnumbers", "", "Nov 2021", "", 18, <>Python script I wrote to solve problems in computational number theory.</>);
// let walksatDPLL = new Project("WalkSAT and DPLL", "/projects/walksatdpll", "", "Sep - Oct 2021", "", 19, <>Java program I coded with two classmates to test both the WalkSAT and DPLL algorithms of determining satisfiability.</>);
// let tradingViewGraphAutomation = new Project("TradingView Graph Automation", "/projects/tradingviewgraphautomation", "", "Oct 2021", "", 20, <>Selenium script and GUI I wrote with python, openpyxl, tkinter, PIL, and Screenshot to screenshot market activity.</>);
// let pgFixing3DPrinter = new Project("P&G Fixing 3D Printer", "/projects/pgfixing3dprinter", "", "May - July 2020", "", 21, <>During my first internship with P&G, I worked at fixing a novel 3D printer using <a href="https://marlinfw.org/">Marlin firmware</a> and <a href="https://www.pronterface.com/">Pronterface</a>.</>);
// let airCharger = new Project("Air Charger", "/projects/aircharger", "", "Feb - July 2021", "", 22, <>Prototype for small, sleek iPhone magsafe battery pack.</>);
// let welcomeBackHack = new Project("Welcome Back Hack", "/projects/welcomebackhack", "", "Aug 2019", "", 23, <>Myself along with a few teammates won "Best in Creativity" at the 12-hour WelcomeBackHack Hackthon at CWRU.</>);
// let giveBackHackVol = new Project("GiveBackHack Vol & Tell", "/projects/givebackhackvol", "", "Sep 2019", "", 24, <>Myself along with a team of developers and businesspeople created a business model and a prototype for a volunteering website.</>);
// let pathfindingaiproject = new Project("Pathfinding AI Project", "/projects/pathfindingaiproject", "", "Apr 2021", "", 25, <>Java program I wrote with two teammates that navigated an AI bot through a maze with an enemy using A* search.</>);
// let inline = new Project("inLine", "/projects/inline", "", "Nov - Dec 2021", "", 26, <>Myself and one other person created the inLine database to help businesses manage waitlists.</>);
// let automatedResourceCollection = new Project("Automated Resource Collection", "/projects/automatedresourcecollection", "", "Apr 2021", "", 27, <>Java program determining optimal route for AI bot to take with forward state space planner using A* Search, STRIPS language.</>);
// let enhancedAutomatedResourceCollection = new Project("Enhanced Automated Resource Collection", "/projects/enhancedautomatedresourcecollection", "", "Apr 2021", "", 28, <>Java program determining optimal route for AI bot (which can create more AI bots) to take using A* Search, STRIPS language.</>);
// let automatedTacticalBattles = new Project("Automated Tactical Battles", "/projects/automatedtacticalbattles", "", "May 2021", "", 29, <>Java program that trained our AI bots on a Q-learning reinforcement learning algorithm to fight against enemy bots.</>);
// let iosExtensionUnicart = new Project("iOS Extension Unicart", "/projects/iosextensionunicart", "", "Nov 2021", "", 30, <>I turned my client's already existing Chrome extension into an iOS extension on the Apple App Store.</>);
// let smrtnrllSelenium = new Project("smrtnrll Selenium", "/projects/smrtnrllselenium", "", "Dec 2020 - Feb 2021", "", 31, <>The smrtnrll python selenium script is used by college students to get into classes that are currently full.</>);
// let pgAutomation = new Project("P&G Automation", "/projects/pgautomation", "", "May - Jul 2020, Jun - Aug 2021", "", 32, <>Throughout my two internships at P&G I did work beyond my assigned work by automating two of my coworkers excel spreasheets and more.</>);
// let computerVisionToMeasureRinsability = new Project("Computer Vision to Measure Rinsability", "/projects/pgshampoorinsability", "", "May - Jul 2020", "", 33, <>I measured rinsability of shampoos using computer vision and used various tools such as Python, Trackpy, and TracTrac.</>);
// let taskTimeRecorder = new Project("Task Time Recorder", "/projects/tasktimerecorder", "", "Sep - Dec 2020", "", 34, <>Google Sheet I created to track how I spent my time and how efficient I was at accomplishing tasks using Google Apps Script.</>);
// let imperativeInterpreter = new Project("Imperative Interpreter", "/projects/imperativeinterpreter", "", "Apr 2021", "", 35, <>Coded a C-like programming language with two teammates in Racket that could handle functions among other things.</>);






// let categoryArray = [];
// class Category{
//   constructor(name, shape){
//     this.name = name;
//     this.shape = shape;
//     categoryArray.push(this);
//   }
// }
// let projects = new Category("Projects", "Circle");
// let blogs = new Category("Blogs", "Square");
// let accounts = new Category("Accounts", "Horizontal Rectangle");
// let academics = new Category("Academics", "Semicircle");
//
// let tagArray = [];
// class Tag{
//   constructor(name, color, tagCategory){
//     this.name = name;
//     this.color = color;
//     this.tagCategory = tagCategory;
//     tagArray.push(this);
//   }
// }
// // gold - Special Tags
// let starred = new Tag("Starred", "", "Special Tags");
// // red -  Tech Tools
// let java = new Tag("Java", "", "Tech Tool");
// let javaFX = new Tag("JavaFX", "", "Tech Tool");
// let jUnitTesting = new Tag("JUnit", "", "Tech Tool");
// let javaScript = new Tag("JS", "", "Tech Tool");
// let html = new Tag("HTML", "", "Tech Tool");
// let css2 = new Tag("CSS", "", "Tech Tool");
// let bootstrap = new Tag("Bootstrap", "", "Tech Tool");
// let python = new Tag("Python", "", "Tech Tool");
// let pyGame = new Tag("PyGame", "", "Tech Tool");
// let flask = new Tag("Flask", "", "Tech Tool");
// let mySQL = new Tag("MySQL", "", "Tech Tool");
// let microsoftAzure = new Tag("Azure", "", "Tech Tool");
// let azureFunctions = new Tag("Azure Func", "", "Tech Tool");
// let bingAPI = new Tag("Bing API", "", "Tech Tool");
// let googleCloud = new Tag("Google Cloud", "", "Tech Tool");
// let googleCustomSearchEngine = new Tag("Google Custom Search Engine", "", "Tech Tool");
// let gmailAPI = new Tag("Gmail API", "", "Tech Tool");
// let firebase = new Tag("Firebase", "", "Tech Tool");
// let googleAppsScript = new Tag("Google Apps Script", "", "Tech Tool");
// let xCode = new Tag("XCode", "", "Tech Tool");
// let swift = new Tag("Swift", "", "Tech Tool");
// let selenium = new Tag("Selenium", "", "Tech Tool");
// let vba = new Tag("VBA", "", "Tech Tool");
// let racket = new Tag("Racket", "", "Tech Tool");
// let cSharp = new Tag("C#", "", "Tech Tool");
// // orange - Type of Project
// let commandLine = new Tag("Command Line", "", "Type of Project");
// let desktopApp = new Tag("Desktop App", "", "Type of Project");
// let mobileAppDevelopment = new Tag("Mobile App Development", "", "Type of Project");
// let webDevelopment = new Tag("Web Development", "", "Type of Project");
// let browserExtension = new Tag("Browser Extension", "", "Type of Project");
// // green - Discipline
// let backendDevelopment = new Tag("Backend Development", "", "Discipline");
// let databases = new Tag("Databases", "", "Discipline");
// let ai = new Tag("AI", "", "Discipline");
// let machineLearning = new Tag("Machine Learning", "", "Discipline");
// let naturalLanguageProcessing = new Tag("Natural Language Processing", "", "Discipline");
// let computerVision = new Tag("Computer Vision", "", "Discipline");
// let automation = new Tag("Automation", "", "Discipline");
// let webScraping = new Tag("Web Scraping", "", "Discipline");
// let hardware = new Tag("Hardware", "", "Discipline");
// let threeDPrinting = new Tag("3D Printing", "", "Discipline");
// let decentralization = new Tag("Decentralization", "", "Discipline");
// let sustainability = new Tag("Sustainability", "", "Discipline");
// let health = new Tag("Health", "", "Discipline");
// // blue - Reason
// let introToJava = new Tag("Intro to Java", "", "Reason");
// let dataStructures = new Tag("Data Structures", "", "Reason");
// let programmingLanguageConcepts = new Tag("Programming Language Concepts", "", "Reason");
// let introToAI = new Tag("Intro to AI", "", "Reason");
// let intoToDatabases = new Tag("Intro to Databases", "", "Reason");
// let softwareEngineering = new Tag("Software Engineering", "", "Reason");
// let numberTheory = new Tag("Number Theory", "", "Reason");
// let aiSequentialDesign = new Tag("AI: Sequential Design", "", "Reason");
// let computerSecurity = new Tag("Computer Security", "", "Reason");
// let pgInternships = new Tag("P&G Internships", "", "Reason");
// let personalProject = new Tag("Personal Project", "", "Reason");
// let hackathon = new Tag("Hackathon", "", "Reason");
// let freelance = new Tag("Freelance", "", "Reason");
// let club = new Tag("Club", "", "Reason");
// // purple - Time Period
// let highSchool = new Tag("High School", "", "Time Period");
// let college = new Tag("College", "", "Time Period");
// let collegeFreshman = new Tag("College Freshman", "", "Time Period");
// let sophomoreJunior = new Tag("College Sophomore/Junior", "", "Time Period");
// let collegeSenior = new Tag("College Senior", "", "Time Period");
