import React from 'react'
import { Link, graphql } from 'gatsby'
import tw from 'twin.macro'
import Tag from '../components/Tag'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MarkdownProvider from '../components/MarkdownProvider'
import { rhythm } from '../utils/typography'
import { GiscusComments } from 'src/components/GiscusComments'

const BlogPostTitleH1 = tw.h1`text-4xl font-primary  my-2 font-title-kr`
const BlogPostTagWrap = tw.div`flex mt-4 gap-2`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BlogPostTitleH1>{post.frontmatter.title}</BlogPostTitleH1>
        <p>{post.frontmatter.date}</p>

        <MarkdownProvider>{this.props.children}</MarkdownProvider>

        <BlogPostTagWrap>
          {post.frontmatter.tags &&
            post.frontmatter.tags.map(tag => {
              return <Tag name={tag} />
            })}
        </BlogPostTagWrap>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
        <GiscusComments />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)

      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
