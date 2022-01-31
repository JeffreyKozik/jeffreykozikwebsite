import PropTypes from "prop-types"
import React from 'react'
import Select from 'react-select'

import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated();

import ProjectComponent from "./projectcomponent.js"

import * as homepage from './homepage.module.css';


let categoryArray = [];
class Category{
  constructor(name, shape){
    this.name = name;
    this.shape = shape;
    categoryArray.push(this);
  }
}
let projects = new Category("Projects", "Circle");
let blogs = new Category("Blogs", "Square");
let accounts = new Category("Accounts", "Horizontal Rectangle");
let academics = new Category("Academics", "Semicircle");

let tagArray = [];
class Tag{
  constructor(name, color, tagCategory){
    this.name = name;
    this.color = color;
    this.tagCategory = tagCategory;
    tagArray.push(this);
  }
}
// gold - Special Tags
let starred = new Tag("Starred", "", "Special Tags");
// red -  Tech Tools
let java = new Tag("Java", "", "Tech Tool");
let javaFX = new Tag("JavaFX", "", "Tech Tool");
let jUnitTesting = new Tag("JUnit", "", "Tech Tool");
let javaScript = new Tag("JS", "", "Tech Tool");
let html = new Tag("HTML", "", "Tech Tool");
let css2 = new Tag("CSS", "", "Tech Tool");
let bootstrap = new Tag("Bootstrap", "", "Tech Tool");
let python = new Tag("Python", "", "Tech Tool");
let pyGame = new Tag("PyGame", "", "Tech Tool");
let flask = new Tag("Flask", "", "Tech Tool");
let mySQL = new Tag("MySQL", "", "Tech Tool");
let microsoftAzure = new Tag("Azure", "", "Tech Tool");
let azureFunctions = new Tag("Azure Func", "", "Tech Tool");
let bingAPI = new Tag("Bing API", "", "Tech Tool");
let googleCloud = new Tag("Google Cloud", "", "Tech Tool");
let googleCustomSearchEngine = new Tag("Google Custom Search Engine", "", "Tech Tool");
let gmailAPI = new Tag("Gmail API", "", "Tech Tool");
let firebase = new Tag("Firebase", "", "Tech Tool");
let googleAppsScript = new Tag("Google Apps Script", "", "Tech Tool");
let xCode = new Tag("XCode", "", "Tech Tool");
let swift = new Tag("Swift", "", "Tech Tool");
let selenium = new Tag("Selenium", "", "Tech Tool");
let vba = new Tag("VBA", "", "Tech Tool");
let racket = new Tag("Racket", "", "Tech Tool");
let cSharp = new Tag("C#", "", "Tech Tool");
// orange - Type of Project
let commandLine = new Tag("Command Line", "", "Type of Project");
let desktopApp = new Tag("Desktop App", "", "Type of Project");
let mobileAppDevelopment = new Tag("Mobile App Development", "", "Type of Project");
let webDevelopment = new Tag("Web Development", "", "Type of Project");
let browserExtension = new Tag("Browser Extension", "", "Type of Project");
// green - Discipline
let backendDevelopment = new Tag("Backend Development", "", "Discipline");
let databases = new Tag("Databases", "", "Discipline");
let ai = new Tag("AI", "", "Discipline");
let machineLearning = new Tag("Machine Learning", "", "Discipline");
let naturalLanguageProcessing = new Tag("Natural Language Processing", "", "Discipline");
let computerVision = new Tag("Computer Vision", "", "Discipline");
let automation = new Tag("Automation", "", "Discipline");
let webScraping = new Tag("Web Scraping", "", "Discipline");
let hardware = new Tag("Hardware", "", "Discipline");
let threeDPrinting = new Tag("3D Printing", "", "Discipline");
let decentralization = new Tag("Decentralization", "", "Discipline");
let sustainability = new Tag("Sustainability", "", "Discipline");
let health = new Tag("Health", "", "Discipline");
// blue - Reason
let introToJava = new Tag("Intro to Java", "", "Reason");
let dataStructures = new Tag("Data Structures", "", "Reason");
let programmingLanguageConcepts = new Tag("Programming Language Concepts", "", "Reason");
let introToAI = new Tag("Intro to AI", "", "Reason");
let intoToDatabases = new Tag("Intro to Databases", "", "Reason");
let softwareEngineering = new Tag("Software Engineering", "", "Reason");
let numberTheory = new Tag("Number Theory", "", "Reason");
let aiSequentialDesign = new Tag("AI: Sequential Design", "", "Reason");
let computerSecurity = new Tag("Computer Security", "", "Reason");
let pgInternships = new Tag("P&G Internships", "", "Reason");
let personalProject = new Tag("Personal Project", "", "Reason");
let hackathon = new Tag("Hackathon", "", "Reason");
let freelance = new Tag("Freelance", "", "Reason");
let club = new Tag("Club", "", "Reason");
// purple - Time Period
let highSchool = new Tag("High School", "", "Time Period");
let college = new Tag("College", "", "Time Period");
let collegeFreshman = new Tag("College Freshman", "", "Time Period");
let sophomoreJunior = new Tag("College Sophomore/Junior", "", "Time Period");
let collegeSenior = new Tag("College Senior", "", "Time Period");

