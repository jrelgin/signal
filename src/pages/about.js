import React from 'react';
import { graphql } from 'gatsby';
import Box from '../components/Box';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import styles from './about.module.css';

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <Box skinny>
        {/*<div className={styles.contact}>*/}
        {/*  {' '}*/}
        {/*  <form name="contact" netlify>*/}
        {/*    <p>*/}
        {/*      <label>*/}
        {/*        Name <input type="text" name="name" />*/}
        {/*      </label>*/}
        {/*    </p>*/}
        {/*    <p>*/}
        {/*      <label>*/}
        {/*        Email <input type="email" name="email" />*/}
        {/*      </label>*/}
        {/*    </p>*/}
        {/*    <p>*/}
        {/*      <button type="submit">Send</button>*/}
        {/*    </p>*/}
        {/*  </form>*/}
        {/*</div>*/}
        <div className={styles.about}>
          <h1>Hello</h1>
          <p>I'm Jason Elgin.</p>
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
