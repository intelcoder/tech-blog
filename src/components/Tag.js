import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'twin.macro'

const TagA = styled(Link)`
  ${tw` text-center`};
  background-color: #09568a;
  box-shadow: none;
  display: inline-block;
  pointer-events: visible;
`

const Tag = ({ name, className, type = 'category' }) => {
  if (!name) return null
  return (
    <TagA
      to={`${type}/${name.toLowerCase()}`}
      className={`${className} text-white border-none rounded px-2 py-1`}
    >
      {name}
    </TagA>
  )
}

export default Tag
