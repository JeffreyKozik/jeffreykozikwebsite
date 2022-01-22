import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './homepage.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import ProjectComponent from "./projectcomponent.js"

import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated();

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
let jUnitTesting = new Tag("JUnit Testing", "", "Tech Tool");
let javaScript = new Tag("JavaScript", "", "Tech Tool");
let html = new Tag("HTML", "", "Tech Tool");
let css = new Tag("CSS", "", "Tech Tool");
let bootstrap = new Tag("Bootstrap", "", "Tech Tool");
let python = new Tag("Python", "", "Tech Tool");
let pyGame = new Tag("PyGame", "", "Tech Tool");
let flask = new Tag("Flask", "", "Tech Tool");
let mySQL = new Tag("MySQL", "", "Tech Tool");
let microsoftAzure = new Tag("Microsoft Azure", "", "Tech Tool");
let azureFunctions = new Tag("Azure Functions", "", "Tech Tool");
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
let sciquel = new Project("Sciquel", "https://jeffreykozik.com/projects/sciquel", "", "Dec 2021 - Jan 2022", "", 0, <h3>
    Sciquel is a website that myself and one other person worked together on to code. It is a project that a number of
    Harvard Medical School students came up with to make science more accessible to the average person as academic papers
    are often very complicated to read and more often than not cost money to read."</h3>);
let urbanEarth = new Project("Urban Earth", "https://jeffreykozik.com/projects/urbanearth", "", "Oct - Dec 2021", "", 1, <h3>
    Urban Earth is a project myself and a partner worked on during Fall of 2021. It's an iOS app that helps users
    track how often they use sustainable forms of transportation and motivates them to keep at it.
</h3>);
let jeffreykozikwebsite = new Project("jeffreykozik.com", "https://jeffreykozik.com/projects/jeffreykozikwebsite", "", "Dec 2021 - Jan 2022", "", 2,  <h3>Portfolio website I coded with React and Gatsby and a number of react packages including
material-ui, react-select, font-awesome, and lodash.</h3>);
let oneWorldBrowserExtension = new Project("1World Browser Extension", "https://jeffreykozik.com/projects/1world", "", "Nov 2021 - Jan 2022", "", 3, <h3>
    The One World Browser Extension is used in conjunction with a Square Business account to easily offset a
    business's inventory carbon emissions. To see it in action feel free to enter data into the table below.
</h3>);
let smrtnrllBrowserExtension = new Project("smrtnrll Browser Extension", "https://jeffreykozik.com/projects/smrtnrllbrowserextension", "", "Dec 2020 - Oct 2021", "", 4, <h3>
    The smrtnrll browser extension is used by college students to get into classes that are currently full. Add it to your
    browser <a href="https://chrome.google.com/webstore/detail/smrtnrll/faoobmndgioamolfhbnkdegeolmmgnmj?hl=en&authuser=0" target="_blank" rel="noreferrer">here</a>.
</h3>);
let bingUtilityBelt = new Project("Bing Utility Belt", "https://jeffreykozik.com/projects/bingutilitybelt", "", "Nov 2021 - Jan 2022", "", 5, <h3>
    Browser extension I created to show how pervasive ads are in search engines by highlighting ads on Bing and keeping track of how many you see on each tab. Also
    ensures recent results.
</h3>);
let totalCostBrowserExtensionIRSLogics = new Project("Total Cost Browser Extension IRS Logics", "https://jeffreykozik.com/projects/totalcostbrowserextension", "", "Oct - Nov 2021", "", 6, <h3>
    Custom browser extension I coded so that payment information across 12 tabs could be displayed in a single location.
</h3>);
let multitabSearchBrowserExtensionIRSLogics = new Project("Multitab Search Browser Extension IRS Logics", "https://jeffreykozik.com/projects/multitabsearch", "", "Oct 2021", "", 7, <h3 className="page_subtitle">
    Custom browser extension I coded so that 12 different tabs could be searched across simultaneously.
</h3>);
let seoBrowserExtension = new Project("SEO Browser Extension", "https://jeffreykozik.com/projects/seobrowserextension", "", "Nov 2021", "", 8, <h3 className="page_subtitle">
    Browser extension I coded for the owner of <a href="site-checker.org" target="_blank" rel="noreferrer">site-checker.org</a> to easily get SEO tips for any website.
</h3>);

// let giveBackHackVol = new Project("GiveBackHack Vol & Tell", "/givebackhackvol", "", "", "", "../images/volhtml.png");
// let harryPotterGame = new Project("Harry Potter Game", "", "", "", "", "");
// let thomasRobertMalthusPresentation = new Project("Thomas Robert Malthus Presentation", "", "", "", "", "");
// let basketballGameSimulator = new Project("Basktball Game Simulator", "", "", "", "", "");
// let gomoku = new Project("Gomoku", "", "", "", "", "");
// let railyard = new Project("Railyard", "", "", "", "", "");
// let stringAndArrayManipulation = new Project("String and Array Manipulation", "", "", "", "", "");
// let sorting = new Project("Sorting", "", "", "", "", "");
// let hashtable = new Project("Hashtable", "", "", "", "", "");
// let huffmanEncoder = new Project("Huffman Encoder", "", "", "", "", "");
// let imperativeInterpreter = new Project("Imperative Interpreter", "", "", "", "", "");
// let aiProject2 = new Project("AI Project 2", "", "", "", "", "");
// let aiProject5 = new Project("AI Project 5", "", "", "", "", "");
// let aiProject6 = new Project("AI Project 6", "", "", "", "", "");
// let automatedResourceCollection = new Project("Automated Resource Collection", "", "", "", "", "");
// let smoothNumbers = new Project("Smooth Numbers", "", "", "", "", "");
// let rsa = new Project("RSA", "", "", "", "", "");
// let inline = new Project("inLine", "", "", "", "", "");
// let walksatDPLL = new Project("WalkSAT and DPLL", "", "", "", "", "");
// let shampooColorMixModel = new Project("Shampoo Color Mix Model", "", "", "", "", "");
// let pgAutomationBrowserExtension = new Project("P&G Automation Browser Extension", "", "", "", "", "");
// let pgSplittingCSVAutomation = new Project("P&G Splitting CSV Automation", "", "", "", "", "");
// let pgSortingCSVAutomation = new Project("P&G Sorting CSV Automation", "", "", "", "", "");
// let pgFixing3DPrinter = new Project("P&G Fixing 3D Printer", "", "", "", "", "");
// let computerVisionToMeasureRinsability = new Project("Computer Vision to Measure Rinsability", "", "", "", "", "");
// let smrtnrllSelenium = new Project("smrtnrll Selenium", "", "", "", "", "");
// let airCharger = new Project("Air Charger", "", "", "", "", "");
// let welcomeBackHack = new Project("Welcome Back Hack", "", "", "", "", "");
// let taskTimeRecorder = new Project("Task Time Recorder", "", "", "", "", "");
// let pingPongRallyTracker = new Project("Ping Pong Rally Tracker", "", "", "", "", "");
// let trickOrTag = new Project("Trick or Tag", "", "", "", "", "");
// let squarePOSHackathon = new Project("Square Build What's POS-sible Hackathon", "", "", "", "", "");
// let tedXCwru = new Project("TEDxCWRU", "", "", "", "", "");
// let designForAmerica = new Project("Design For America", "", "", "", "", "");
// let fixingSeleniumTaxScript = new Project("Fixing Selenium Tax Script", "", "", "", "", "");
// let germanImmigrationAutomation = new Project("German Immigration Automation", "", "", "", "", "");
// let circumvent2FASelenium = new Project("Circumvent 2FA Selenium", "", "", "", "", "");
// let automatingUsernameCheckProcessIreland = new Project("Automating Username Check Process Ireland", "", "", "", "", "");
// let automatedWayToGetJSErrors = new Project("Automated Way to Get JS Errors", "", "", "", "", "");
// let autopayHealthcare = new Project("Autopay Healthcare", "", "", "", "", "");
// let iosExtensionUnicart = new Project("iOS Extension Unicart", "", "", "", "", "");
// let tradingViewGraphAutomation = new Project("Trading View Graph Automation", "", "", "", "", "");

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

const listItems = projectsArray.map((projectElement, index) =>
   <div key={index}><ProjectComponent name={projectElement.name} link={projectElement.link} tags={projectElement.tags} startDate={projectElement.startDate} endDate={projectElement.endDate} imagePath={projectElement.imagePath}/></div>
 );

const HomePage = () => (
    <>
        <h1 id="jeffrey_kozik"> Jeffrey Kozik </h1>
        <div>
            {listItems}
        </div>
    </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const HomePage = () => (
//     <>
//         <h1 id="jeffrey_kozik"> Jeffrey Kozik </h1>
//         <div class="container" id="selection_div">
//         </div>
//     </>
// )

export default HomePage;
