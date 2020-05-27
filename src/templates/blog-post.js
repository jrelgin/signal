import React from 'react';
import { Link, graphql } from 'gatsby';
import { liveRemarkForm, remarkForm } from 'gatsby-tinacms-remark';
import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';
import { Button as TinaButton } from '@tinacms/styles';
import { InlineForm, InlineTextField, InlineWysiwyg } from 'react-tinacms-inline';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const BlogPostForm = {
  fields: [
    {
      label: 'Title',
      name: 'frontmatter.title',
      description: 'Enter the title of the post here',
      component: 'text',
    },
    {
      label: 'Date',
      name: 'rawFrontmatter.date',
      component: 'date',
      dateFormat: 'MMMM DD YYYY',
      timeFormat: false,
    },
    {
      label: 'Description',
      name: 'frontmatter.description',
      description: 'Enter the post description',
      component: 'textarea',
    },
  ],
};

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const { isEditing, setIsEditing } = this.props;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        {/*{process.env.NODE_ENV !== 'production' && (*/}
        {/*  <TinaButton primary onClick={() => setIsEditing((p) => !p)}>*/}
        {/*    {isEditing ? 'Preview' : 'Edit'}*/}
        {/*  </TinaButton>*/}
        {/*)}*/}
        <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </TinaField>

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

export default liveRemarkForm(BlogPostTemplate, BlogPostForm);

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
      ...TinaRemark
    }
  }
`;
