import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const TagsTemplate = (props) => {
  const allPosts = props.data.allMdx
  const siteTitle = props.data.site.siteMetadata.title
  const tagName = props.pageContext.tag
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={`${tagName} 와 관련된 글`}
        description={`${tagName} 과 관련된 글입니다.`}
      />
      <h1 className="text-4xl capitalize pb-12">{tagName}</h1>
      <div className="grid grid-col-1 md:grid-cols-3 gap-3">
        {allPosts.edges.map(({ node }) => {
          const image = getImage(node.frontmatter.thumbnail)

          return (
            <div
              key={node.id}
              className={` hover:border-white hover:-translate-y-3 border-2  duration-300 border-transparent p-4 box-content rounded-xl`}
            >
              <Link to={`/blog${node.fields.slug}`}>
                <GatsbyImage image={image} className="rounded-xl" />
                <div className="mt-2 text-gray-500">
                  {node.frontmatter.date}
                </div>
                <div className="text-xl">{node.frontmatter.title}</div>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default TagsTemplate

export const query = graphql`
  query TagQuery($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            category
            date(formatString: "MMMM DD, YYYY")
            description
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
