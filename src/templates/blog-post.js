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
    const hasRelatedPosts = !!this.props.data?.relatedPosts.edges?.length

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
            post.frontmatter.tags.map((tag) => {
              return <Tag name={tag} type="tags" />
            })}
        </BlogPostTagWrap>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        {hasRelatedPosts && (
          <section>
            <h3 className="text-2xl bold mb-4">관련글</h3>
            {this.props.data?.relatedPosts.edges?.map((p) => {
              return (
                <div>
                  <Link to={`/blog${post.fields.slug}`}>
                    {p.frontmatter.title}
                  </Link>
                </div>
              )
            })}
          </section>
        )}

        <GiscusComments />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostBySlug($slug: String!, $tags: [String]) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.5)
          }
        }
      }
    }
    relatedPosts: allMdx(
      limit: 4
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { tags: { in: $tags } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            thumbnail {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.5)
              }
            }
          }
        }
      }
    }
  }
`
