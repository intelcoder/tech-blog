import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

const TagA = styled(Link)`
  ${tw`p-2 font-bold text-center`};
  background-color: #eee341;
  color: black;
  display: inline-block;
  pointer-events: visible;
`

const Tag = ({ name, className, type = 'category' }) => {
  if (!name) return null
  return (
    <TagA to={`${type}/${name.toLowerCase()}`} className={className}>
      {name}
    </TagA>
  )
}

export default Tag