// let harryPotterGame = new Project("Harry Potter Game", "", "", "", "", "");
// let thomasRobertMalthusPresentation = new Project("Thomas Robert Malthus Presentation", "", "", "", "", "");
// let basketballGameSimulator = new Project("Basktball Game Simulator", "", "", "", "", "");
// let gomoku = new Project("Gomoku", "", "", "", "", "");
// let railyard = new Project("Railyard", "", "", "", "", "");
// let stringAndArrayManipulation = new Project("String and Array Manipulation", "", "", "", "", "");
// let sorting = new Project("Sorting", "", "", "", "", "");
// let hashtable = new Project("Hashtable", "", "", "", "", "");
// let huffmanEncoder = new Project("Huffman Encoder", "", "", "", "", "");
// let pingPongRallyTracker = new Project("Ping Pong Rally Tracker", "", "", "", "", "");
// let trickOrTag = new Project("Trick or Tag", "", "", "", "", "");
// let tedXCwru = new Project("TEDxCWRU", "", "", "", "", "");
// let designForAmerica = new Project("Design For America", "", "", "", "", "");

// function generateOptions(selectId, array){
//     let options = []
//     for(let i = 0; i < array.length; i++){
//         options.push({value: array[i].name, label: array[i].name});
//     }
//     return(
//         <Select closeMenuOnSelect={false} components={animatedComponents} isMulti options={options} multiple/>
//     )
// }

// <div className="homepage_container" id="selection_div">
//     {generateOptions("categories", categoryArray)}
//     {generateOptions("tags", tagArray)}
// </div>

// const listItems = projectsArray.map((projectElement, index) =>
//    <div key={index}><ProjectComponent style={bounceInDownStyles.bounceInDown} name={projectElement.name} link={projectElement.link} tags={projectElement.tags} startDate={projectElement.startDate} endDate={projectElement.endDate} imagePath={projectElement.imagePath} description={projectElement.description}/></div>
//  );

