import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import styled from 'styled-components'
import tw from 'twin.macro'

const P = styled.p`
  ${tw`py-3 leading-5`}
  code {
    padding: 2px;
    ${tw`bg-white text-black`}
  }
  a {
    
  }
`
const Img = tw.img`my-4`
const Link = tw.a`leading-5`
const Code = tw.code`p-1 text-gray-400`
const Pre = tw.pre`border border-gray-400`
const H2 = tw.h2`font-secondary`

export default function MarkdownProvider({ children }) {
  return (
    <MDXProvider
      components={{
        p: P,
        img: Img,
        a: Link,
        code: Code,
        pre: Pre,
        h2: H2,
      }}
    >
      {children}
    </MDXProvider>
  )
}