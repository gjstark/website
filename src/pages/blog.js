import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import ArticlePreview from '../components/article-preview'

const BlogIndex = ({ data }) => {
  const siteTitle = data?.site?.siteMetadata?.title || 'Herding Coders'
  const posts = data?.allContentfulBlogPost?.edges || []

  return (
    <Layout>
      <Helmet>
        <title>Blog | {siteTitle}</title>
        <meta name="description" content="Articles on software development, team leadership, agile practices, and building great products." />
      </Helmet>
      
      <style>{`
        .blog-page {
          min-height: 100vh;
          padding-top: 140px;
          padding-bottom: 5rem;
        }
        
        .blog-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .blog-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
        }
        
        .blog-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00d4aa;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(0, 212, 170, 0.1);
          border: 1px solid rgba(0, 212, 170, 0.2);
          border-radius: 100px;
        }
        
        .blog-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .blog-title-highlight {
          background: linear-gradient(135deg, #00d4aa 0%, #22d3ee 50%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .blog-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.5rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .blog-grid li {
          list-style: none;
        }
        
        .blog-empty {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(21, 29, 46, 0.4);
          border: 1px dashed rgba(148, 163, 184, 0.2);
          border-radius: 20px;
        }
        
        .blog-empty p {
          color: #64748b;
          font-size: 1rem;
        }
        
        @media (max-width: 768px) {
          .blog-page {
            padding-top: 120px;
          }
          
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div className="blog-page">
        <div className="blog-wrapper">
          <div className="blog-header">
            <span className="blog-label">From the Blog</span>
            <h1 className="blog-title">
              Thoughts & <span className="blog-title-highlight">Insights</span>
            </h1>
            <p className="blog-subtitle">
              Articles on software development, team leadership, agile practices, 
              and lessons learned from 20+ years in the industry.
            </p>
          </div>
          
          {posts.length > 0 ? (
            <ul className="blog-grid">
              {posts.map(({ node }) => (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="blog-empty">
              <p>No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { publishDate: DESC }, filter: {posttype: {ne: "service"}}) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            gatsbyImageData(
              width: 600
              aspectRatio: 1.78
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
