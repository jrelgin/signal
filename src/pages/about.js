import React from 'react';
import { graphql } from 'gatsby';
import Box from '../components/Box';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import styles from './about.module.css';
import Github from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <Box skinny>
        <div className={styles.about}>
          <h1>Hello</h1>
          <p>I'm Jason Elgin.</p>
          <div className={styles.social}>
            <a href="https://github.com/jrelgin">
              <Github />
            </a>
            <a href="https://twitter.com/jrelgin">
              <Twitter />
            </a>
            <a href="https://www.linkedin.com/in/jrelgin/">
              <LinkedIn />
            </a>
          </div>
        </div>
      </Box>
    </Layout>
  );
};

export default About;

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
