import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPreviewSection = ({ posts }) => {
  // Get the 3 most recent posts
  const recentPosts = posts?.slice(0, 3) || []

  return (
    <>
      <style>{`
        .blog-preview-section {
          position: relative;
          padding: 8rem 0;
          background: linear-gradient(180deg, rgba(17, 24, 39, 0.5) 0%, rgba(10, 15, 28, 1) 100%);
        }
        
        .blog-preview-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }
        
        .blog-preview-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        
        .blog-preview-header-text {
          max-width: 500px;
        }
        
        .blog-preview-label {
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
        
        .blog-preview-title {
          font-size: clamp(1.75rem, 3.5vw, 2.25rem);
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        
        .blog-preview-subtitle {
          font-size: 1rem;
          color: #94a3b8;
          margin: 0;
        }
        
        .blog-preview-all-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          font-family: 'Sora', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          background: transparent;
          color: #f8fafc;
          border: 2px solid rgba(148, 163, 184, 0.2);
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .blog-preview-all-link:hover {
          border-color: #00d4aa;
          background: rgba(0, 212, 170, 0.05);
          color: #f8fafc;
        }
        
        .blog-preview-all-link svg {
          transition: transform 0.3s ease;
        }
        
        .blog-preview-all-link:hover svg {
          transform: translateX(4px);
        }
        
        .blog-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.5rem;
        }
        
        .blog-card {
          background: rgba(21, 29, 46, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }
        
        .blog-card:hover {
          background: rgba(28, 38, 64, 0.8);
          border-color: rgba(0, 212, 170, 0.2);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-card-image .gatsby-image-wrapper {
          height: 100%;
        }
        
        .blog-card-image img {
          transition: transform 0.6s ease !important;
        }
        
        .blog-card:hover .blog-card-image img {
          transform: scale(1.05);
        }
        
        .blog-card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(10, 15, 28, 0.8) 100%);
          pointer-events: none;
        }
        
        .blog-card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .blog-card-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: #64748b;
          margin-bottom: 0.75rem;
        }
        
        .blog-card-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #f8fafc;
          line-height: 1.4;
          margin-bottom: 0.75rem;
          transition: color 0.3s ease;
        }
        
        .blog-card:hover .blog-card-title {
          color: #00d4aa;
        }
        
        .blog-card-excerpt {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1rem;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .blog-card-excerpt p {
          margin: 0;
        }
        
        .blog-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }
        
        .blog-card-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          padding: 0.375rem 0.625rem;
          background: rgba(148, 163, 184, 0.08);
          color: #64748b;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .blog-card:hover .blog-card-tag {
          background: rgba(0, 212, 170, 0.1);
          color: #00d4aa;
        }
        
        .blog-empty-state {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(21, 29, 46, 0.4);
          border: 1px dashed rgba(148, 163, 184, 0.2);
          border-radius: 20px;
        }
        
        .blog-empty-state p {
          color: #64748b;
          font-size: 1rem;
        }
        
        @media (max-width: 768px) {
          .blog-preview-section {
            padding: 5rem 0;
          }
          
          .blog-preview-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .blog-preview-grid {
            grid-template-columns: 1fr;
          }
          
          .blog-card-image {
            height: 180px;
          }
        }
      `}</style>
      
      <section className="blog-preview-section" id="blog">
        <div className="blog-preview-wrapper">
          <div className="blog-preview-header">
            <div className="blog-preview-header-text">
              <span className="blog-preview-label">From the Blog</span>
              <h2 className="blog-preview-title">Latest Articles</h2>
              <p className="blog-preview-subtitle">
                Thoughts on software development, leadership, and building great teams.
              </p>
            </div>
            <Link to="/blog" className="blog-preview-all-link">
              View All Posts
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
          
          {recentPosts.length > 0 ? (
            <div className="blog-preview-grid">
              {recentPosts.map(({ node }) => {
                const image = getImage(node.heroImage)
                return (
                  <Link to={`/blog/${node.slug}`} className="blog-card" key={node.slug}>
                    <div className="blog-card-image">
                      {image && <GatsbyImage image={image} alt={node.title} />}
                      <div className="blog-card-image-overlay"></div>
                    </div>
                    <div className="blog-card-content">
                      <span className="blog-card-date">{node.publishDate}</span>
                      <h3 className="blog-card-title">{node.title}</h3>
                      <div 
                        className="blog-card-excerpt"
                        dangerouslySetInnerHTML={{
                          __html: node.description?.childMarkdownRemark?.html || '',
                        }}
                      />
                      {node.tags && node.tags.length > 0 && (
                        <div className="blog-card-tags">
                          {node.tags.slice(0, 3).map(tag => (
                            <span className="blog-card-tag" key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="blog-empty-state">
              <p>No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default BlogPreviewSection
