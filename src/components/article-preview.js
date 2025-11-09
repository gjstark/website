import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './article-preview.module.css'

export default ({ article }) => {
  const image = getImage(article.heroImage)
  return (
    <div className={styles.preview}>
      {image && <GatsbyImage image={image} alt="" />}
      <h3 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <small>{article.publishDate}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      {article.tags && article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
    </div>
  )
}
