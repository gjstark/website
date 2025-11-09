import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

export default ({ data }) => {
  const image = getImage(data.heroImage)
  return (
    <div className={styles.hero}>
      {image && <GatsbyImage className={styles.heroImage} image={image} alt={data.name} />}
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </div>
  )
}
