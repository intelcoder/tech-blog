import React from 'react'
import { Link, graphql } from 'gatsby'

const Category = ({ data, navigate, location }) => {
  return null
}

export default Category

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
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
          }
        }
      }
    }
  }
`
