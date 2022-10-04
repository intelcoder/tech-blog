const path = require(`path`)
const slugify = require('slugify')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // const categoryPost = path

  const postByCategoryComponent = path.resolve(
    `src/templates/post-by-category.js`
  )
  const blogPostComponent = path.resolve(`src/templates/blog-post.js`)
  const tagsComponent = path.resolve(`src/templates/tag.js`)

  const category = graphql(
    `
      {
        allMdx(filter: { frontmatter: { category: { ne: null } } }) {
          nodes {
            id
            frontmatter {
              category
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }
    const categories = result.data.allMdx.nodes

    categories.forEach((category, index) => {
      createPage({
        path: `category/${slugify(
          category.frontmatter.category.toLowerCase()
        )}`,
        component: postByCategoryComponent,
        context: {
          category: category.frontmatter.category,
        },
      })
    })
  })

  const blogPost = graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
              internal {
                contentFilePath
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges
    const tags = {}
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      // get unique tags
      post.node.frontmatter?.tags?.forEach((tag) => {
        if (!tags[tag]) {
          tags[tag] = 1
        } else {
          tags[tag] += 1
        }
      })

      createPage({
        path: `blog${post.node.fields.slug}`,
        component: `${blogPostComponent}?__contentFilePath=${post.node.internal.contentFilePath}`,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          tags: post.node.frontmatter.tags || [],
        },
      })
    })
  })

  const tags = graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                tags
              }
              internal {
                contentFilePath
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges
    const tags = {}
    posts.forEach((post, index) => {
      // get unique tags
      post.node.frontmatter?.tags?.forEach((tag) => {
        if (!tags[tag]) {
          tags[tag] = 1
        } else {
          tags[tag] += 1
        }
      })

      Object.keys(tags).forEach((tag) => {
        createPage({
          path: `tags/${slugify(tag.toLowerCase())}`,
          component: tagsComponent,
          context: {
            tag: tag,
          },
        })
      })
    })
  })
  return Promise.all([category, blogPost, tags])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
