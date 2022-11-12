import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export const PostCard = ({
  image,
  title,
  description,
  category,
  date,
  excerpt,
  slug,
}) => {
  return (
    <Link to={`/blog${slug}`} className="shadow-none">
      <GatsbyImage image={getImage(image)} alt={title} className="rounded-lg" loading={'eager'} />
      <h3 className="my-2 text-xl">{title} ---</h3>
      <div className="mb-2 text-gray-400 line-clamp-2">{description}</div>
      <div className="flex flex-row justify-between items-center">
        <div
          className="text-sm px-2 py-1 text-white rounded-md"
          style={{ backgroundColor: '#C05454' }}
        >
          {category}
        </div>
        <div className="text-sm text-gray-400">{date}</div>
      </div>
    </Link>
  )
}
