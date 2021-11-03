require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Daniel Jurewicz | Web developer",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `STRAPI`,
        fieldName: `strapi`,
        url: process.env.API_URL || `http://localhost:1337/graphql`,
      },
    },
  ],
};