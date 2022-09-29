import React from 'react'
import Giscus from '@giscus/react'

export const GiscusComments = () => {
  return (
    <Giscus
      id="comments"
      repo="intelcoder/tech-blog"
      repoId={process.env.GATSBY_GISCUS_REPO_ID}
      category="Comments"
      categoryId={process.env.GATSBY_GISCUS_CATEGORY_ID}
      mapping="og:title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="transparent_dark"
      lang="en"
      loading="lazy"
    />
  )
}
