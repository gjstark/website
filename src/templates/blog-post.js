import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostTemplate = ({ data, location }) => {
  const post = data?.contentfulBlogPost
  const siteTitle = data?.site?.siteMetadata?.title || 'Herding Coders'
  const heroImage = getImage(post?.heroImage)

  return (
    <Layout location={location}>
      <Helmet title={`${post?.title} | ${siteTitle}`} />
      <SEO
        title={`${post?.title} | ${siteTitle}`}
        description={post?.description?.childMarkdownRemark?.html}
        image={post?.heroImage}
        pathname={location.pathname}
      />
      
      <style>{`
        .blog-post-page {
          min-height: 100vh;
          padding-top: 100px;
          padding-bottom: 5rem;
        }
        
        .blog-post-hero {
          position: relative;
          height: 50vh;
          min-height: 400px;
          max-height: 500px;
          overflow: hidden;
        }
        
        .blog-post-hero .gatsby-image-wrapper {
          height: 100%;
        }
        
        .blog-post-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 15, 28, 0.3) 0%, rgba(10, 15, 28, 0.9) 100%);
        }
        
        .blog-post-wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
          margin-top: -100px;
        }
        
        .blog-post-header {
          margin-bottom: 3rem;
        }
        
        .blog-post-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        
        .blog-post-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: #00d4aa;
          padding: 0.5rem 1rem;
          background: rgba(0, 212, 170, 0.1);
          border: 1px solid rgba(0, 212, 170, 0.2);
          border-radius: 100px;
        }
        
        .blog-post-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        
        .blog-post-content {
          background: rgba(21, 29, 46, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 24px;
          padding: 3rem;
        }
        
        .blog-post-content h1,
        .blog-post-content h2,
        .blog-post-content h3,
        .blog-post-content h4,
        .blog-post-content h5,
        .blog-post-content h6 {
          color: #f8fafc;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .blog-post-content h2 {
          font-size: 1.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
        }
        
        .blog-post-content h3 {
          font-size: 1.375rem;
        }
        
        .blog-post-content p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }
        
        .blog-post-content a {
          color: #00d4aa;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        
        .blog-post-content a:hover {
          color: #22d3ee;
        }
        
        .blog-post-content ul,
        .blog-post-content ol {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .blog-post-content li {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 0.5rem;
        }
        
        .blog-post-content blockquote {
          border-left: 4px solid #00d4aa;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #94a3b8;
        }
        
        .blog-post-content pre {
          background: rgba(10, 15, 28, 0.8);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .blog-post-content code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
        }
        
        .blog-post-content p code {
          background: rgba(148, 163, 184, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: #f59e0b;
        }
        
        .blog-post-content img {
          border-radius: 12px;
          margin: 1.5rem 0;
        }
        
        .blog-post-content hr {
          border: none;
          height: 1px;
          background: rgba(148, 163, 184, 0.1);
          margin: 3rem 0;
        }
        
        .blog-post-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 2rem;
          padding: 0.875rem 1.5rem;
          font-family: 'Sora', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #94a3b8;
          text-decoration: none;
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 100px;
          transition: all 0.3s ease;
        }
        
        .blog-post-back:hover {
          border-color: #00d4aa;
          color: #00d4aa;
          background: rgba(0, 212, 170, 0.05);
        }
        
        .blog-post-back svg {
          transition: transform 0.3s ease;
        }
        
        .blog-post-back:hover svg {
          transform: translateX(-4px);
        }
        
        @media (max-width: 768px) {
          .blog-post-page {
            padding-top: 80px;
          }
          
          .blog-post-hero {
            height: 40vh;
            min-height: 300px;
          }
          
          .blog-post-wrapper {
            margin-top: -60px;
          }
          
          .blog-post-content {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
      
      <div className="blog-post-page">
        {heroImage && (
          <div className="blog-post-hero">
            <GatsbyImage image={heroImage} alt={post?.title || ''} />
            <div className="blog-post-hero-overlay"></div>
          </div>
        )}
        
        <div className="blog-post-wrapper">
          <div className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-post-date">{post?.publishDate}</span>
            </div>
            <h1 className="blog-post-title">{post?.title}</h1>
          </div>
          
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{
              __html: post?.body?.childMarkdownRemark?.html || '',
            }}
          />
          
          <Link to="/blog" className="blog-post-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </Layout>
  )
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
          width: 1600
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
