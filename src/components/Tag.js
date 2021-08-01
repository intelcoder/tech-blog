import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

const TagDiv = styled.div`
  ${tw`p-2 font-bold text-center`};
  background-color: #eee341;
  color: black;
  display: inline-block;
`

const Tag = ({ name, className }) => {
  return (
    <TagDiv className={className}>{name}</TagDiv>
  )
}


export default Tag