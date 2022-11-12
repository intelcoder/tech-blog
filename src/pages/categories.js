import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from 'src/components/layout'
import SEO from 'src/components/seo'


const categoryLinks = (allMdx) => {
  return allMdx.distinct.map((category, index) => {
    const count = allMdx.group[index].totalCount
    return (
      <Link to={`/categories/${category}`}>
        {category} ({count})
      </Link>
    )
  })
}

const Categories = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={location} title={siteTitle}>
         <SEO
        title="All tags"
        description="All the tags for the frontend development, development setup, javascript and typescript"
      />
        <h1 className="text-3xl mb-8">카테고리</h1>
        <div className='flex flex-col'>
          {categoryLinks(data.allMdx)}
        </div>
      </Layout>
    )
}


export const query =  graphql`
query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      distinct(field: frontmatter___category)
      group(field: frontmatter___category) {
        totalCount
      }
    }
  }
`


export default Categories