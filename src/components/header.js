// import PropTypes from "prop-types"
import * as React from "react"
// import { connect } from "react-redux"
// import { useSessionStorage } from '../hooks/useSessionStorage'

function Header() {
    // const [portfolioName, setPortfolioName] = useSessionStorage('name', "");
    // console.log("header portfolioName: " + portfolioName);
    // componentDidMount(){
        let windowHistoryState = "";
        let portName = "";
        if (typeof window !== 'undefined') {
            windowHistoryState = window.history.state;
            console.log("windowHistoryState: " + windowHistoryState);
            portName = window.history.state.portName;
            console.log("portName: " + portName);
        }
    // }
    return (
        <>
            <header>{portName}</header>
        </>
    )
}

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//
//   componentDidMount() {
//   }
//
//   componentWillUnmount() {
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

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
