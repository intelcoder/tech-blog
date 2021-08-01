import React from 'react'
import { MDXProvider } from "@mdx-js/react"
  import tw from 'twin.macro'

const P = tw.p`py-3 leading-5`
const Img = tw.img`my-4`
const Link = tw.a`leading-5`
const Code = tw.code`p-1 text-gray-400`
const Pre = tw.pre`border border-gray-400`

export default function MarkdownProvider({ children }) {
  return (
    <MDXProvider
      components={{
      //   // Map HTML element tag to React component
      //   h1: DesignSystem.H1,
      //   h2: DesignSystem.H2,
      //   h3: DesignSystem.H3,
      //   // Or define component inline
      //   p: props => <p {...props} style={{ color: "rebeccapurple" }} />,
        p: P,
        img: Img,
        a: Link,
        code: Code,
        pre: Pre,
      }}
    >
      {children}
    </MDXProvider>
  )
}