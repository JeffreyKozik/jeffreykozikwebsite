import * as React from "react"
// import demoVideo from "../images/1world.mp4";
import * as oneworld from "../../page_styling/oneworldbrowserextension.module.css"
import * as pages from "../../page_styling/pages.module.css"
import Seo from "../../components/seo"

import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import xtype from 'xtypejs'

import _ from 'lodash'

import {Helmet} from "react-helmet";

import {getEmissionsArray} from "../../data/emissions.js"

import $ from "jquery";

// import {useMediaQuery} from '../hooks/useMediaQuery';
//
// const styles = {
//   page_container: isIPAD => ({
//     marginLeft: isIPAD ? '2%' : '25%',
//     marginRight: isIPAD ? '2%' : '25%',
//   })
// };

class OneWorld extends React.Component {
    createData = (name, cost, submit_text, consumption, supply_chain, co2, offset_cost, row_num) => {
        return {name, cost, submit_text, consumption, supply_chain, co2, offset_cost, row_num}
    }

    printRows = () => {
        for(let i = 0; i < this.state.rows.length; i++){
            console.log("Row #" + this.state.rows[i].row_num + ": " + this.state.rows[i].name + " " +
                                                                      this.state.rows[i].cost + " " +
                                                                      this.state.rows[i].submit_text + " " +
                                                                      this.state.rows[i].consumption + " " +
                                                                      this.state.rows[i].supply_chain + " " +
                                                                      this.state.rows[i].co2.toString(10) + " " +
                                                                      this.state.rows[i].offset_cost.toString(10))
        }
    }

    addRowFunction = () => {
        let name = "";
        let cost = "";
        let submitText = "Submit";
        let consumptionSelect = null;
        let supplyChainSelect = null;
        let co2 = 0;
        let offset_cost = 0;
        let row_num = this.state.numRows;

        let nextRow = this.createData(name, cost, submitText, consumptionSelect, supplyChainSelect, co2, offset_cost, row_num);

        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        oldRowsClone.push(nextRow);

        this.setState({
            numRows : (this.state.numRows + 1),
            rows : Array.from(oldRowsClone)
        });

        setTimeout(() => {
            this.printRows();
        }, 5000)
    }

    deleteRowFunction = (row_num) => {
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);

        let removalIndex = 0;
        for(; removalIndex < oldRowsClone.length; removalIndex++){
            if(oldRowsClone[removalIndex].row_num == row_num){
                console.log("removalindex" + removalIndex);
                console.log("oldrowsclone" + oldRowsClone[removalIndex]);
                this.setState({
                    totalKG : this.state.totalKG - oldRowsClone[removalIndex].co2,
                    totalOffset : this.state.totalOffset - oldRowsClone[removalIndex].offset_cost
                });
                oldRowsClone.splice(removalIndex, 1);
                this.setState({
                    rows : Array.from(oldRowsClone)
                });
                break;
            }
        }

