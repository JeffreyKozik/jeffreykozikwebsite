// import * as React from "react"
// import demoVideo from "../images/1world.mp4";
// import "../page_styling/oneworldbrowserextension.css"
// import Seo from "../components/seo"
//
// import Select from 'react-select'
// import makeAnimated from 'react-select/animated'
// const animatedComponentsConsumption = makeAnimated();
// const animatedComponentsSupplyChain = makeAnimated();
//
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
//
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button';
//
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
//
// import xtype from 'xtypejs'

import * as React from "react"

// <>
//     <head>
//         <meta name="viewport" content="initial-scale=1, width=device-width"/>
//     </head>
//     <body>
//         <Seo title="smrtnrll browser extension" />
//         <div class="one_world_container">
//             <h1 id="one_world_browser_extension_title">  </h1>
//             <h3 id="subtitle">
//                 The One World Browser Extension is used in conjunction with a Square Business account to easily offset a
//                 business's inventory carbon emissions. To see it in action feel free to enter data into the table below.
//             </h3>
//             <video controls id="one_world_video">
//                 <source src={demoVideo} type="video/mp4"></source>
//             </video>
//             <TableContainer component={Paper} id="one_world_table_container">
//               <Table sx={{ minWidth: 650 }} aria-label="simple table" id="one_world_table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell class="nameTable">Name</TableCell>
//                     <TableCell class="costTable" align="right">Cost</TableCell>
//                     <TableCell class="consumptionTable" align="right">Consumption</TableCell>
//                     <TableCell class="supplychainTable" align="right">Supply Chain</TableCell>
//                     <TableCell class="CO2Table" align="right">CO2</TableCell>
//                     <TableCell class="offsetcostTable" align="right">Offset Cost</TableCell>
//                     <TableCell class="deleteTable" align="right"></TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {this.state.rows.map((row) =>
//                         <TableRow>
//                             <TableCell class="nameTable"><TextField id="standard-basic" placeholder="Apples..." variant="standard" value={row[0]}/></TableCell>
//                             <TableCell class="costTable" align="right"><TextField id="standard-basic" placeholder="$10..." variant="standard" value={row[1]}/></TableCell>
//                             <TableCell class="consumptionTable" align="right">{this.generateConsumptionOptions}</TableCell>
//                             <TableCell class="supplychainTable" align="right">{this.generateSupplyChainOptions}</TableCell>
//                             <TableCell class="CO2Table" align="right"><div>{row[4]} kg</div></TableCell>
//                             <TableCell class="offsetcostTable" align="right"><div>{row[5]}</div></TableCell>
//                             <TableCell class="deleteTable" align="right"><FontAwesomeIcon icon={faTrashAlt} id="delete_row_button"/></TableCell>
//                         </TableRow>
//                     )}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//             <Button onClick={this.addRowFunction} variant="text" id="add_row_button"> Add Row </Button>
//             <Button onClick={this.offsetFunction} variant="text" id="offset_row_button"> Offset CO2 </Button>
//             <p class="description">
//                 The consumption categories and supply chain categories as well as the amount of CO2 emitted per dollar spent
//                 in each of those categories comes from <a href="https://www.gov.uk/government/statistics/uks-carbon-footprint">publicly available data from the UK government</a>.
//             </p>
//             <p class="description">
//                 Products are automatically categorized by using an Azure Function which utilizes the Bing API to search the name of the product
//                 and compare the words in the results with the words in the results of Bing searches for each of the categories via nltk and sklearn's TFIDF vectorization.
//                 Then the user is able to easily offset their carbon emissions using Patch. I've also tried approaches using Google Cloud's Google Cloud Function, Google Cloud Run (with Docker) and VADER.
//             </p>
//             <p class="description">
//                 Note: in the video, there's a calculation error that has been corrected now. In the video I say 1t = 100kg but in fact 1t = 1000kg.
//                 So really 0.01t should be offset in the video, not 0.13t. So offsetting $100 worth of apples (12.77 kg CO2) through the project chosen
//                 on Patch would cost $0.13 not $1.27.
//             </p>
//         </div>
//     </body>
// </>

const SmrtnrllBrowserExtension = () => (
    <div> Smrtnrll Browser Extension </div>
)

export default SmrtnrllBrowserExtension
