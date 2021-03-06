module.exports = {
  siteMetadata: {
    title: `Jeffrey Kozik`,
    description: `Portfolio website I coded with React and Gatsby and Bootstrap a number of react packages including
    material-ui, react-responsive, react-select, font-awesome, lodash, and simple analytics.`,
    author: `Jeffrey Kozik`,
    siteUrl: `https://jeffreykozik.com`,
  },
  plugins: [
    `@babel/eslint-parser`,
    `@emotion/react`,
    `@emotion/styled`,
    `@fortawesome/fontawesome-svg-core`,
    `@fortawesome/free-solid-svg-icons`,
    `@fortawesome/react-fontawesome`,
    `@mui/material`,
    `@redux-devtools/extension`,
    `asap`,
    `aphrodite`,
    `bootstrap`,
    `dangerously-set-html-content`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
    resolve: 'gatsby-plugin-matomo',
        options: {
            siteId: '1',
            matomoUrl: 'https://jeffreykozik.matomo.cloud',
            siteUrl: 'https://jeffreykozik.com'
        }
    },
    {
      resolve: "gatsby-plugin-simple-analytics",
      options: {
        trackPageViews: true,
        events: true,
        eventsGlobal: "sa_event",
        ignorePages: ["pathname"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jeffsquare.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["AZURE_FUNCTION_URL"]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `inline-style-prefixer`,
    `lodash`,
    `prop-types`,
    `react-animations`,
    `react-gist`,
    `react-redux`,
    `react-responsive`,
    `react-select`,
    `redux`,
    `string-hash`,
    `xtypejs`,
  ],
}