        setTimeout(() => {
            this.printRows();
        }, 5000)
    }

    nameChange = (newValue, row) => {
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        let i = 0;
        for(; i < oldRowsClone.length; i++){
            if(oldRowsClone[i].row_num == row){
                break;
            }
        }
        oldRowsClone[i].name = newValue;
        this.setState({
            rows : Array.from(oldRowsClone)
        });
    }
    costChange = (newValue, row) => {
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        let i = 0;
        for(; i < oldRowsClone.length; i++){
            if(oldRowsClone[i].row_num == row){
                break;
            }
        }
        oldRowsClone[i].cost = newValue;
        this.setState({
            rows : Array.from(oldRowsClone)
        });
    }
    submitTextChange = (newValue, row) => {
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        let i = 0;
        for(; i < oldRowsClone.length; i++){
            if(oldRowsClone[i].row_num == row){
                break;
            }
        }
        oldRowsClone[i].submit_text = newValue;
        this.setState({
            rows : Array.from(oldRowsClone)
        });
    }
    kgCO2perEuroSupply = (selectedOption) => {
        console.log("selected option label " + selectedOption.label);
        for(let i = 0; i < this.state.selectSupplyChainOptions.length; i++){
            console.log(i.toString() + " " + this.state.selectSupplyChainOptions[i].label);
            if(this.state.selectSupplyChainOptions[i].label == selectedOption.label){
                return(this.state.emissionsArray[i]["Total kg CO2e per euro"]);
            }
        }
        console.log("nothing found");
    }
    kgCO2perEuroConsumption = (selectedOption) => {
        console.log("selected option label " + selectedOption.label);
        for(let i = 0; i < (106 + this.state.selectConsumptionOptions.length); i++){
            console.log(i.toString() + " " + this.state.selectConsumptionOptions[i].label);
            if(this.state.selectConsumptionOptions[i].label == selectedOption.label){
                return(this.state.emissionsArray[i + 106]["Total kg CO2e per euro"]);
            }
        }
        console.log("nothing found");
    }
    supplyChainClickChange = (selectedOption, currentRow) => {
        console.log("SelectedOption", selectedOption);
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        let i = 0;
        for(; i < oldRowsClone.length; i++){
            if(oldRowsClone[i].row_num == currentRow){
                break;
            }
        }
        oldRowsClone[i].supply_chain = selectedOption;
        let oldKG = oldRowsClone[i].co2;
        let oldCost = oldRowsClone[i].offset_cost;
        let newCO2 = Number(Number(this.kgCO2perEuroSupply(selectedOption) * this.state.rows[i].cost * 0.886727).toFixed(2))
        let newOffset = Number(Number(newCO2 * 0.0085 * 1.15).toFixed(2));
        oldRowsClone[i].co2 = newCO2;
        oldRowsClone[i].offset_cost = newOffset;
        this.setState({
            totalKG : Number((this.state.totalKG - oldKG + newCO2).toFixed(2)),
            totalOffset : Number((this.state.totalOffset - oldCost + newOffset).toFixed(2)),
            rows : Array.from(oldRowsClone)
        });
    }
    consumptionClickChange = (selectedOption, currentRow) => {
        console.log("SelectedOption", selectedOption);
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        oldRowsClone[currentRow].consumption = selectedOption;
        let i = 0;
        for(; i < oldRowsClone.length; i++){
            if(oldRowsClone[i].row_num == currentRow){
                break;
            }
        }
        let oldKG = oldRowsClone[i].co2;
        let oldCost = oldRowsClone[i].offset_cost;
        let newCO2 = Number(Number(this.kgCO2perEuroConsumption(selectedOption) * this.state.rows[i].cost * 0.886727).toFixed(2))
        let newOffset = Number(Number(newCO2 * 0.0085 * 1.15).toFixed(2));
        oldRowsClone[i].co2 = newCO2;
        oldRowsClone[i].offset_cost = newOffset;
        this.setState({
            totalKG : Number((this.state.totalKG - oldKG + newCO2).toFixed(2)),
            totalOffset : Number((this.state.totalOffset - oldCost + newOffset).toFixed(2)),
            rows : Array.from(oldRowsClone)
        });
    }
    supplyChainChange = (selectedOption, currentRow) => {
        console.log("SelectedOption", selectedOption);
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        let i = 0;
        for(; i < oldRowsClone.length; i++){
            if(oldRowsClone[i].row_num == currentRow){
                break;
            }
        }
        oldRowsClone[i].supply_chain = selectedOption;
        this.setState({
            rows : Array.from(oldRowsClone)
        });
    }
    consumptionChange = (newValue, currentRow) => {
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        let i = 0;
        for(; i < oldRowsClone.length; i++){
            if(oldRowsClone[i].row_num == currentRow){
                break;
            }
        }
        oldRowsClone[i].consumption = newValue;
        this.setState({
            rows : Array.from(oldRowsClone)
        });
    }
    co2Change = (newValue, currentRow) => {
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        let i = 0;
        for(; i < oldRowsClone.length; i++){
            if(oldRowsClone[i].row_num == currentRow){
                break;
            }
        }
        oldRowsClone[i].co2 = newValue;
        this.setState({
            rows : Array.from(oldRowsClone)
        });
    }
    offsetChange = (newValue, currentRow) => {
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        let i = 0;
        for(; i < oldRowsClone.length; i++){
            if(oldRowsClone[i].row_num == currentRow){
                break;
            }
        }
        oldRowsClone[i].offset_cost = newValue;
        this.setState({
            rows : Array.from(oldRowsClone)
        });
    }

    submitFunction = (row) => {
        if(row == "total"){
            for(let i = 0; i < this.state.rows.length; i++){
                this.predictCategory(this.state.rows[i].row_num);
            }
        }else{
            let i = 0;
            for(; i < this.state.rows.length; i++){
                if(this.state.rows[i].row_num == row){
                    break;
                }
            }
            this.predictCategory(i);
        }
    }

    predictCategory = (rowParam) => {
        let row = 0;
        for(; row < this.state.rows.length; row++){
            if(this.state.rows[row].row_num == rowParam){
                break;
            }
        }
        this.submitTextChange("Loading", row);
        let oldRows = Array.from(this.state.rows);
        let oldRowsClone = _.cloneDeep(oldRows);
        let oldOffset = oldRowsClone[row].offset_cost;
        let oldCO2 = oldRowsClone[row].co2;

        let nameOfProduct = this.state.rows[row].name;
        let costOfProduct = this.state.rows[row].cost.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
        let euroSpent = 0.886727 * costOfProduct;

        let consumption_category = ""
        let supply_chain_category = ""
        let total_co2 = 0
        let total_offset = 0
        const api_url = 'https://oneworldsquareextensionfunctionapp.azurewebsites.net/api/OneWorldSquareExtensionFunction/?code=/tw7J4uFrU4tRm9HcP1pMI2kiUaoou8ZT0GjMWljPZIv3zoGRle8uQ==';
        fetch(api_url, {
            method: 'POST',
            body: JSON.stringify({
                'whatToOffset': nameOfProduct
            })
        })
        .then(response => response.json())
        .then(json => {
                // console.log(json['what_to_offset_consumption_category']);
                consumption_category = json['what_to_offset_consumption_category'].toString()
                // console.log(json['what_to_offset_supply_chain_category']);
                supply_chain_category = json['what_to_offset_supply_chain_category'].toString()
                // console.log(json['what_to_offset_consumption_kgCO2perEuro']);
                total_co2 += parseFloat(json['what_to_offset_consumption_kgCO2perEuro'])
                // console.log(json['what_to_offset_supply_chain_kgCO2perEuro']);
                total_co2 += parseFloat(json['what_to_offset_consumption_kgCO2perEuro'])
                total_co2 = Number(total_co2 * euroSpent).toFixed(2)
                total_offset = Number(total_co2 * 0.0085 * 1.15).toFixed(2)
                // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
                consumption_category = consumption_category.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[1234567890]/g, "")
                supply_chain_category = supply_chain_category.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[1234567890]/g, "")
                console.log("consumption_category " + consumption_category)
                console.log("supply_chain_category " + supply_chain_category)
                console.log("total_co2 " + total_co2)
                console.log("total_offset " + total_offset)
        });

        let timeLeft = 1;
        let timerID = setInterval(() => {
            let timeLeftPercent = (100*(timeLeft/20)).toFixed(0)
            this.submitTextChange("Loading " + timeLeftPercent + "%", row);
            timeLeft++;

            if(!_.isEqual(consumption_category, "") && !_.isEqual(supply_chain_category, "")){
                setTimeout(() => {
                    this.submitTextChange("Submit", row);

                    this.consumptionChange({value: consumption_category, label: consumption_category}, row);
                    this.supplyChainChange({value: supply_chain_category, label: supply_chain_category}, row);
                    this.co2Change(Number(total_co2), row);
                    this.offsetChange(Number(total_offset), row);
                    this.setState({
                        totalKG : Number((this.state.totalKG + Number(total_co2) - oldCO2).toFixed(2)),
                        totalOffset : Number((this.state.totalOffset + Number(total_offset) - oldOffset).toFixed(2))
                    });
                }, 2000)
                clearInterval(timerID);
            }
        }, 1000);
    }

    offsetFunction = () => {
        let urlAppend = (this.state.totalKG*1000).toFixed(0);
        window.open("https://checkout.patch.io/che_prod_9d820f15d0b93ec15fc23694efb70726?amount=" + urlAppend, "_blank")
    }

    constructor(props){
        super(props);

        const animatedComponentsConsumption = makeAnimated();
        const animatedComponentsSupplyChain = makeAnimated();

        let consumptionOptions = [
        '1.1.1.1 Rice',
        '1.1.1.2 Bread',
        '1.1.1.3 Other breads and cereals',
        '1.1.2 Pasta products',
        '1.1.3.1 Buns crispbread and biscuits',
        '1.1.3.2 Cakes and puddings',
        '1.1.4 Pastry (savoury)',
        '1.1.5 Beef (fresh, chilled or frozen)',
        '1.1.6 Pork (fresh, chilled or frozen)',
        '1.1.7 Lamb (fresh, chilled or frozen)',
        '1.1.8 Poultry (fresh, chilled or frozen)',
        '1.1.9 Bacon and ham',
        '1.1.10.1 Sausages',
        '1.1.10.2 Offal, pate etc',
        '1.1.10.3 Other preserved or processed meat and meat preparations',
        '1.1.10.4 Other fresh, chilled or frozen edible meat',
        '1.1.11.1 Fish (fresh, chilled or frozen)',
        '1.1.11.2 Seafood dried, smoked or salted fish',
        '1.1.11.3 Other preserved or processed fish and seafood',
        '1.1.12.1 Whole milk',
        '1.1.12.2 Low fat milk',
        '1.1.12.3 Preserved milk',
        '1.1.13 Cheese and curd',
        '1.1.14 Eggs',
        '1.1.15.1 Other milk products',
        '1.1.15.2 Yoghurt',
        '1.1.16 Butter',
        '1.1.17 Margarine and other vegetable fats and peanut butter',
        '1.1.18.1 Olive oil',
        '1.1.18.2 Edible oils and other animal fats',
        '1.1.19.1 Citrus fuits',
        '1.1.19.2 Bananas',
        '1.1.19.3 Apples',
        '1.1.19.4 Pears',
        '1.1.19.5 Stone fruits',
        '1.1.19.6 Berries',
        '1.1.20 Other fresh chilled or frozen fruits',
        '1.1.21 Dried fruit and nuts',
        '1.1.22 Preserved fruit and fruit based products',
        '1.1.23.1 Leaf and stem vegetables',
        '1.1.23.2 Cabbages',
        '1.1.23.3 Vegetables grown for their fruit',
        '1.1.23.4 Root crops non starchy bulbs and mushrooms',
        '1.1.24 Dried vegetables',
        '1.1.25 Other prepared or processed vegetables',
        '1.1.26 Potatoes',
        '1.1.27 Other tubers and products of tuber vegetables',
        '1.1.28.1 Sugar',
        '1.1.28.2 Other sugar products',
        '1.1.29 Jams and marmalades',
        '1.1.30 Chocolate',
        '1.1.31 Confectionery products',
        '1.1.32 Edible ices and ice cream',
        '1.1.33.1 Sauces condiments',
        '1.1.33.2 Bakers yeast dessert preparations soups',
        '1.1.33.3 Salt spices herbs and other food products',
        '1.2.1 Coffee',
        '1.2.2 Tea',
        '1.2.3 Cocoa and powdered chocolate',
        '1.2.4 Fruit and vegetable juices',
        '1.2.5 Mineral or spring waters',
        '1.2.6 Soft drinks',
        '2.1.1 Spirits and liqueurs',
        '2.1.2.1 Wine from grape or other fruit',
        '2.1.2.2 Fortified wine',
        '2.1.2.3 Champagne and sparkling wines',
        '2.1.3.1 Beer and lager',
        '2.1.3.2 Ciders and Perry',
        '2.1.4 Alcopops',
        '2.2.1 Cigarettes',
        '2.2.2.1 Cigars',
        '2.2.2.2 Other tobacco',
        '3.1.1 Mens outer garments',
        '3.1.2 Mens under garments',
        '3.1.3 Womens outer garments',
        '3.1.4 Womens under garments',
        '3.1.5 Boys outer garments',
        '3.1.6 Girls outer garments',
        '3.1.7 Infants outer garments',
        '3.1.8 Childrens under garments',
        '3.1.9.1 Mens accessories',
        '3.1.9.2 Womens accessories',
        '3.1.9.3 Childrens accessories',
        '3.1.9.4 Protective head gear',
        '3.1.10 Haberashery clothing materials and clothing hire',
        '3.1.11.1 Dry cleaners and dyeing',
        '3.1.11.2 Laundry laundrettes',
        '3.2.1 Footwear for men',
        '3.2.2 Footwear for women',
        '3.2.3 Footwear for children and infants',
        '3.2.4 Repair and hire of footwear',
        '4.1.1 Actual rentals',
        '4.1.2 Imputed rent',
        '4.2.1 Central heating repairs',
        '4.2.2 House maintenance',
        '4.2.3 Paint wallpaper timber',
        '4.2.4 Equipment hire small materials',
        '4.3.1 Water charges',
        '4.3.2 Other regular househing payments incl service charge for rent',
        '4.3.3 Refuse collection including skip hire',
        '4.4.1 Electricity',
        '4.4.2 Gas',
        '4.4.3.1 Coal and coke',
        '4.4.3.2 Oil for central heating',
        '4.4.3.3 Paraffin weed peat hot water etc',
        '5.1.1.1 Furniture',
        '5.1.1.2 Fancy/decorative goods',
        '5.1.1.3 Garden furniture',
        '5.1.2.1 Soft floor coverings',
        '5.1.2.2 Hard floor coverings',
        '5.2.1 Bedroom textiles including duvets and pillows',
        '5.2.2 Other household textiles including cushions towells curtains',
        '5.3.1 Gas cookers',
        '5.3.2 Electric cookers combined gas/electric cookers',
        '5.3.3 Clothes washing machines and clothes drying machines',
        '5.3.4 Refridgerators freezers and fridge freezers',
        '5.3.5 Other major electrical appliances e.g. dish washers microaves vacuum cleaners heaters',
        '5.3.6 Fire extinguishers',
        '5.3.7 Small electric household appliances',
        '5.3.8 Spare parts for appliances and repairs',
        '5.3.9 Rental/hire of major hhold appliances',
        '5.4.1 Glassware china pottery cutlery and silverware',
        '5.4.2 Kitchen and domestic utensils',
        '5.4.3 Repair of glassware tableware and household utensils',
        '5.4.4 Storage and other durable household articles',
        '5.5.1 Electrical tools',
        '5.5.2 Garden tools equipment and accessories',
        '5.5.3 Small tools',
        '5.5.4 Door electrical and other fittings',
        '5.5.5 Electrical consumables',
        '5.6.1.1 Detergents washing-up liquid washing powder',
        '5.6.1.2 Disinfectants polishes other cleaning materials some pest controls',
        '5.6.2.1 Kitchen disposibles',
        '5.6.2.2 Household hardwear and appliances matches',
        '5.6.2.3 Kitchen gloves cloths etc',
        '5.6.2.4 Pins needles tape measures nails nuts and bolts',
        '5.6.3.1 Domestic services including cleaners gardeners au pairs',
        '5.6.3.2 Carpet cleaning ironing service and window cleaner',
        '5.6.3.3 Hire/repairof household furniture and furnishings',
        '6.1.1.1 NHS prescription charges and payments',
        '6.1.1.2 Medicines and medical goods (not NHS)',
        '6.1.1.3 Other medical products',
        '6.1.1.4 Non-optical appliances and equipment',
        '6.1.2.1 Purchse of spectacles lenses prescription sunglasses',
        '6.1.2.2 Accessories/repairs to spectacles/lenses',
        '6.2.1.1 NHS medical optical dental and medical auxillary services',
        '6.2.1.2 Private medical optical dental and auxillary services',
        '6.2.1.3 Other services',
        '6.2.2 In-patient hospital services',
        '7.1.1.1 New cars/vans outright purchase',
        '7.1.1.2 New cars/vans loan/HP purcase',
        '7.1.2.1 Secondhand cars/vans outright purchase',
        '7.1.2.2 Secondhand cars/vans loan/HP purcase',
        '7.1.3.1 Outright purchase of new or secondhand motorcycles',
        '7.1.3.2 Loan/HP purchase of new or secondhand motor cycles',
        '7.1.3.3 Purchase of bicycles and other vehicles',
        '7.2.1.1 Can/van accessories and fittings',
        '7.2.1.2 Car/van spare parts',
        '7.2.1.3 Motorcycle accessories and spare parts',
        '7.2.1.4 Bicycle accessories and spare parts',
        '7.2.2.1 Petrol',
        '7.2.2.2 Diesel oil',
        '7.2.2.3 Other motor oils',
        '7.2.3.1 Car of van repairs servicing and other work',
        '7.2.3.2 Motor cycle repairs and servicing',
        '7.2.4.1 Motoing organisation subscription',
        '7.2.4.2 Garage rent other costs car washing',
        '7.2.4.3 Parking fees tolls and permits',
        '7.2.4.4 Driving lessons',
        '7.2.4.5 Anti-freeze battery water cleaning materials',
        '7.3.1.1 Rail and tube season tickets',
        '7.3.1.2 Rail and tube other than season tickets',
        '7.3.2.1 Bus and coach season tickets',
        '7.3.2.2 Bus and coach other than season tickets',
        '7.3.3.1 Combined fares other than season tickets',
        '7.3.3.2 Combined fares season tickets',
        '7.3.4.1 Air fares within UK',
        '7.3.4.2 Air fares inernational',
        '7.3.4.3 School travel',
        '7.3.4.4 Taxis and hired cars with drivers',
        '7.3.4.5 Other personal travel and transport services',
        '7.3.4.6 Hire of self drive cars vans bicycles',
        '7.3.4.7 Car leasing',
        '7.3.4.8 Water travel ferries and season tickets',
        '8.1 Postal services',
        '8.2.1 Telephone purchase',
        '8.2.2 Mobile phone purchase',
        '8.2.3 Answering machine fax machine purchase',
        '8.3.1 Telephone account',
        '8.3.2 Telephone coin and other payments',
        '8.3.3 Mobile phone account',
        '8.3.4 Mobile phone othr apyments',
        '8.4 Internet subscription fees',
        '9.1.1.1 Audio equipment CD players incl. in car',
        '9.1.1.2 Audio accessories e.g. tapes CDs headphones',
        '9.1.2.1 Purchase of TV and digital decoder',
        '9.1.2.2 Satellite dish purchase and installation',
        '9.1.2.3 Cable TV connection',
        '9.1.2.4 Video recorder',
        '9.1.2.5 DVD player/recorder',
        '9.1.2.6 Blank pre-recorded video cassettes and DVDs',
        '9.1.2.7 Personal computers printers and calculators',
        '9.1.2.8 Spare parts for TV video audio',
        '9.1.2.9 Repare of AV',
        '9.1.3.1 Photographic and cine equipment',
        '9.1.3.2 Camera films',
        '9.1.3.3 Optical instruments binoculars telescopes',
        '9.2.1 Purchase of boats trailers and horses',
        '9.2.2 Purchase of caravans mobile homes',
        '9.2.3 Accessoris for boats horses caravans and motorhomes',
        '9.2.4 Musical instruments',
        '9.2.5 Major durables for indoor recreation',
        '9.2.6 Maintenance and repair or other major durables for recreation and culture',
        '9.2.7 Purchase of motor caravan - outright purchase',
        '9.2.8 Purchase of motor caravan  - loan/HP',
        '9.3.1 Games toys and hobbies',
        '9.3.2.1 Computer software and games cartridges',
        '9.3.2.2 Console computer games',
        '9.3.3 Equipment for sport camping and open-air recreation',
        '9.3.4.1 BBQ and swings',
        '9.3.4.2 Plants flowers seeds fertiliers insecticides',
        '9.3.4.3 Garden decorative',
        '9.3.4.4 Artificial flowers pot pourri',
        '9.3.5.1 Pet food',
        '9.3.5.2 Pet purchase and accessories',
        '9.3.5.3 Vetinary and other services for pets',
        '9.4.1.1 Spectator sports - admission charges',
        '9.4.1.2 Participant sports',
        '9.4.1.3 Subscriotions to sorts and social clubs',
        '9.4.1.4 Hire of equipment for sport',
        '9.4.1.5 Leisure class fees',
        '9.4.2.1 Cinemas',
        '9.4.2.2 Live entertainment theatre concerts shows',
        '9.4.2.3 Museums zoological gardens theme parks',
        '9.4.3.1 TV licences',
        '9.4.3.2 Satellite subscriptions',
        '9.4.3.3 Rent for TV/Satellite/VCR',
        '9.4.3.4 Cable subscriptions',
        '9.4.3.5 TV slot meter payments',
        '9.4.3.6 Video cassette and CD hire',
        '9.4.4.1 Admissions to clubs dances. Discos bingo',
        '9.4.4.2 Social events and gatherings',
        '9.4.4.3 Subscriptions for leisure activities',
        '9.4.5 Development of film photos',
        '9.4.6.1 Football pools stakes',
        '9.4.6.2 Bingo stakes',
        '9.4.6.3 Lottery',
        '9.4.6.4 Bookmaker tote other betting stakes',
        '9.5.1 Books',
        '9.5.2 Diaries address books cards etc',
        '9.5.3 Cards calendars posters and other printed matter',
        '9.5.4 Newspapers',
        '9.5.5 Magazines and periodicals',
        '10.1 Education',
        '10.2 Educational trips',
        '11.1.1 Restaurant and café meals',
        '11.1.2 Alcoholic beverages ',
        '11.1.3 Takeaway meals',
        '11.1.4.1 Hot food and cold food',
        '11.1.4.2 Confectionery',
        '11.1.4.3 Ice cream',
        '11.1.4.4 Soft drink',
        '11.1.5 Contract catering',
        '11.1.6.1 School meals',
        '11.1.6.2 Meals bought in workplace',
        '11.2.1 Holiday in the UK',
        '11.2.2 Holiday abroad',
        '11.2.3 Room hire',
        '12.1.1 Hairdressing beauty treatement',
        '12.1.2 Toilet paper',
        '12.1.3.1 Toiletries',
        '12.1.3.2 Bar of soap liquid soap shower gel',
        '12.1.3.3 Toilet requisites',
        '12.1.4 Baby toiletries and accessories',
        '12.1.5.1 Hair products',
        '12.1.5.2 Cosmetics and related accessories',
        '12.1.5.3 Electrical appliances for personal care',
        '12.2.1.1 Jewellery clocks and watches and other personal effects',
        '12.2.1.2 Leather and travel goods',
        '12.2.1.3 Sunglasses',
        '12.2.2.1 Baby equipment',
        '12.2.2.2 Prams pram accessories',
        '12.2.2.3 Repairs to personal goods',
        '12.3.1.1 Residential homes',
        '12.3.1.2 Home help',
        '12.3.1.3 Nursery creche playschools',
        '12.3.1.4 Child care payments',
        '12.4.1.1 Structure insurance',
        '12.4.1.2 Contents insurance',
        '12.4.1.3 Insurance for household items',
        '12.4.2 Medical insurance premiums',
        '12.4.3.1 Vehicle insurance',
        '12.4.3.2 Boat insurance',
        '12.4.4 Non package holiday other travel insurance',
        '12.5.1.1 Moving and storage of furniture',
        '12.5.1.2 Property transaction - purchase and sale',
        '12.5.1.3 Property transaction - sale only',
        '12.5.1.4 Property transaction - purchase only',
        '12.5.1.5 Property transaction - other payments',
        '12.5.2.1 Bank building society fees',
        '12.5.2.2 Bank and post office counter charges',
        '12.5.2.3 Credit card fees',
        '12.5.3.1 Other professional fees',
        '12.5.3.2 Legal fees',
        '12.5.3.3 Funeral expenses'
        ];
        let selectConsumptionOptions = []
        for(let i = 0; i < consumptionOptions.length; i++){
            selectConsumptionOptions.push({value: consumptionOptions[i].replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[1234567890]/g, ""),
                                           label: consumptionOptions[i].replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[1234567890]/g, "")});
        }
        let supplyChainOptions = [
        'Agriculture products',
        'Forestry products',
        'Fish products',
        'Coal, lignite, peat',
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
        'Services of households as employers of domestic personnel',
        ];
        let selectSupplyChainOptions = []
        for(let i = 0; i < supplyChainOptions.length; i++){
            selectSupplyChainOptions.push({value: supplyChainOptions[i].replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[1234567890]/g, ""),
                                           label: supplyChainOptions[i].replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[1234567890]/g, "")});
        }

        let emissionsArray = [{
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Agriculture products2",
          "Total kg CO2e per euro": 3.1
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Forestry products",
          "Total kg CO2e per euro": 0.75
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Fish products2",
          "Total kg CO2e per euro": 0.93
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Coal, lignite, peat3",
          "Total kg CO2e per euro": 2.97
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Crude petroleum and natural gas &amp; Metal ores",
          "Total kg CO2e per euro": 0.66
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Other mining and quarrying products",
          "Total kg CO2e per euro": 0.81
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Mining support services",
          "Total kg CO2e per euro": 0.24
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Preserved meat and meat products",
          "Total kg CO2e per euro": 1.4
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Processed and preserved fish, crustaceans, molluscs, fruit and vegetables",
          "Total kg CO2e per euro": 0.97
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Vegetable and animal oils and fats",
          "Total kg CO2e per euro": 0.99
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Dairy products",
          "Total kg CO2e per euro": 1.82
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Grain mill products, starches and starch products",
          "Total kg CO2e per euro": 1.33
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Bakery and farinaceous products",
          "Total kg CO2e per euro": 0.78
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Other food products",
          "Total kg CO2e per euro": 0.96
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Prepared animal feeds",
          "Total kg CO2e per euro": 1.27
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Alcoholic beverages",
          "Total kg CO2e per euro": 0.74
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Soft drinks",
          "Total kg CO2e per euro": 0.6
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Tobacco products",
          "Total kg CO2e per euro": 0.56
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Textiles",
          "Total kg CO2e per euro": 0.96
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Wearing apparel",
          "Total kg CO2e per euro": 0.68
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Leather products",
          "Total kg CO2e per euro": 0.54
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Wood and wood products",
          "Total kg CO2e per euro": 1.02
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Paper and paper products",
          "Total kg CO2e per euro": 1.18
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Printing and recording services",
          "Total kg CO2e per euro": 0.58
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Coke and refined petroleum products",
          "Total kg CO2e per euro": 1.69
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Industrial gases, inorganics and fertilisers (all inorganic chemicals) - 20.11/13/15",
          "Total kg CO2e per euro": 0.72
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Petrochemicals - 20.14/16/17/60",
          "Total kg CO2e per euro": 0.69
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Dyestuffs, agro-chemicals - 20.12/20",
          "Total kg CO2e per euro": 1.02
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Paints, varnishes and similar coatings, printing ink and mastics",
          "Total kg CO2e per euro": 1.66
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations",
          "Total kg CO2e per euro": 1.44
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Other chemical products",
          "Total kg CO2e per euro": 1.57
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Basic pharmaceutical products and pharmaceutical preparations",
          "Total kg CO2e per euro": 0.35
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Rubber and plastic products",
          "Total kg CO2e per euro": 0.96
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Glass, refractory, clay, other porcelain and ceramic, stone and abrasive products - 23.1-4/7-9",
          "Total kg CO2e per euro": 2.19
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Manufacture of cement, lime, plaster and articles of concrete, cement and plaster",
          "Total kg CO2e per euro": 1.27
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Basic iron and steel",
          "Total kg CO2e per euro": 2.59
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Other basic metals and casting",
          "Total kg CO2e per euro": 1.56
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Fabricated metal products, excl. machinery and equipment and weapons &amp; ammunition - 25.1-3/25.5-9",
          "Total kg CO2e per euro": 0.57
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Weapons and ammunition",
          "Total kg CO2e per euro": 0.68
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Computer, electronic and optical products",
          "Total kg CO2e per euro": 0.41
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Electrical equipment",
          "Total kg CO2e per euro": 0.62
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Machinery and equipment n.e.c.",
          "Total kg CO2e per euro": 0.56
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Motor vehicles, trailers and semi-trailers",
          "Total kg CO2e per euro": 0.62
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Ships and boats",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Air and spacecraft and related machinery",
          "Total kg CO2e per euro": 0.59
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Other transport equipment - 30.2/4/9",
          "Total kg CO2e per euro": 0.49
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Furniture",
          "Total kg CO2e per euro": 0.64
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Other manufactured goods",
          "Total kg CO2e per euro": 0.45
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Repair and maintenance of ships and boats",
          "Total kg CO2e per euro": 0.69
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Repair and maintenance of aircraft and spacecraft",
          "Total kg CO2e per euro": 0.56
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Rest of repair; Installation - 33.11-14/17/19/20",
          "Total kg CO2e per euro": 0.41
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Electricity, transmission and distribution",
          "Total kg CO2e per euro": 3.62
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Gas distribution3",
          "Total kg CO2e per euro": 2.01
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Natural water; water treatment and supply services",
          "Total kg CO2e per euro": 0.57
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Sewerage services; sewage sludge",
          "Total kg CO2e per euro": 0.81
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Waste collection, treatment and disposal services; materials recovery services",
          "Total kg CO2e per euro": 1.36
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Remediation services and other waste management services",
          "Total kg CO2e per euro": 0.27
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Construction4",
          "Total kg CO2e per euro": 0.37
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Wholesale and retail trade and repair services of motor vehicles and motorcycles",
          "Total kg CO2e per euro": 0.3
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Wholesale trade services, except of motor vehicles and motorcycles",
          "Total kg CO2e per euro": 0.35
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Retail trade services, except of motor vehicles and motorcycles",
          "Total kg CO2e per euro": 0.31
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Railway transport5",
          "Total kg CO2e per euro": 0.56
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Road transport5",
          "Total kg CO2e per euro": 0.78
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Water transport5",
          "Total kg CO2e per euro": 1.9
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Air transport5",
          "Total kg CO2e per euro": 3
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Warehousing and support services for transportation",
          "Total kg CO2e per euro": 0.28
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Postal and courier services",
          "Total kg CO2e per euro": 0.35
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Accommodation services",
          "Total kg CO2e per euro": 0.45
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Food and beverage serving services",
          "Total kg CO2e per euro": 0.4
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Publishing services",
          "Total kg CO2e per euro": 0.23
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Motion picture, video and TV programme production services, sound recording &amp; music publishing  &amp; programming and broadcasting services",
          "Total kg CO2e per euro": 0.22
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Telecommunications services",
          "Total kg CO2e per euro": 0.32
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Computer programming, consultancy and related services",
          "Total kg CO2e per euro": 0.18
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Information services",
          "Total kg CO2e per euro": 0.18
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Financial services, except insurance and pension funding",
          "Total kg CO2e per euro": 0.15
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Insurance, reinsurance and pension funding services, except compulsory social security &amp; Pensions",
          "Total kg CO2e per euro": 0.18
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Services auxiliary to financial services and insurance services",
          "Total kg CO2e per euro": 0.15
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Real estate services, excluding on a fee or contract basis and imputed rent",
          "Total kg CO2e per euro": 0.13
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Owner-Occupiers' Housing Services",
          "Total kg CO2e per euro": 0.11
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Real estate services on a fee or contract basis",
          "Total kg CO2e per euro": 0.09
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Legal services",
          "Total kg CO2e per euro": 0.1
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Accounting, bookkeeping and auditing services; tax consulting services",
          "Total kg CO2e per euro": 0.12
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Services of head offices; management consulting services",
          "Total kg CO2e per euro": 0.17
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Architectural and engineering services; technical testing and analysis services",
          "Total kg CO2e per euro": 0.18
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Scientific research and development services",
          "Total kg CO2e per euro": 0.24
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Advertising and market research services",
          "Total kg CO2e per euro": 0.2
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Other professional, scientific and technical services",
          "Total kg CO2e per euro": 0.16
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Veterinary services",
          "Total kg CO2e per euro": 0.2
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Rental and leasing services",
          "Total kg CO2e per euro": 0.23
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Employment services",
          "Total kg CO2e per euro": 0.14
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Travel agency, tour operator and other reservation services and related services",
          "Total kg CO2e per euro": 0.16
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Security and investigation services",
          "Total kg CO2e per euro": 0.24
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Services to buildings and landscape",
          "Total kg CO2e per euro": 0.25
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Office administrative, office support and other business support services",
          "Total kg CO2e per euro": 0.18
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Public administration and defence services; compulsory social security services",
          "Total kg CO2e per euro": 0.27
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Education services",
          "Total kg CO2e per euro": 0.17
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Human health services",
          "Total kg CO2e per euro": 0.25
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Social care services",
          "Total kg CO2e per euro": 0.29
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Creative, arts and entertainment services",
          "Total kg CO2e per euro": 0.24
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Libraries, archives, museums and other cultural services",
          "Total kg CO2e per euro": 0.25
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Gambling and betting services",
          "Total kg CO2e per euro": 0.17
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Sports services and amusement and recreation services",
          "Total kg CO2e per euro": 0.29
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Services furnished by membership organisations",
          "Total kg CO2e per euro": 0.15
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Repair services of computers and personal and household goods",
          "Total kg CO2e per euro": 0.22
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Other personal services",
          "Total kg CO2e per euro": 0.27
        }, {
          "Bing Snippets": "",
          "Consumption": "FALSE",
          "Product category": "Services of households as employers of domestic personnel",
          "Total kg CO2e per euro": 0.04
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.1.1 Rice",
          "Total kg CO2e per euro": 0.154
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.1.2 Bread",
          "Total kg CO2e per euro": 0.154
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.1.3 Other breads and cereals",
          "Total kg CO2e per euro": 0.154
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.2 Pasta products",
          "Total kg CO2e per euro": 0.154
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.3.1 Buns, crispbread and biscuits",
          "Total kg CO2e per euro": 0.676
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.3.2 Cakes and puddings",
          "Total kg CO2e per euro": 0.676
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.4 Pastry (savoury)",
          "Total kg CO2e per euro": 1.134
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.5 Beef (fresh, chilled or frozen)",
          "Total kg CO2e per euro": 2.471
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.6 Pork (fresh, chilled or frozen)",
          "Total kg CO2e per euro": 2.471
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.7 Lamb (fresh, chilled or frozen)",
          "Total kg CO2e per euro": 2.471
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.8 Poultry (fresh, chilled or frozen)",
          "Total kg CO2e per euro": 2.471
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.9 Bacon and ham",
          "Total kg CO2e per euro": 2.471
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.10.1 Sausages",
          "Total kg CO2e per euro": 2.471
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.10.2 Offal, pate etc",
          "Total kg CO2e per euro": 2.471
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.10.3 Other preserved or processed meat and meat preparations",
          "Total kg CO2e per euro": 2.471
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.10.4 Other fresh, chilled or frozen edible meat",
          "Total kg CO2e per euro": 2.471
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.11.1 Fish (fresh, chilled or frozen)",
          "Total kg CO2e per euro": 0.17
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.11.2 Seafood, dried, smoked or salted fish",
          "Total kg CO2e per euro": 0.17
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.11.3 Other preserved or processed fish and seafood",
          "Total kg CO2e per euro": 0.17
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.12.1 Whole milk",
          "Total kg CO2e per euro": 0.454
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.12.2 Low fat milk",
          "Total kg CO2e per euro": 0.454
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.12.3 Preserved milk",
          "Total kg CO2e per euro": 0.454
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.13 Cheese and curd",
          "Total kg CO2e per euro": 0.454
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.14 Eggs",
          "Total kg CO2e per euro": 0.454
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.15.1 Other milk products",
          "Total kg CO2e per euro": 0.454
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.15.2 Yoghurt",
          "Total kg CO2e per euro": 0.454
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.16 Butter",
          "Total kg CO2e per euro": 0.454
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.17 Margarine and other vegetable fats and peanut butter",
          "Total kg CO2e per euro": 0.454
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.18.1 Olive oil",
          "Total kg CO2e per euro": 0.643
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.18.2 Edible oils and other animal fats",
          "Total kg CO2e per euro": 0.643
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.19.1 Citrus fuits",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.19.2 Bananas",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.19.3 Apples",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.19.4 Pears",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.19.5 Stone fruits",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.19.6 Berries",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.20 Other fresh, chilled or frozen fruits",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.21 Dried fruit and nuts",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.22 Preserved fruit and fruit based products",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.23.1 Leaf and stem vegetables",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.23.2 Cabbages",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.23.3 Vegetables grown for their fruit",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.23.4 Root crops, non starchy bulbs and mushrooms",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.24 Dried vegetables",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.25 Other prepared or processed vegetables",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.26 Potatoes",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.27 Other tubers and products of tuber vegetables",
          "Total kg CO2e per euro": 0.072
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.28.1 Sugar",
          "Total kg CO2e per euro": 0.458
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.28.2 Other sugar products",
          "Total kg CO2e per euro": 0.458
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.29 Jams and marmalades",
          "Total kg CO2e per euro": 0.458
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.30 Chocolate",
          "Total kg CO2e per euro": 0.458
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.31 Confectionery products",
          "Total kg CO2e per euro": 0.458
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.32 Edible ices and ice cream",
          "Total kg CO2e per euro": 0.458
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.33.1 Sauces, condiments",
          "Total kg CO2e per euro": 0.458
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.33.2 Bakers yeast, dessert preparations, soups",
          "Total kg CO2e per euro": 0.458
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.1.33.3 Salt, spices, herbs and other food products",
          "Total kg CO2e per euro": 0.458
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.2.1 Coffee",
          "Total kg CO2e per euro": 0.397
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.2.2 Tea",
          "Total kg CO2e per euro": 0.397
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.2.3 Cocoa and powdered chocolate",
          "Total kg CO2e per euro": 0.397
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.2.4 Fruit and vegetable juices",
          "Total kg CO2e per euro": 0.208
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.2.5 Mineral or spring waters",
          "Total kg CO2e per euro": 0.397
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "1.2.6 Soft drinks",
          "Total kg CO2e per euro": 0.261
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.1.1 Spirits and liqueurs",
          "Total kg CO2e per euro": 0.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.1.2.1 Wine from grape or other fruit",
          "Total kg CO2e per euro": 0.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.1.2.2 Fortified wine",
          "Total kg CO2e per euro": 0.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.1.2.3 Champagne and sparkling wines",
          "Total kg CO2e per euro": 0.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.1.3.1 Beer and lager",
          "Total kg CO2e per euro": 0.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.1.3.2 Ciders and Perry",
          "Total kg CO2e per euro": 0.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.1.4 Alcopops",
          "Total kg CO2e per euro": 0.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.2.1 Cigarettes",
          "Total kg CO2e per euro": 0.061
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.2.2.1 Cigars",
          "Total kg CO2e per euro": 0.061
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "2.2.2.2 Other tobacco",
          "Total kg CO2e per euro": 0.061
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.1 Mens outer garments",
          "Total kg CO2e per euro": 0.278
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.2 Mens under garments",
          "Total kg CO2e per euro": 0.278
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.3 Womens outer garments",
          "Total kg CO2e per euro": 0.278
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.4 Womens under garments",
          "Total kg CO2e per euro": 0.278
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.5 Boys outer garments",
          "Total kg CO2e per euro": 0.278
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.6 Girls outer garments",
          "Total kg CO2e per euro": 0.278
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.7 Infants outer garments",
          "Total kg CO2e per euro": 0.278
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.8 Childrens under garments",
          "Total kg CO2e per euro": 0.278
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.9.1 Mens accessories",
          "Total kg CO2e per euro": 0.126
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.9.2 Womens accessories",
          "Total kg CO2e per euro": 0.126
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.9.3 Childrens accessories",
          "Total kg CO2e per euro": 0.126
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.9.4 Protective head gear",
          "Total kg CO2e per euro": 0.126
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.10 Haberashery, clothing materials and clothing hire",
          "Total kg CO2e per euro": 3.071
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.11.1 Dry cleaners and dyeing",
          "Total kg CO2e per euro": 0.192
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.1.11.2 Laundry, laundrettes",
          "Total kg CO2e per euro": 0.192
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.2.1 Footwear for men",
          "Total kg CO2e per euro": 0.311
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.2.2 Footwear for women",
          "Total kg CO2e per euro": 0.311
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.2.3 Footwear for children and infants",
          "Total kg CO2e per euro": 0.311
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "3.2.4 Repair and hire of footwear",
          "Total kg CO2e per euro": 0.416
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.1.1 Actual rentals",
          "Total kg CO2e per euro": 0.162
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.1.2 Imputed rent",
          "Total kg CO2e per euro": 3.993
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.2.1 Central heating repairs",
          "Total kg CO2e per euro": 0.001
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.2.2 House maintenance",
          "Total kg CO2e per euro": 0.099
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.2.3 Paint, wallpaper, timber",
          "Total kg CO2e per euro": 0.088
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.2.4 Equipment hire, small materials",
          "Total kg CO2e per euro": 0.099
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.3.1 Water charges",
          "Total kg CO2e per euro": 0.31
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.3.2 Other regular househing payments incl service charge for rent",
          "Total kg CO2e per euro": 0.31
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.3.3 Refuse collection including skip hire",
          "Total kg CO2e per euro": 0.31
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.4.1 Electricity",
          "Total kg CO2e per euro": 2.249
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.4.2 Gas",
          "Total kg CO2e per euro": 6.966
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.4.3.1 Coal and coke",
          "Total kg CO2e per euro": 0.528
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.4.3.2 Oil for central heating",
          "Total kg CO2e per euro": 0.528
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "4.4.3.3 Paraffin, weed, peat, hot water etc",
          "Total kg CO2e per euro": 0.528
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.1.1.1 Furniture",
          "Total kg CO2e per euro": 0.183
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.1.1.2 Fancy/decorative goods",
          "Total kg CO2e per euro": 0.436
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.1.1.3 Garden furniture",
          "Total kg CO2e per euro": 0.183
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.1.2.1 Soft floor coverings",
          "Total kg CO2e per euro": 0.263
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.1.2.2 Hard floor coverings",
          "Total kg CO2e per euro": 0.011
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.2.1 Bedroom textiles including duvets and pillows",
          "Total kg CO2e per euro": 0.979
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.2.2 Other household textiles, including cushions,towells, curtains",
          "Total kg CO2e per euro": 0.979
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.3.1 Gas cookers",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.3.2 Electric cookers, combined gas/electric cookers",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.3.3 Clothes washing machines and clothes drying machines",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.3.4 Refridgerators, freezers and fridge freezers",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.3.5 Other major electrical appliances e.g. dish washers, microaves, vacuum cleaners, heaters",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.3.6 Fire extinguishers",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.3.7 Small electric household appliances",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.3.8 Spare parts for appliances and repairs",
          "Total kg CO2e per euro": 0.357
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.3.9 Rental/hire of major hhold appliances",
          "Total kg CO2e per euro": 0.357
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.4.1 Glassware, china, pottery, cutlery and silverware",
          "Total kg CO2e per euro": 1.239
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.4.2 Kitchen and domestic utensils",
          "Total kg CO2e per euro": 1.239
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.4.3 Repair of glassware, tableware and household utensils",
          "Total kg CO2e per euro": 0
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.4.4 Storage and other durable household articles",
          "Total kg CO2e per euro": 1.239
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.5.1 Electrical tools",
          "Total kg CO2e per euro": 0.116
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.5.2 Garden tools, equipment and accessories",
          "Total kg CO2e per euro": 0.116
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.5.3 Small tools",
          "Total kg CO2e per euro": 0.116
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.5.4 Door, electrical and other fittings",
          "Total kg CO2e per euro": 0.116
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.5.5 Electrical consumables",
          "Total kg CO2e per euro": 0.116
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.6.1.1 Detergents, washing-up liquid, washing powder",
          "Total kg CO2e per euro": 0.083
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.6.1.2 Disinfectants, polishes, other cleaning materials, some pest controls",
          "Total kg CO2e per euro": 0.083
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.6.2.1 Kitchen disposibles",
          "Total kg CO2e per euro": 0.091
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.6.2.2 Household hardwear and appliances, matches",
          "Total kg CO2e per euro": 0.091
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.6.2.3 Kitchen gloves, cloths etc",
          "Total kg CO2e per euro": 0.091
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.6.2.4 Pins, needles, tape measures, nails, nuts and bolts",
          "Total kg CO2e per euro": 0.083
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.6.3.1 Domestic services including cleaners, gardeners, au pairs",
          "Total kg CO2e per euro": 0.031
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.6.3.2 Carpet cleaning , ironing service and window cleaner",
          "Total kg CO2e per euro": 0.031
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "5.6.3.3 Hire/repairof household furniture and furnishings",
          "Total kg CO2e per euro": 0.031
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.1.1.1 NHS prescription charges and payments",
          "Total kg CO2e per euro": 2.548
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.1.1.2 Medicines and medical goods (not NHS)",
          "Total kg CO2e per euro": 2.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.1.1.3 Other medical products",
          "Total kg CO2e per euro": 2.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.1.1.4 Non-optical appliances and equipment",
          "Total kg CO2e per euro": 2.08
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.1.2.1 Purchse of spectacles, lenses, prescription sunglasses",
          "Total kg CO2e per euro": 0.255
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.1.2.2 Accessories/repairs to spectacles/lenses",
          "Total kg CO2e per euro": 0.255
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.2.1.1 NHS medical, optical, dental and medical auxillary services",
          "Total kg CO2e per euro": 0.297
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.2.1.2 Private medical, optical, dental and auxillary services",
          "Total kg CO2e per euro": 0.297
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.2.1.3 Other services",
          "Total kg CO2e per euro": 0
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "6.2.2 In-patient hospital services",
          "Total kg CO2e per euro": 0.297
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.1.1.1 New cars/vans outright purchase",
          "Total kg CO2e per euro": 0.26
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.1.1.2 New cars/vans loan/HP purcase",
          "Total kg CO2e per euro": 0.26
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.1.2.1 Secondhand cars/vans outright purchase",
          "Total kg CO2e per euro": 0.26
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.1.2.2 Secondhand cars/vans loan/HP purcase",
          "Total kg CO2e per euro": 0.26
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.1.3.1 Outright purchase of new or secondhand motorcycles",
          "Total kg CO2e per euro": 0.197
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.1.3.2 Loan/HP purchase of new or secondhand motor cycles",
          "Total kg CO2e per euro": 0.197
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.1.3.3 Purchase of bicycles and other vehicles",
          "Total kg CO2e per euro": 0.197
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.1.1 Can/van accessories and fittings",
          "Total kg CO2e per euro": 0.111
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.1.2 Car/van spare parts",
          "Total kg CO2e per euro": 0.111
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.1.3 Motorcycle accessories and spare parts",
          "Total kg CO2e per euro": 0.111
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.1.4 Bicycle accessories and spare parts",
          "Total kg CO2e per euro": 0.111
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.2.1 Petrol",
          "Total kg CO2e per euro": 4.39
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.2.2 Diesel oil",
          "Total kg CO2e per euro": 0.918
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.2.3 Other motor oils",
          "Total kg CO2e per euro": 0.918
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.3.1 Car of van repairs, servicing and other work",
          "Total kg CO2e per euro": 0.561
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.3.2 Motor cycle repairs and servicing",
          "Total kg CO2e per euro": 0.561
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.4.1 Motoing organisation subscription",
          "Total kg CO2e per euro": 0.491
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.4.2 Garage rent other costs, car washing",
          "Total kg CO2e per euro": 0.491
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.4.3 Parking fees, tolls and permits",
          "Total kg CO2e per euro": 0.491
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.4.4 Driving lessons",
          "Total kg CO2e per euro": 0.512
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.2.4.5 Anti-freeze, battery water, cleaning materials",
          "Total kg CO2e per euro": 0.498
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.1.1 Rail and tube season tickets",
          "Total kg CO2e per euro": 0.505
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.1.2 Rail and tube other than season tickets",
          "Total kg CO2e per euro": 0.505
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.2.1 Bus and coach season tickets",
          "Total kg CO2e per euro": 0.705
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.2.2 Bus and coach other than season tickets",
          "Total kg CO2e per euro": 0.705
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.3.1 Combined fares other than season tickets",
          "Total kg CO2e per euro": 9.496
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.3.2 Combined fares season tickets",
          "Total kg CO2e per euro": 9.496
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.4.1 Air fares within UK",
          "Total kg CO2e per euro": 0.895
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.4.2 Air fares inernational",
          "Total kg CO2e per euro": 0.895
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.4.3 School travel",
          "Total kg CO2e per euro": 1.191
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.4.4 Taxis and hired cars with drivers",
          "Total kg CO2e per euro": 0.705
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.4.5 Other personal travel and transport services",
          "Total kg CO2e per euro": 10.371
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.4.6 Hire of self drive cars, vans, bicycles",
          "Total kg CO2e per euro": 0.705
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.4.7 Car leasing",
          "Total kg CO2e per euro": 0.705
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "7.3.4.8 Water travel, ferries and season tickets",
          "Total kg CO2e per euro": 8.325
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "8.1 Postal services",
          "Total kg CO2e per euro": 0.481
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "8.2.1 Telephone purchase",
          "Total kg CO2e per euro": 0.283
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "8.2.2 Mobile phone purchase",
          "Total kg CO2e per euro": 0.283
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "8.2.3 Answering machine, fax machine purchase",
          "Total kg CO2e per euro": 0.283
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "8.3.1 Telephone account",
          "Total kg CO2e per euro": 0.174
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "8.3.2 Telephone coin and other payments",
          "Total kg CO2e per euro": 0.174
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "8.3.3 Mobile phone account",
          "Total kg CO2e per euro": 0.174
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "8.3.4 Mobile phone othr apyments",
          "Total kg CO2e per euro": 0.174
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "8.4 Internet subscription fees",
          "Total kg CO2e per euro": 0.174
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.1.1 Audio equipment, CD players incl. in car",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.1.2 Audio accessories e.g. tapes, CDs, headphones",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.2.1 Purchase of TV and digital decoder",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.2.2 Satellite dish purchase and installation",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.2.3 Cable TV connection",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.2.4 Video recorder",
          "Total kg CO2e per euro": 0
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.2.5 DVD player/recorder",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.2.6 Blank, pre-recorded video cassettes and DVDs",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.2.7 Personal computers, printers and calculators",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.2.8 Spare parts for TV, video, audio",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.2.9 Repare of AV",
          "Total kg CO2e per euro": 0.76
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.3.1 Photographic and cine equipment",
          "Total kg CO2e per euro": 0.948
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.3.2 Camera films",
          "Total kg CO2e per euro": 0.948
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.1.3.3 Optical instruments, binoculars, telescopes",
          "Total kg CO2e per euro": 0.948
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.2.1 Purchase of boats, trailers and horses",
          "Total kg CO2e per euro": 1.602
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.2.2 Purchase of caravans, mobile homes",
          "Total kg CO2e per euro": 0.999
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.2.3 Accessoris for boats, horses, caravans and motorhomes",
          "Total kg CO2e per euro": 0.999
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.2.4 Musical instruments",
          "Total kg CO2e per euro": 0.03
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.2.5 Major durables for indoor recreation",
          "Total kg CO2e per euro": 0.999
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.2.6 Maintenance and repair or other major durables for recreation and culture",
          "Total kg CO2e per euro": 0.999
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.2.7 Purchase of motor caravan - outright purchase",
          "Total kg CO2e per euro": 0.999
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.2.8 Purchase of motor caravan  - loan/HP",
          "Total kg CO2e per euro": 0
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.1 Games, toys and hobbies",
          "Total kg CO2e per euro": 0.432
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.2.1 Computer software and games cartridges",
          "Total kg CO2e per euro": 1.502
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.2.2 Console computer games",
          "Total kg CO2e per euro": 1.502
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.3 Equipment for sport, camping and open-air recreation",
          "Total kg CO2e per euro": 0.432
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.4.1 BBQ and swings",
          "Total kg CO2e per euro": 0.41
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.4.2 Plants, flowers, seeds, fertiliers, insecticides",
          "Total kg CO2e per euro": 1.199
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.4.3 Garden decorative",
          "Total kg CO2e per euro": 0.406
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.4.4 Artificial flowers, pot pourri",
          "Total kg CO2e per euro": 0.406
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.5.1 Pet food",
          "Total kg CO2e per euro": 1.246
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.5.2 Pet purchase and accessories",
          "Total kg CO2e per euro": 0.92
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.3.5.3 Vetinary and other services for pets",
          "Total kg CO2e per euro": 0.574
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.1.1 Spectator sports - admission charges",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.1.2 Participant sports",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.1.3 Subscriotions to sorts and social clubs",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.1.4 Hire of equipment for sport",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.1.5 Leisure class fees",
          "Total kg CO2e per euro": 0.151
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.2.1 Cinemas",
          "Total kg CO2e per euro": 0.241
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.2.2 Live entertainment, theatre, concerts, shows",
          "Total kg CO2e per euro": 0.241
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.2.3 Museums, zoological gardens, theme parks",
          "Total kg CO2e per euro": 0.241
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.3.1 TV licences",
          "Total kg CO2e per euro": 0.241
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.3.2 Satellite subscriptions",
          "Total kg CO2e per euro": 0.241
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.3.3 Rent for TV/Satellite/VCR",
          "Total kg CO2e per euro": 0.241
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.3.4 Cable subscriptions",
          "Total kg CO2e per euro": 0.241
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.3.5 TV slot meter payments",
          "Total kg CO2e per euro": 0.241
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.3.6 Video, cassette and CD hire",
          "Total kg CO2e per euro": 0.241
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.4.1 Admissions to clubs, dances. Discos, bingo",
          "Total kg CO2e per euro": 0.423
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.4.2 Social events and gatherings",
          "Total kg CO2e per euro": 0.423
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.4.3 Subscriptions for leisure activities",
          "Total kg CO2e per euro": 0.423
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.5 Development of film, photos",
          "Total kg CO2e per euro": 0.045
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.6.1 Football pools stakes",
          "Total kg CO2e per euro": 0.351
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.6.2 Bingo stakes",
          "Total kg CO2e per euro": 0.351
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.6.3 Lottery",
          "Total kg CO2e per euro": 0.351
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.4.6.4 Bookmaker, tote, other betting stakes",
          "Total kg CO2e per euro": 0.351
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.5.1 Books",
          "Total kg CO2e per euro": 0.186
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.5.2 Diaries, address books, cards etc",
          "Total kg CO2e per euro": 0.186
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.5.3 Cards, calendars, posters and other printed matter",
          "Total kg CO2e per euro": 0.186
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.5.4 Newspapers",
          "Total kg CO2e per euro": 0.186
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "9.5.5 Magazines and periodicals",
          "Total kg CO2e per euro": 0.186
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "10.1 Education",
          "Total kg CO2e per euro": 0.297
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "10.2 Educational trips",
          "Total kg CO2e per euro": 0.297
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.1 Restaurant and cafe meals",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.2 Alcoholic beverages",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.3 Takeaway meals",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.4.1 Hot food and cold food",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.4.2 Confectionery",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.4.3 Ice cream",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.4.4 Soft drink",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.5 Contract catering",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.6.1 School meals",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.1.6.2 Meals bought in workplace",
          "Total kg CO2e per euro": 0.43
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.2.1 Holiday in the UK",
          "Total kg CO2e per euro": 0.425
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.2.2 Holiday abroad",
          "Total kg CO2e per euro": 0.425
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "11.2.3 Room hire",
          "Total kg CO2e per euro": 0.425
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.1.1 Hairdressing, beauty treatement",
          "Total kg CO2e per euro": 0.314
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.1.2 Toilet paper",
          "Total kg CO2e per euro": 0.831
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.1.3.1 Toiletries",
          "Total kg CO2e per euro": 0.123
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.1.3.2 Bar of soap, liquid soap, shower gel",
          "Total kg CO2e per euro": 0.123
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.1.3.3 Toilet requisites",
          "Total kg CO2e per euro": 0.123
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.1.4 Baby toiletries and accessories",
          "Total kg CO2e per euro": 0.123
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.1.5.1 Hair products",
          "Total kg CO2e per euro": 0.123
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.1.5.2 Cosmetics and related accessories",
          "Total kg CO2e per euro": 0.123
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.1.5.3 Electrical appliances for personal care",
          "Total kg CO2e per euro": 0.123
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.2.1.1 Jewellery clocks and watches and other personal effects",
          "Total kg CO2e per euro": 0.335
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.2.1.2 Leather and travel goods",
          "Total kg CO2e per euro": 0.335
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.2.1.3 Sunglasses",
          "Total kg CO2e per euro": 0.335
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.2.2.1 Baby equipment",
          "Total kg CO2e per euro": 0.335
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.2.2.2 Prams, pram accessories",
          "Total kg CO2e per euro": 0.335
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.2.2.3 Repairs to personal goods",
          "Total kg CO2e per euro": 0.335
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.3.1.1 Residential homes",
          "Total kg CO2e per euro": 0.432
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.3.1.2 Home help",
          "Total kg CO2e per euro": 0.432
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.3.1.3 Nursery, creche, playschools",
          "Total kg CO2e per euro": 0.432
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.3.1.4 Child care payments",
          "Total kg CO2e per euro": 0.432
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.4.1.1 Structure insurance",
          "Total kg CO2e per euro": 0.143
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.4.1.2 Contents insurance",
          "Total kg CO2e per euro": 0.143
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.4.1.3 Insurance for household items",
          "Total kg CO2e per euro": 0.143
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.4.2 Medical insurance premiums",
          "Total kg CO2e per euro": 0.143
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.4.3.1 Vehicle insurance",
          "Total kg CO2e per euro": 0.143
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.4.3.2 Boat insurance",
          "Total kg CO2e per euro": 0.143
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.4.4 Non package holiday, other travel insurance",
          "Total kg CO2e per euro": 0.143
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.1.1 Moving and storage of furniture",
          "Total kg CO2e per euro": 0.011
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.1.2 Property transaction - purchase and sale",
          "Total kg CO2e per euro": 0.011
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.1.3 Property transaction - sale only",
          "Total kg CO2e per euro": 0.011
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.1.4 Property transaction - purchase only",
          "Total kg CO2e per euro": 0.011
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.1.5 Property transaction - other payments",
          "Total kg CO2e per euro": 0.011
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.2.1 Bank building society fees",
          "Total kg CO2e per euro": 0.001
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.2.2 Bank and post office counter charges",
          "Total kg CO2e per euro": 0.001
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.2.3 Credit card fees",
          "Total kg CO2e per euro": 0
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.3.1 Other professional fees",
          "Total kg CO2e per euro": 2.792
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.3.2 Legal fees",
          "Total kg CO2e per euro": 2.792
        }, {
          "Bing Snippets": "",
          "Consumption": "TRUE",
          "Product category": "12.5.3.3 Funeral expenses",
          "Total kg CO2e per euro": 2.792
        }]

       //  $.getJSON(emissionsJSON, function(data){
       //     console.log("data: " + data);
       //     for(let i = 0; i < data.length; i++){
       //         console.log(i.toString() + " " + data[i]);
       //         emissionsArray.push(data[i]);
       //     }
       // })
      //  emissionsJSON.content.map((data, index) => {
      //   console.log("data: " + data);
      //   console.log("index: " + index);
      //   emissionsArray.push(data);
      // })

        this.state = {
            emissionsArray: emissionsArray,
            animatedComponentsConsumption: animatedComponentsConsumption,
            animatedComponentsSupplyChain: animatedComponentsSupplyChain,
            selectConsumptionOptions: selectConsumptionOptions,
            selectSupplyChainOptions: selectSupplyChainOptions,
            numRows: 0,
            totalKG: 0,
            totalOffset: 0,
            rows : []
        }
        // this.addRowFunction();
    }

    render(){
        return(
            <>
                <Helmet>
                    <meta name="viewport" content="initial-scale=1, width=device-width"/>
                </Helmet>
                <body>
                    <Seo title="One World Browser Extension" />
                    <div className={pages.page_container}>
                        <h1 className={pages.page_title}> One World Browser Extension </h1>
                        <h3 className={pages.page_subtitle}>
                            The One World Browser Extension is used in conjunction with a Square Business account to easily offset a
                            business's inventory carbon emissions. To see it in action feel free to enter data into the table below.
                        </h3>
                        <iframe className={pages.page_video} src="https://www.youtube-nocookie.com/embed/TmRLSg4kcUk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <div id={oneworld.one_world_table_container}>
                          <table style={{overflowY: "visible !important"}} aria-label="simple table" id={oneworld.one_world_table}>
                              <tr>
                                <td className={oneworld.one_world_nameTable}>Name</td>
                                <td className={oneworld.one_world_costTable} align="right">Cost</td>
                                <td className={oneworld.one_world_submit} align="right"></td>
                                <td className={oneworld.one_world_consumptionTable} align="right">Consumption</td>
                                <td className={oneworld.one_world_supplychainTable} align="right">Supply Chain</td>
                                <td className={oneworld.one_world_CO2Table} align="right">CO2</td>
                                <td className={oneworld.one_world_offsetcostTable} align="right">Offset</td>
                                <td className={oneworld.one_world_deleteTable} align="right"></td>
                              </tr>
                            {this.state.rows.map((row) =>
                                <tr key={row.row_num.toString()} style={{overflowY: "visible !important"}}>
                                    <td className={oneworld.one_world_nameTable}><TextField id="standard-basic" placeholder="Apples..." variant="standard" value={row.name} onChange={(e) => this.nameChange(e.target.value, row.row_num)}/></td>
                                    <td className={oneworld.one_world_costTable} align="right"><TextField id="standard-basic" placeholder="$10..." variant="standard" value={row.cost} onChange={(e) => this.costChange(e.target.value, row.row_num)}/></td>
                                    <td className={oneworld.one_world_submit} align="right"><button onClick={() => this.submitFunction(row.row_num)}>{row.submit_text}</button></td>
                                    <td style={{overflowY: "visible !important"}} className={oneworld.one_world_consumptionTable} align="right"><Select class="one_world_select" closeMenuOnSelect={false} components={this.state.animatedComponentsConsumption} options={this.state.selectConsumptionOptions} value={row.consumption} onChange={(selectedOption) => this.consumptionClickChange(selectedOption, row.row_num)}/></td>
                                    <td style={{overflowY: "visible !important"}} className={oneworld.one_world_supplychainTable} align="right"><Select class="one_world_select" closeMenuOnSelect={false} components={this.state.animatedComponentsSupplyChain} options={this.state.selectSupplyChainOptions} value={row.supply_chain} onChange={(selectedOption) => this.supplyChainClickChange(selectedOption, row.row_num)}/></td>
                                    <td className={oneworld.one_world_CO2Table} align="right"><div>{row.co2} kg</div></td>
                                    <td className={oneworld.one_world_offsetcostTable} align="right"><div>${row.offset_cost}</div></td>
                                    <td className={oneworld.one_world_deleteTable} align="right"><button onClick={() => this.deleteRowFunction(row.row_num)}><FontAwesomeIcon icon={faTrashAlt} id={oneworld.one_world_delete_row_button}/></button></td>
                                </tr>
                            )}
                            <tr key="total" style={{overflowY: "visible !important"}}>
                                <td className={oneworld.one_world_nameTable}></td>
                                <td className={oneworld.one_world_costTable} align="right"></td>
                                <td className={oneworld.one_world_submit} align="right"><button onClick={() => this.submitFunction("total")}>Submit All</button></td>
                                <td style={{overflowY: "visible !important"}} className={oneworld.one_world_consumptionTable} align="right"></td>
                                <td style={{overflowY: "visible !important"}} className={oneworld.one_world_supplychainTable} align="right"></td>
                                <td className={oneworld.one_world_CO2Table} align="right"><div>{this.state.totalKG} kg</div></td>
                                <td className={oneworld.one_world_offsetcostTable} align="right"><div>${this.state.totalOffset}</div></td>
                                <td className={oneworld.one_world_deleteTable} align="right"></td>
                            </tr>
                          </table>
                        </div>
                        <Button onClick={this.addRowFunction} variant="text" id={oneworld.one_world_add_row_button}> Add Row </Button>
                        <Button onClick={this.offsetFunction} variant="text" id={oneworld.one_world_offset_row_button}> Offset CO2 </Button>
                        <p className={pages.page_description}>
                            The name category is the name of what you're offseting. So if you're a restaurant and you want to offset the CO2 emissions from buying apples you'd put
                            "Apples" in that category. The cost category is how much it cost to buy what you're offsetting. So if you bought $1000 worth of apples you'd put $1000 in that category.
                            Once these two text fields are filled in, my program will automatically determine the consumption and supply chain categories the product fits in. If you feel like it categorized
                            the product wrong, simply change the category using the dropdown. My program will also calculate the kg CO2 emitted for each product you're offsetting and the cost to do so.
                        </p>
                        <p className={pages.page_description}>
                            The consumption categories and supply chain categories as well as the amount of CO2 emitted per dollar spent
                            in each of those categories comes from <a href="https://www.gov.uk/government/statistics/uks-carbon-footprint" target="_blank" rel="noreferrer">publicly available data from the UK government</a>.
                        </p>
                        <p className={pages.page_description}>
                            Products are automatically categorized by using an Azure Function which utilizes the Bing API to search the name of the product
                            and compare the words in the results with the words in the results of Bing searches for each of the categories via nltk and sklearn's TFIDF vectorization.
                            Then the user is able to easily offset their carbon emissions using Patch. I've also tried approaches using Google Cloud's Google Cloud Function, Google Cloud Run (with Docker) and VADER
                            sentiment analysis.
                        </p>
                        <p className={pages.page_description}>
                            Note: in the video, there's a calculation error that has been corrected now. In the video I say 1t = 100kg but in fact 1t = 1000kg.
                            So really 0.01t should be offset in the video, not 0.13t. So offsetting $100 worth of apples (12.77 kg CO2) through the project chosen
                            on Patch would cost $0.13 not $1.27.
                        </p>
                    </div>
                </body>
            </>
        );
    }
}

export default OneWorld
