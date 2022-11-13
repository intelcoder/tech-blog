import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

export const Code = ({ children, className }) => {
  const language = className?.replace(/language-/, '') || ''
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={`${className} px-2 py-1 bg-red text-lg  `}
            style={{ ...style, overflow: 'auto' }}
          >
            {tokens.map((line, index) => {
              const lineProps = getLineProps({ line, key: index })
  
              return (
                <div
                  key={index}
                  {...lineProps}
                  className={`${lineProps.className}`}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        )
      }}
    </Highlight>
  )
}
