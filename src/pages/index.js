import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ServicesSection from '../components/services-section'
import SoftwareSection from '../components/software-section'
import BlogPreviewSection from '../components/blog-preview-section'

const RootIndex = ({ data }) => {
  const siteTitle = data?.site?.siteMetadata?.title || 'Herding Coders'
  const posts = data?.allContentfulBlogPost?.edges || []
  const author = data?.allContentfulPerson?.edges?.[0]?.node

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle} | Software Leadership & Development</title>
        <meta 
          name="description" 
          content="George Stark - Building great software and great software teams. 20+ years of experience in software development, team leadership, and delivering high-quality products." 
        />
      </Helmet>
      
      <Hero data={author} />
      <ServicesSection />
      <SoftwareSection />
      <BlogPreviewSection posts={posts} />
      
      {/* CTA Section */}
      <section className="cta-section">
        <style>{`
          .cta-section {
            position: relative;
            padding: 8rem 0;
            overflow: hidden;
          }
          
          .cta-section::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 1000px;
            height: 600px;
            background: 
              radial-gradient(ellipse 50% 50% at 30% 50%, rgba(0, 212, 170, 0.1) 0%, transparent 70%),
              radial-gradient(ellipse 50% 50% at 70% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
            pointer-events: none;
          }
          
          .cta-wrapper {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 1;
          }
          
          .cta-card {
            background: rgba(21, 29, 46, 0.6);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(148, 163, 184, 0.1);
            border-radius: 32px;
            padding: 4rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          
          .cta-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #00d4aa 0%, #6366f1 50%, #f59e0b 100%);
          }
          
          .cta-label {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #00d4aa;
            margin-bottom: 1.5rem;
            padding: 0.5rem 1rem;
            background: rgba(0, 212, 170, 0.1);
            border: 1px solid rgba(0, 212, 170, 0.2);
            border-radius: 100px;
          }
          
          .cta-title {
            font-size: clamp(2rem, 4vw, 2.75rem);
            font-weight: 700;
            color: #f8fafc;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
          }
          
          .cta-title-highlight {
            background: linear-gradient(135deg, #00d4aa 0%, #22d3ee 50%, #6366f1 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .cta-description {
            font-size: 1.125rem;
            color: #94a3b8;
            line-height: 1.7;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .cta-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-family: 'Sora', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
            color: #0a0f1c;
            border-radius: 100px;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 24px rgba(0, 212, 170, 0.25);
          }
          
          .cta-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 32px rgba(0, 212, 170, 0.35);
            color: #0a0f1c;
          }
          
          .cta-btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            font-family: 'Sora', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            background: transparent;
            color: #f8fafc;
            border: 2px solid rgba(148, 163, 184, 0.2);
            border-radius: 100px;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          
          .cta-btn-secondary:hover {
            border-color: #00d4aa;
            background: rgba(0, 212, 170, 0.05);
            color: #f8fafc;
          }
          
          .cta-trust {
            margin-top: 2.5rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(148, 163, 184, 0.1);
          }
          
          .cta-trust-text {
            font-size: 0.875rem;
            color: #64748b;
            margin-bottom: 1rem;
          }
          
          .cta-trust-items {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
          }
          
          .cta-trust-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.875rem;
            color: #94a3b8;
          }
          
          .cta-trust-item svg {
            color: #00d4aa;
          }
          
          @media (max-width: 768px) {
            .cta-section {
              padding: 5rem 0;
            }
            
            .cta-card {
              padding: 2.5rem 1.5rem;
            }
            
            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }
            
            .cta-btn-primary,
            .cta-btn-secondary {
              width: 100%;
              max-width: 280px;
              justify-content: center;
            }
            
            .cta-trust-items {
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}</style>
        
        <div className="cta-wrapper">
          <div className="cta-card">
            <span className="cta-label">Let's Work Together</span>
            <h2 className="cta-title">
              Ready to Build{' '}
              <span className="cta-title-highlight">Something Great</span>?
            </h2>
            <p className="cta-description">
              Whether you need help with team leadership, technical architecture, 
              or delivering a complex project, I'm here to help you succeed.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn-primary">
                Get in Touch
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/blog" className="cta-btn-secondary">
                Read the Blog
              </Link>
            </div>
            
            <div className="cta-trust">
              <p className="cta-trust-text">What you can expect:</p>
              <div className="cta-trust-items">
                <div className="cta-trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Quick Response
                </div>
                <div className="cta-trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  No Obligation Call
                </div>
                <div className="cta-trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Tailored Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(filter: {posttype: {ne: "service"}}, sort: { publishDate: DESC }) {
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
    allContentfulPerson(filter: { contentful_id: { eq: "2ntJSlMVNqYP4p2XCO6JDH" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            gatsbyImageData(
              width: 1180
              aspectRatio: 2.46
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`
