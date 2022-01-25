import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
import Seo from "../../../components/seo"
import HomePage from "../../../components/homepage"
import Header from "../../../components/header"

// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     <Homepage/>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["auto", "webp", "avif"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
//       <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
//       <Link to="/using-dsg">Go to "Using DSG"</Link>
//     </p>
//   </Layout>
// )

const IndexPage = () => (
    <>
        <Seo title="Home" />
        <Header/>
        <HomePage/>
    </>
)


export default IndexPage

/*
    Okay:
    1. Projects
    2. Accounts
    3. Blogs
    4.
*/
