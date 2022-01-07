import * as React from "react"
import demoVideo from "../images/1world.mp4";
import "../page_styling/oneworldbrowserextension.css"
import Seo from "../components/seo"

import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const animatedComponentsConsumption = makeAnimated();
const animatedComponentsSupplyChain = makeAnimated();

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField'

let consumptionOptions = ["1", "2", "3"];
let supplyChainOptions = ["1", "2", "3"];

function generateOptions(animatedComponents, optionsArray){
    let options = []
    for(let i = 0; i < array.length; i++){
        options.push({value: optionsArray[i], label: optionsArray[i]});
    }
    return(
        <Select closeMenuOnSelect={false} components={animatedComponents} options={options}/>
    )
}

const OneWorldBrowserExtension = () => (
    <>
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body>
            <Seo title="One World Browser Extension" />
            <h1 id="one_world_browser_extension_title"> One World Browser Extension </h1>
            <div class="one_world_container">
                <video controls id="one_world_video">
                    <source src={demoVideo} type="video/mp4"></source>
                </video>
            </div>
            <TableContainer component={Paper} class="one_world_container">
              <Table sx={{ minWidth: 650 }} aria-label="simple table" id="one_world_table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Cost</TableCell>
                    <TableCell align="right">Consumption</TableCell>
                    <TableCell align="right">Supply Chain</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><TextField id="standard-basic" placeholder="Apples..." variant="standard" /></TableCell>
                        <TableCell align="right"><TextField id="standard-basic" placeholder="$10..." variant="standard" /></TableCell>
                        <TableCell align="right">{generateOptions(animatedComponentsConsumption, consumptionOptions)}</TableCell>
                        <TableCell align="right">{generateOptions(animatedComponentsSupplyChain, supplyChainOptions)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <button type="button"> + </button>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <p class="description">
                The One World Browser Extension is used in conjunction with a Square Business account to
            </p>
        </body>
    </>
)

export default OneWorldBrowserExtension
