import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'

const TagDiv = styled.div`
  ${tw`p-2 font-bold text-center`};
  background-color: #eee341;
  color: black;
  display: inline-block;
`

const Tag = ({ name, size }) => {
  return (
    <TagDiv>{name}</TagDiv>
  )
}


export default Tag