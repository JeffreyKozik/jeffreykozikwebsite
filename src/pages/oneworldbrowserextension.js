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
import Button from '@mui/material/Button';

let consumptionOptions = ["1", "2", "3"];
let supplyChainOptions = [
'Agriculture products2',
'Forestry products',
'Fish products2',
'Coal, lignite, peat3',
'Crude petroleum and natural gas & Metal ores',
'Other mining and quarrying products',
'Mining support services',
'Preserved meat and meat products',
'Processed and preserved fish, crustaceans, molluscs, fruit and vegetables',
'Vegetable and animal oils and fats',
'Dairy products',
'Grain mill products, starches and starch products',
'Bakery and farinaceous products',
'Other food products',
'Prepared animal feeds',
'Alcoholic beverages',
'Soft drinks',
'Tobacco products',
'Textiles',
'Wearing apparel',
'Leather products',
'Wood and wood products',
'Paper and paper products',
'Printing and recording services',
'Coke and refined petroleum products',
'Industrial gases, inorganics and fertilisers (all inorganic chemicals)',
'Petrochemicals',
'Dyestuffs, agro-chemicals',
'Paints, varnishes and similar coatings, printing ink and mastics',
'Soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations',
'Other chemical products',
'Basic pharmaceutical products and pharmaceutical preparations',
'Rubber and plastic products',
'Glass, refractory, clay, other porcelain and ceramic, stone and abrasive products',
'Manufacture of cement, lime, plaster and articles of concrete, cement and plaster',
'Basic iron and steel',
'Other basic metals and casting',
'Fabricated metal products, excl. machinery and equipment and weapons & ammunition',
'Weapons and ammunition',
'Computer, electronic and optical products',
'Electrical equipment',
'Machinery and equipment',
'Motor vehicles, trailers and semi-trailers',
'Ships and boats',
'Air and spacecraft and related machinery',
'Other transport equipment',
'Furniture',
'Other manufactured goods',
'Repair and maintenance of ships and boats',
'Repair and maintenance of aircraft and spacecraft',
'Rest of repair; Installation',
'Electricity, transmission and distribution',
'Gas distribution',
'Natural water; water treatment and supply services',
'Sewerage services; sewage sludge',
'Waste collection, treatment and disposal services; materials recovery services',
'Remediation services and other waste management services',
'Construction',
'Wholesale and retail trade and repair services of motor vehicles and motorcycles',
'Wholesale trade services, except of motor vehicles and motorcycles',
'Retail trade services, except of motor vehicles and motorcycles',
'Railway transport',
'Road transport',
'Water transport',
'Air transport',
'Warehousing and support services for transportation',
'Postal and courier services',
'Accommodation services',
'Food and beverage serving services',
'Publishing services',
'Motion picture, video and TV programme production services, sound recording & music publishing  & programming and broadcasting services',
'Telecommunications services',
'Computer programming, consultancy and related services',
'Information services',
'Financial services, except insurance and pension funding',
'Insurance, reinsurance and pension funding services, except compulsory social security & Pensions',
'Services auxiliary to financial services and insurance services',
'Real estate services, excluding on a fee or contract basis and imputed rent',
'Owner-Occupiers Housing Services',
'Real estate services on a fee or contract basis',
'Legal services',
'Accounting, bookkeeping and auditing services; tax consulting services',
'Services of head offices; management consulting services',
'Architectural and engineering services; technical testing and analysis services',
'Scientific research and development services',
'Advertising and market research services',
'Other professional, scientific and technical services',
'Veterinary services',
'Rental and leasing services',
'Employment services',
'Travel agency, tour operator and other reservation services and related services',
'Security and investigation services',
'Services to buildings and landscape',
'Office administrative, office support and other business support services',
'Public administration and defence services; compulsory social security services',
'Education services',
'Human health services',
'Social care services',
'Creative, arts and entertainment services',
'Libraries, archives, museums and other cultural services',
'Gambling and betting services',
'Sports services and amusement and recreation services',
'Services furnished by membership organisations',
'Repair services of computers and personal and household goods',
'Other personal services',
'Services of households as employers of domestic personnel'
];

function generateOptions(animatedComponents, optionsArray){
    let options = []
    for(let i = 0; i < optionsArray.length; i++){
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
                </TableBody>
              </Table>
            </TableContainer>
            <div class="one_world_container">
                <Button variant="contained" class="add_row_button" type="button"> Add Row </button>
            </div>
            <p class="description">
                The One World Browser Extension is used in conjunction with a Square Business account to
            </p>
        </body>
    </>
)

export default OneWorldBrowserExtension
