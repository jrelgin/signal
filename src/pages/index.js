import React, { Component } from 'react';
import { loadableP5 as P5Wrapper } from '../scripts/loadable';
import Sketch from '../scripts/sketch';
import { graphql } from 'gatsby';
import Box from '../components/Box';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="home" bgDark />
      <Box>
        <P5Wrapper sketch={Sketch} />
      </Box>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
