/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
	{
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          apiKey: "AIzaSyDMW94Gm6KEaw41VSH7iGSX0IiH-XecDsY",
		  authDomain: "rencontreia.firebaseapp.com",
		  projectId: "rencontreia",
		  storageBucket: "rencontreia.appspot.com",
		  messagingSenderId: "607132072996",
		  appId: "1:607132072996:web:8eebd74d2b3b4746612cb1",
		  measurementId: "G-RC8RPY7EJX",
        },
      },
    },
	{
    resolve: `gatsby-plugin-firebase-messaging`,
    options: {
      //required unless removeFirebaseServiceWorker == true
      config: { 
        apiKey: "AIzaSyDMW94Gm6KEaw41VSH7iGSX0IiH-XecDsY",
        appId: '1:607132072996:web:8eebd74d2b3b4746612cb1',
        messagingSenderId: '607132072996',
        projectId: 'rencontreia',
      },
      //optionally override the firebase version used by the service worker
      //firebaseVersion: 'FIREBASE_VERSION_NUMBER', //e.g., '8.1.1'
      //optionally disables development service worker
      disableDevelopment: false, 
      //optionally tells plugin to help unregistering/removing service worker
      removeFirebaseServiceWorker: true,
    },
  },
  ],
}
