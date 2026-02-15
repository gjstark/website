import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Layout from "../components/layout"

const ResourcesPage = () => (
  <Layout>
    <Helmet>
      <title>Resources | Herding Coders</title>
      <meta name="description" content="Resources and tools for software development teams." />
    </Helmet>

    <style>{`
      .resources-page {
        min-height: 100vh;
        padding-top: 140px;
        padding-bottom: 5rem;
        position: relative;
      }

      .resources-page::before {
        content: '';
        position: absolute;
        top: 100px;
        right: -200px;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(0, 212, 170, 0.08) 0%, transparent 60%);
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
      }

      .resources-page::after {
        content: '';
        position: absolute;
        bottom: 100px;
        left: -200px;
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%);
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
      }

      .resources-wrapper {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
        z-index: 1;
      }

      .resources-header {
        text-align: center;
        max-width: 600px;
        margin: 0 auto 3rem;
      }

      .resources-label {
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

      .resources-title {
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 700;
        color: #f8fafc;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
      }

      .resources-title-highlight {
        background: linear-gradient(135deg, #00d4aa 0%, #22d3ee 50%, #6366f1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .resources-subtitle {
        font-size: 1.125rem;
        color: #94a3b8;
        line-height: 1.7;
        margin: 0;
      }

      .resources-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .resource-card {
        background: rgba(21, 29, 46, 0.6);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(148, 163, 184, 0.08);
        border-radius: 24px;
        padding: 2rem;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        text-decoration: none;
        display: block;
      }

      .resource-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #00d4aa 0%, #6366f1 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .resource-card:hover {
        background: rgba(21, 29, 46, 0.8);
        border-color: rgba(0, 212, 170, 0.2);
        transform: translateY(-4px);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      }

      .resource-card:hover::before {
        opacity: 1;
      }

      .resource-card-icon {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
        border-radius: 16px;
        font-size: 1.5rem;
        margin-bottom: 1.25rem;
      }

      .resource-card-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #f8fafc;
        margin: 0 0 0.5rem 0;
      }

      .resource-card-description {
        font-size: 0.95rem;
        color: #94a3b8;
        line-height: 1.6;
        margin: 0 0 1.25rem 0;
      }

      .resource-card-link {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: #00d4aa;
        transition: gap 0.2s ease;
      }

      .resource-card:hover .resource-card-link {
        gap: 0.625rem;
      }

      @media (max-width: 768px) {
        .resources-page {
          padding-top: 120px;
        }
        .resources-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <div className="resources-page">
      <div className="resources-wrapper">
        <div className="resources-header">
          <span className="resources-label">Resources</span>
          <h1 className="resources-title">
            Team{" "}
            <span className="resources-title-highlight">Resources</span>
          </h1>
          <p className="resources-subtitle">
            Resources and tools for software development teams to assess, improve, and deliver effectively.
          </p>
        </div>

        <div className="resources-grid">
          <Link to="/team-assessment" className="resource-card">
            <div className="resource-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h2 className="resource-card-title">Engineering Team Assessment</h2>
            <p className="resource-card-description">
              Assess your software engineering team across five key measures including communication, behaviour, delivery, resourcing, and leadership. Get an instant score with actionable insights.
            </p>
            <span className="resource-card-link">
              Take the assessment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          <Link to="/position-descriptions" className="resource-card">
            <div className="resource-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h2 className="resource-card-title">Position Descriptions</h2>
            <p className="resource-card-description">
              Ready-to-use position descriptions for seven key software engineering roles. View on screen and download as PDF or Word document.
            </p>
            <span className="resource-card-link">
              Browse positions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default ResourcesPage
