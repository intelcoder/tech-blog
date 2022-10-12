import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

import tw from 'twin.macro'

const H1 = styled.h1`
  ${tw`mb-4 uppercase`};
  a {
    ${tw`text-4xl font-primary `}
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header = (
      <div className="flex justify-between align-center">
        <H1>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {'<존버 />'}
          </Link>
        </H1>

        <div className="flex gap-4">
          <Link to="/categories">Categories</Link>
          <Link to="/tags">Tags</Link>
        </div>
      </div>
    )

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(32),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer></Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
