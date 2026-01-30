import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './article-preview.module.css'

const ArticlePreview = ({ article }) => {
  const image = getImage(article.heroImage)
  
  return (
    <div className={styles.preview}>
      <Link to={`/blog/${article.slug}`} className={styles.imageLink}>
        {image && (
          <div className={styles.imageWrapper}>
            <GatsbyImage image={image} alt={article.title} className={styles.image} />
            <div className={styles.imageOverlay}></div>
          </div>
        )}
      </Link>
      <div className={styles.content}>
        <small className={styles.date}>{article.publishDate}</small>
        <h3 className={styles.previewTitle}>
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <div
          className={styles.excerpt}
          dangerouslySetInnerHTML={{
            __html: article.description?.childMarkdownRemark?.html || '',
          }}
        />
        {article.tags && article.tags.length > 0 && (
          <div className={styles.tags}>
            {article.tags.map(tag => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticlePreview
