import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'
import tw from 'twin.macro'

const P = styled.p`
  ${tw`py-3 leading-relaxed text-lg`}
  code {
    ${tw`text-lg`}
  }
  a {
  }
`
const Img = tw.img`my-4`
const Link = tw.a`leading-relaxed text-lg`
const Code = tw.code`p-1 text-gray-400 text-lg`
const Pre = tw.pre`border border-gray-400 my-4 text-lg`
const H2 = tw.h2`font-secondary text-3xl font-bold my-4 text-white`

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
