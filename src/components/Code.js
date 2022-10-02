import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

export const Code = ({ children, className }) => {
  // Pull the className
  const language = className?.replace(/language-/, '') || ''
  const inlineCodeSnippetStyle = language ? '' : 'inline'
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} p-1 bg-black text-lg ${inlineCodeSnippetStyle}`}
          style={{ ...style }}
        >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })

            return (
              <div
                key={index}
                {...lineProps}
                className={`${lineProps.className} ${inlineCodeSnippetStyle}`}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
