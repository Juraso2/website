require("dotenv").config({
  path: `.env`,
});

module.exports = {
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