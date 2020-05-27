const precss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssImports = require('postcss-import');
const postcssUrl = require('postcss-url');
const postCSSNodeSass = require('postcss-node-sass');

module.exports = {
  siteMetadata: {
    title: `signal lantern`,
    author: {
      name: `Jason Elgin`,
      summary: `who lives and works in Atlanta building useful things.`,
    },
    description: `We do things.`,
    siteUrl: `https://signallantern.com`,
    social: {
      twitter: `jrelgin`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postcssImports(),
          precss(),
          autoprefixer(),
          postcssUrl(),
          postCSSNodeSass(),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-28544460-6`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `signal lantern`,
        short_name: `signal lantern`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#222222`,
        display: `minimal-ui`,
        icon: `content/assets/signal-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 'J70Y5',
      },
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        sidebar: {
          hidden: process.env.NODE_ENV === 'production',
          position: 'displace',
        },
        plugins: ['gatsby-tinacms-git', 'gatsby-tinacms-remark'],
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
