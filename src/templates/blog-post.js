import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import tw from 'twin.macro'
import Tag from "../components/Tag"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MarkdownProvider from "../components/MarkdownProvider"
import { rhythm, scale } from "../utils/typography"

const BlogPostTitle = tw.h1`text-4xl font-primary  my-2 `


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
        <BlogPostTitle>{post.frontmatter.title} 한글도 되나</BlogPostTitle>
        {/* <p>
          {post.frontmatter.date}
        </p> */}
        <MarkdownProvider>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MarkdownProvider>

        <div className="flex">
          {
            post.frontmatter.tags && post.frontmatter.tags.map((tag) => {
              return <Tag name={tag} />
            })
          }
        </div>

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
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
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
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
