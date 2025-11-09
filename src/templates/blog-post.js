import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

import * as heroStyles from '../components/hero.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const description = get(this.props, 'data.contentfulBlogPost.description')
    const heroImage = getImage(post.heroImage)


    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <SEO
            title={`${post.title} | ${siteTitle}`}
            description={post.description.childMarkdownRemark.html}
            image={post.heroImage}
            pathname={this.props.location.pathname}
          />



          <div className={heroStyles.hero}>
            {heroImage && <GatsbyImage className={heroStyles.heroImage} image={heroImage} alt={post.title} />}
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(
          width: 1180
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
