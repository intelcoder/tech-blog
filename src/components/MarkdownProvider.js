import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Code } from 'src/components/Code'

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
const Pre = tw.pre`border border-gray-400 my-4 text-lg`
const H2 = tw.h2`font-secondary text-3xl font-bold my-4 text-white`
const Li = tw.li`mb-0`
const Ul = tw.ul`mb-0
list-[square]
ml-4
`

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
        li: Li,
        ul: Ul,
      }}
    >
      {children}
    </MDXProvider>
  )
}
