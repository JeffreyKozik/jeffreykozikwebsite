// import PropTypes from "prop-types"
import * as React from "react"
// import { connect } from "react-redux"
import { useSessionStorage } from '../hooks/useSessionStorage'

function Header() {
    const [portfolioName, setPortfolioName] = useSessionStorage('name', "");
    console.log("header portfolioName: " + portfolioName);
    return (
        <>
            <header>{portfolioName}</header>
        </>
    )
}

export default Header;
// Header.propTypes = {
//   portfolioName: PropTypes.string.isRequired,
//   nothing: PropTypes.any.isRequired
// }

// const mapStateToProps = ({ portfolioName }) => {
//     return { portfolioName }
// }
//
// const ConnectedHeader = connect(mapStateToProps, null)(Header)
//
// export default ConnectedHeader

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
