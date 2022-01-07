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

let consumptionOptions = []
let supplyChainOptions = []

const OneWorldBrowserExtension = () => (
    <>
        <Seo title="One World Browser Extension" />
        <h1 id="one_world_browser_extension_title"> One World Browser Extension </h1>
        <div class="one_world_container">
            <video controls id="one_world_video">
                <source src={demoVideo} type="video/mp4"></source>
            </video>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Cost</TableCell>
                <TableCell align="right">Consumption Category</TableCell>
                <TableCell align="right">Supply Chain Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><textarea placeholder="Apples..."> </textarea></TableCell>
                    <TableCell align="right"><textarea placeholder="$10..."> </textarea></TableCell>
                    <TableCell align="right"><Select closeMenuOnSelect={false} components={animatedComponentsConsumption} isMulti options={consumptionOptions} multiple/></TableCell>
                    <TableCell align="right"><Select closeMenuOnSelect={false} components={animatedComponentsSupplyChain} isMulti options={supplyChainOptions} multiple/></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><button type="button"> + </button></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <table>
            <tr>
                <th> Name </th>
                <th> Cost </th>
                <th> Consumption Category </th>
                <th> Supply Chain Category </th>
            </tr>
            <tr>
                <td> <textarea placeholder="Apples..."> </textarea> </td>
                <td> <textarea placeholder="$10..."> </textarea> </td>
                <td> <Select closeMenuOnSelect={false} components={animatedComponentsConsumption} isMulti options={consumptionOptions} multiple/> </td>
                <td> <Select closeMenuOnSelect={false} components={animatedComponentsSupplyChain} isMulti options={supplyChainOptions} multiple/> </td>
            </tr>
            <tr>
                <button type="button"> + </button>
            </tr>
        </table>
        <p>
            The One World Browser Extension is used in conjunction with a Square Business account to
        </p>
    </>
)

export default OneWorldBrowserExtension
