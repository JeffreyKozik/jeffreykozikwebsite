import * as React from "react"
import PropTypes from "prop-types"
import * as homepage from "./homepage.module.css"

class Header extends React.Component {
    // generateLink = () => {
    //     let referer = document.referer;
    //     console.log("referer: " + referer);
    //     // "jeffreykozik.com/portfolios"
    //     // if (referer.search("portfolios") != -1){
    //         return referer;
    //     // }
    //     // else {
    //     //     return "";
    //     // }
    // }
    // generateName = () => {
    //     let referer = document.referer;
    //     console.log("referer: " + referer);
    //     let portfolioName = "";
    //     // "jeffreykozik.com/portfolios"
    //     // if (referer.search("portfolios") != -1){
    //         let portfolioStart = referer.indexOf("portfolios");
    //         console.log("portfolioStart: " + portfolioStart);
    //         let portfolioNameStart = portfolioStart + 11;
    //         console.log("portfolioNameStart: " + portfolioNameStart);
    //         while ((referer[portfolioNameStart] != "/") && (portfolioNameStart < referer.length)){
    //             portfolioName += referer[portfolioNameStart];
    //             console.log("portfolioName: " + portfolioName);
    //             portfolioNameStart++;
    //         }
    //     // }
    //     return portfolioName;
    // }
    render(){
        return(
            <div style={{textAlign: "left"}}>
              <h2 id={homepage.rubikFont1}><a href="https://jeffreykozik.com">Homepage</a></h2>
              <h2 id={homepage.rubikFont2} style={{float: "right"}}><a href={document.referer}>Portfolio</a></h2>
            </div>
        )
    }
}

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