function HomePage ({nameArray}){
    let projectsArray = [];
    class Project{
      constructor(name, link, tags, startDate, endDate, imagePath, description){
        this.name = name;
        this.link = link;
        this.tags = tags;
        this.startDate = startDate;
        this.endDate = endDate;
        this.imagePath = imagePath;
        this.description = description;
        projectsArray.push(this);
      }
    }

    // sciquel
    // urbanearth
    // jeffreykozikwebsite
    // oneworldbrowserextension
    // givebackhackvol
    // smrtnrllbrowserextension
    // searchengineutilitybelt
    // totalcostbrowserextensionirslogics
    // multitabsearchbrowserextensionirslogics
    // seobrowserextension
    // 99 - 126 characters
    let sciquel = new Project("Sciquel", "/projects/sciquel", "", "Dec 2021 - Jan 2022", "", 0, <>Website that myself and one other person worked together on to code to make science more accessible to the average person.</>);
    let urbanEarth = new Project("Urban Earth", "/projects/urbanearth", "", "Oct - Dec 2021", "", 1, <>An iOS app that helps users track how often they use sustainable forms of transportation and motivates them to keep at it.</>);
    let jeffreykozikwebsite = new Project("Jeffrey Kozik Website", "/projects/jeffreykozikwebsite", "", "Dec 2021 - Jan 2022", "", 2, <>Portfolio website I coded with React and Gatsby and a number of react packages including material-ui and react-select.</>);
    let oneWorldBrowserExtension = new Project("1World Browser Extension", "/projects/1world", "", "Nov 2021 - Jan 2022", "", 3, <>The 1World Browser Extension is used with a Square Business account to easily offset a business's inventory carbon emissions.</>);
    let smrtnrllBrowserExtension = new Project("smrtnrll Browser Extension", "/projects/smrtnrllbrowserextension", "", "Dec 2020 - Oct 2021", "", 4, <>The smrtnrll browser extension is used by college students to get into classes that are currently full. Add it to your browser <a href="https://chrome.google.com/webstore/detail/smrtnrll/faoobmndgioamolfhbnkdegeolmmgnmj?hl=en&authuser=0">here</a>.</>);
    let bingUtilityBelt = new Project("Bing Utility Belt", "/projects/bingutilitybelt", "", "Nov 2021 - Jan 2022", "", 5, <>Browser extension I created to show how pervasive ads are in search engines by highlighting ads on Bing.</>);
    let totalCostBrowserExtensionIRSLogics = new Project("Total Cost Browser Extension", "/projects/totalcostbrowserextension", "", "Oct - Nov 2021", "", 6, <>Custom browser extension I coded so that payment information across 12 tabs could be displayed in a single location.</>);
    let multitabSearchBrowserExtensionIRSLogics = new Project("Multitab Search Browser Extension", "/projects/multitabsearch", "", "Oct 2021", "", 7, <>Custom browser extension I coded so that 12 different tabs could be searched across simultaneously.</>);
    let seoBrowserExtension = new Project("Site Checker Browser Extension", "/projects/seobrowserextension", "", "Nov 2021", "", 8, <>Browser extension I coded for the owner of <a href="site-checker.org">site-checker.org</a> to easily get SEO tips for any website.</>);
    let squarePOSHackathon = new Project("Square Build What's POS-sible Hackathon", "/projects/squarePOSHackathon", "", "Oct - Dec 2021", "", 9, <>I came up with the idea of a browser extension for Square Businesses and won the "Best Feedback" (on Square API) award.</>);
    let automatedWayToGetJSErrors = new Project("Automated Way to Get JS Errors", "/projects/automatedwaytogetjserrors", "", "Oct 2021", "", 10, <>Selenium script I wrote with Python to automatically retrieve javascript errors from a list of urls in a text file.</>);
    let automatingUsernameCheckProcess = new Project("Automating Username Check Process", "/projects/automatingusernamecheckprocess", "", "Oct 2021", "", 11, <>Desktop GUI I created using Python, tkinter, Selenium, and openpyxl that automatically filled out an excel sheet.</>);
    let shampooColorMixModel = new Project("Shampoo Color Mix Model", "/projects/shampoocolormixmodel", "", "Jun - Aug 2021", "", 12, <>Machine learning model I created why interning at P&G in R&D that predicted whether or not two shampoos would mix succesfully.</>);
    let autopayHealthcare = new Project("Autopay Healthcare", "/projects/autopayhealthcare", "", "Oct 2021", "", 13, <>I coded a Selenium script with Python to automatically pay a healthcare bill for someone whose website didn't have an autopay option.</>);
    let circumvent2FASelenium = new Project("Circumvent 2FA Selenium", "/projects/circumvent2FAselenium", "", "Sep 2021", "", 14, <>Selenium script I wrote with Python utilizing pickle and cookies to allow automation of websites with 2FA.</>);
    let fixingSeleniumTaxScript = new Project("Fixing Selenium Tax Script", "/projects/fixingseleniumtaxscript", "", "Sep 2021", "", 15, <>First freelancing gig I did which was fixing a selenium script with WebDriverWait and tweaking a portion using Beautiful Soup.</>);
    let germanImmigrationAutomation = new Project("German Immigration Automation", "/projects/germanimmigrationautomation", "", "Sep 2021", "", 16, <>Selenium script I coded with Python and the Gmail API to automatically get client an appointment with Immigration office.</>);
    let rsa = new Project("RSA", "/projects/rsa", "", "Nov - Dec 2021", "", 17, <>RSA implementation I coded in Python using Miller-Rabin and rendered on a webpage using Flask and HTML.</>);
    let smoothNumbers = new Project("Smooth Numbers", "/projects/smoothnumbers", "", "Nov 2021", "", 18, <>Python script I wrote to solve problems in computational number theory.</>);
    let walksatDPLL = new Project("WalkSAT and DPLL", "/projects/walksatdpll", "", "Sep - Oct 2021", "", 19, <>Java program I coded with two classmates to test both the WalkSAT and DPLL algorithms of determining satisfiability.</>);
    let tradingViewGraphAutomation = new Project("TradingView Graph Automation", "/projects/tradingviewgraphautomation", "", "Oct 2021", "", 20, <>Selenium script and GUI I wrote with python, openpyxl, tkinter, PIL, and Screenshot to screenshot market activity.</>);
    let pgFixing3DPrinter = new Project("P&G Fixing 3D Printer", "/projects/pgfixing3dprinter", "", "May - July 2020", "", 21, <>During my first internship with P&G, I worked at fixing a novel 3D printer using <a href="https://marlinfw.org/">Marlin firmware</a> and <a href="https://www.pronterface.com/">Pronterface</a>.</>);
    let airCharger = new Project("Air Charger", "/projects/aircharger", "", "Feb - July 2021", "", 22, <>Prototype for small, sleek iPhone magsafe battery pack.</>);
    let welcomeBackHack = new Project("Welcome Back Hack", "/projects/welcomebackhack", "", "Aug 2019", "", 23, <>Myself along with a few teammates won "Best in Creativity" at the 12-hour WelcomeBackHack Hackthon at CWRU.</>);
    let giveBackHackVol = new Project("GiveBackHack Vol & Tell", "/projects/givebackhackvol", "", "Sep 2019", "", 24, <>Myself along with a team of developers and businesspeople created a business model and a prototype for a volunteering website.</>);
    let pathfindingaiproject = new Project("Pathfinding AI Project", "/projects/pathfindingaiproject", "", "Apr 2021", "", 25, <>Java program I wrote with two teammates that navigated an AI bot through a maze with an enemy using A* search.</>);
    let inline = new Project("inLine", "/projects/inline", "", "Nov - Dec 2021", "", 26, <>Myself and one other person created the inLine database to help businesses manage waitlists.</>);
    let automatedResourceCollection = new Project("Automated Resource Collection", "/projects/automatedresourcecollection", "", "Apr 2021", "", 27, <>Java program determining optimal route for AI bot to take with forward state space planner using A* Search, STRIPS language.</>);
    let enhancedAutomatedResourceCollection = new Project("Enhanced Automated Resource Collection", "/projects/enhancedautomatedresourcecollection", "", "Apr 2021", "", 28, <>Java program determining optimal route for AI bot (which can create more AI bots) to take using A* Search, STRIPS language.</>);
    let automatedTacticalBattles = new Project("Automated Tactical Battles", "/projects/automatedtacticalbattles", "", "May 2021", "", 29, <>Java program that trained our AI bots on a Q-learning reinforcement learning algorithm to fight against enemy bots.</>);
    let iosExtensionUnicart = new Project("iOS Extension Unicart", "/projects/iosextensionunicart", "", "Nov 2021", "", 30, <>I turned my client's already existing Chrome extension into an iOS extension on the Apple App Store.</>);
    let smrtnrllSelenium = new Project("smrtnrll Selenium", "/projects/smrtnrllselenium", "", "Dec 2020 - Feb 2021", "", 31, <>The smrtnrll python selenium script is used by college students to get into classes that are currently full.</>);
    let pgAutomation = new Project("P&G Automation", "/projects/pgautomation", "", "May - Jul 2020, Jun - Aug 2021", "", 32, <>Throughout my two internships at P&G I did work beyond my assigned work by automating two of my coworkers excel spreasheets and more.</>);
    let computerVisionToMeasureRinsability = new Project("Computer Vision to Measure Rinsability", "/projects/pgshampoorinsability", "", "May - Jul 2020", "", 33, <>I measured rinsability of shampoos using computer vision and used various tools such as Python, Trackpy, and TracTrac.</>);
    let taskTimeRecorder = new Project("Task Time Recorder", "/projects/tasktimerecorder", "", "Sep - Dec 2020", "", 34, <>Google Sheet I created to track how I spent my time and how efficient I was at accomplishing tasks using Google Apps Script.</>);
    let imperativeInterpreter = new Project("Imperative Interpreter", "/projects/tasktimerecorder", "", "Apr 2021", "", 35, <>Coded a C-like programming language with two teammates in Racket that could handle functions among other things.</>);

    function listItemsFunction(nameArrayParam) {
        let listItems = []
        for(let i=0; i < projectsArray.length; i++){
            listItems.push("");
        }
        for(let i = 0; i <  projectsArray.length; i++){
            if((nameArrayParam.length == 0) || (nameArrayParam.includes(projectsArray[i].name))){
                listItems[nameArrayParam.indexOf(projectsArray[i].name)] = <div key={i}><ProjectComponent name={projectsArray[i].name} link={projectsArray[i].link} tags={projectsArray[i].tags} startDate={projectsArray[i].startDate} endDate={projectsArray[i].endDate} imagePath={projectsArray[i].imagePath} description={projectsArray[i].description}/></div>
            }
        }
        return listItems
    }
    return(
        <>
            <div>
                {listItemsFunction(nameArray)}
            </div>
        </>
    )
}

HomePage.propTypes = {
  nameArray: PropTypes.string
}

HomePage.defaultProps = {
  nameArray: []
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const HomePage = () => (
//     <>
        // <h1 id="jeffrey_kozik"> Jeffrey Kozik </h1>
//         <div class="container" id="selection_div">
//         </div>
//     </>
// )

export default HomePage;
