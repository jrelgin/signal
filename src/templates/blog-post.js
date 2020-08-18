import React from 'react';
import { Link, graphql } from 'gatsby';
import { useForm, usePlugin } from 'tinacms';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const formConfig = {
    id: data.markdownRemark.id,
    label: 'Blog Post',
    initialValues: data.markdownRemark,
    onSubmit: (values) => {
      alert(`Submitting ${values.frontmatter.title}`);
    },
    fields: [
      {
        name: 'frontmatter.title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'frontmatter.description',
        label: 'Description',
        component: 'textarea',
      },
    ],
  };
  // Create the form
  const [post, form] = useForm(formConfig);
  usePlugin(form);

  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
