import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

function SEO({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  )

 
  const metaDescription = description || site.siteMetadata.description
  
  // Handle both old and new image formats
  let image = null
  let imageWidth = 1200
  let imageHeight = 630
  
  if (metaImage) {
    if (metaImage.gatsbyImageData) {
      // New format - use getSrc to get the URL
      const imageSrc = getSrc(metaImage)
      image = imageSrc ? `https:${imageSrc}` : null
      imageWidth = metaImage.gatsbyImageData.width || 1200
      imageHeight = metaImage.gatsbyImageData.height || 630
    } else if (metaImage.src) {
      // Old format fallback
      image = `http:${metaImage.src}`
      imageWidth = metaImage.width
      imageHeight = metaImage.height
    }
  }

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
       // {
       //   name: "keywords",
       //   content: site.siteMetadata.keywords.join(","),
       // },
       
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          image
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: imageWidth,
                },
                {
                  property: "og:image:height",
                  content: imageHeight,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  pathname: PropTypes.string,
}

export default SEO