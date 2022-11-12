import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import * as queryString from 'query-string'
import tw from 'twin.macro'
import Tag from 'components/Tag'

const PostLink = tw(Link)`py-2`
const PostH3 = styled.h3`
  ${tw`pb-2 text-3xl font-primary font-title-kr`};
  a {
    ${tw`text-4xl py-2 font-secondary-title`};
  }
`

const PostDate = tw.small``
const PostPreviewRight = tw.div`w-full pr-4`
const PostPreviewLeft = styled.div`
  ${tw` flex flex-row justify-between items-start md:items-end mt-4 md:mt-0 
   md:flex-col items-center

  `};
  min-width: 120px;
  small,
  div {
    text-align: right;
  }
`

const PostDesc = tw.p`
  pt-2 leading-5 
`

const PostWrap = styled.div`
  ${tw`flex mb-8 justify-between flex-col md:flex-row`}
`

const AllPosts = ({ posts }) => (
  <div style={{ margin: '20px 0 40px' }}>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <PostLink style={{ boxShadow: `none` }} to={`/blog${node.fields.slug}`}>
          <PostWrap key={node.fields.slug}>
            <PostPreviewRight>
              <PostH3>{title}</PostH3>
              <PostDesc
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </PostPreviewRight>
            <PostPreviewLeft>
              <PostDate>{node.frontmatter.date}</PostDate>
              <div>
                <Tag name={node.frontmatter.category} className="py-0" />
              </div>
            </PostPreviewLeft>
          </PostWrap>
        </PostLink>
      )
    })}
  </div>
)

const PostsWithSearch = ({ posts, location }) => {
  const { search } = queryString.parse(location.search)

  return (
    <>
      <AllPosts posts={posts} />
    </>
  )
}

export default PostsWithSearch
