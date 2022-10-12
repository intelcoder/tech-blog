import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostsWithSearch from '../components/PostsWithSearch'
import { PostCard } from 'src/components/PostCard'

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props

    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="mb-12 md:mb-24 mt-8">
          React, Javascript, Typescript...
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => {
            const { frontmatter } = post.node
            return (
              <PostCard
                {...frontmatter}
                slug={post.node.fields.slug}
                excerpt={post.node.excerpt}
                image={frontmatter.thumbnail}
              />
            )
          })}
        </div>
        {/* <PostsWithSearch
          posts={posts}
          navigate={navigate}
          location={location}
        /> */}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
            tags
            category
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
