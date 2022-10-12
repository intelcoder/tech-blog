import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'

const Tags = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const tagCountLookup = useMemo(() => {
    const tagCountLookup = {}
    data.allMdx.edges.forEach(({ node }) => {
      node.frontmatter?.tags?.forEach((tag) => {
        tagCountLookup[tag] = tagCountLookup[tag] ? tagCountLookup[tag] + 1 : 1
      })
    })
    return tagCountLookup
  }, [data.allMdx.edges])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All tags"
        description="All the tags for the frontend development, development setup, javascript and typescript"
      />
      <h1 className="text-3xl mb-8">Tags</h1>
      {data.allMdx.distinct.map((tag, index) => {
        return (
          <div key={index}>
            <Link to={`/tags/${tag.toLowerCase()}`}>
              {tag} ({tagCountLookup[tag]})
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          id
          frontmatter {
            tags
          }
        }
      }
      distinct(field: frontmatter___tags)
    }
  }
`
