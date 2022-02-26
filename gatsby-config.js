require('dotenv').config();
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sv18i680ipfe`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en-US`, `ur-PK`],
        defaultLanguage: `en-US`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `http://localhost:8000/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es']
          },
          {
            matchPath: '/preview',
            languages: ['en-US']
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
}
