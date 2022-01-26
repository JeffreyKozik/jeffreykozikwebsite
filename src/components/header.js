import * as React from "react"
import PropTypes from "prop-types"
import * as homepage from "./homepage.module.css"

import Button from '@mui/material/Button';


class Header extends React.Component {
    // generateLink = () => {
    //     let referrer = document.referrer;
    //     console.log("referrer: " + referrer);
    //     // "jeffreykozik.com/portfolios"
    //     // if (referrer.search("portfolios") != -1){
    //         return referrer;
    //     // }
    //     // else {
    //     //     return "";
    //     // }
    // }
    // generateName = () => {
    //     let referrer = document.referrer;
    //     console.log("referrer: " + referrer);
    //     let portfolioName = "";
    //     // "jeffreykozik.com/portfolios"
    //     // if (referrer.search("portfolios") != -1){
    //         let portfolioStart = referrer.indexOf("portfolios");
    //         console.log("portfolioStart: " + portfolioStart);
    //         let portfolioNameStart = portfolioStart + 11;
    //         console.log("portfolioNameStart: " + portfolioNameStart);
    //         while ((referrer[portfolioNameStart] != "/") && (portfolioNameStart < referrer.length)){
    //             portfolioName += referrer[portfolioNameStart];
    //             console.log("portfolioName: " + portfolioName);
    //             portfolioNameStart++;
    //         }
    //     // }
    //     return portfolioName;
    // }
    render(){
        return(
            <></>
        )
    }
}

// <div style={{textAlign: "left"}}>
//   <h2 id={homepage.rubikFont1}><a href="https://jeffreykozik.com">Homepage</a></h2>
//   <Button id={homepage.rubikFont2} style={{float: "right"}} onclick="history.back()">Portfolio</Button>
// </div>

export default Header

// import * as React from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"
//
// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )
//
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Header.defaultProps = {
//   siteTitle: ``,
// }
//
// export default Header
