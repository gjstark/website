import React from 'react'
import { Link } from 'gatsby'

const FeedbackHubBanner = () => {
  return (
    <>
      <style>{`
        .fhb {
          position: relative;
          padding: 4rem 0;
          padding-top: 8rem;
          overflow: hidden;
        }

        .fhb::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 1000px;
          height: 500px;
          background:
            radial-gradient(ellipse 50% 60% at 30% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%),
            radial-gradient(ellipse 50% 60% at 70% 50%, rgba(20, 184, 166, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .fhb-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .fhb-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          background: rgba(21, 29, 46, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 32px;
          padding: 3.5rem;
          position: relative;
          overflow: hidden;
        }

        .fhb-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b5cf6 0%, #14b8a6 100%);
        }

        .fhb-glow {
          position: absolute;
          top: -150px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(40px);
          pointer-events: none;
        }

        .fhb-content {
          position: relative;
          z-index: 1;
        }

        .fhb-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1.25rem;
          padding: 0.4rem 0.875rem;
          background: rgba(139, 92, 246, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 100px;
        }

        .fhb-badge::before {
          content: '';
          width: 7px;
          height: 7px;
          background: #a78bfa;
          border-radius: 50%;
          animation: fhb-pulse 2s ease-in-out infinite;
        }

        @keyframes fhb-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .fhb-title {
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .fhb-title-highlight {
          background: linear-gradient(135deg, #8b5cf6 0%, #14b8a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .fhb-description {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          max-width: 460px;
        }

        .fhb-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .fhb-feature {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.4rem 0.75rem;
          background: rgba(139, 92, 246, 0.08);
          color: #cbd5e1;
          border-radius: 8px;
        }

        .fhb-feature::before {
          content: '✓';
          font-size: 0.7rem;
          color: #14b8a6;
        }

        .fhb-buttons {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .fhb-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          background: linear-gradient(135deg, #8b5cf6 0%, #14b8a6 100%);
          color: #fff;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 24px rgba(139, 92, 246, 0.25);
        }

        .fhb-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.35);
          color: #fff;
        }

        .fhb-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          background: transparent;
          color: #f8fafc;
          border: 2px solid rgba(148, 163, 184, 0.15);
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .fhb-btn-secondary:hover {
          border-color: #8b5cf6;
          background: rgba(139, 92, 246, 0.05);
          color: #f8fafc;
        }

        .fhb-visual {
          position: relative;
          z-index: 1;
        }

        .fhb-mockup {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.1);
          background: rgba(15, 15, 20, 0.8);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease;
        }

        .fhb-mockup:hover {
          transform: translateY(-4px);
        }

        .fhb-mockup img {
          width: 100%;
          height: auto;
          display: block;
        }

        .fhb-price-note {
          margin-top: 0.75rem;
          font-size: 0.8rem;
          color: #64748b;
        }

        .fhb-price-note strong {
          color: #14b8a6;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .fhb-card {
            grid-template-columns: 1fr;
            padding: 2.5rem 1.75rem;
            text-align: center;
          }

          .fhb-description {
            margin-left: auto;
            margin-right: auto;
          }

          .fhb-features {
            justify-content: center;
          }

          .fhb-buttons {
            justify-content: center;
          }

          .fhb-visual {
            order: -1;
          }
        }
      `}</style>

      <section className="fhb">
        <div className="fhb-wrapper">
          <div className="fhb-card">
            <div className="fhb-glow"></div>

            <div className="fhb-content">
              <span className="fhb-badge">Featured Product — Feedback Hub</span>
              <h2 className="fhb-title">
                Collect <span className="fhb-title-highlight">User Feedback</span> in Minutes
              </h2>
              <p className="fhb-description">
                Drop a widget into any site. Your users submit bug reports and feature
                ideas without leaving the page — and you manage it all from one dashboard.
              </p>
              <div className="fhb-features">
                <span className="fhb-feature">Embeddable Widget</span>
                <span className="fhb-feature">Bug Reports & Ideas</span>
                <span className="fhb-feature">Multi-App Support</span>
              </div>
              <div className="fhb-buttons">
                <a
                  href="https://feedback.herdingcoders.com/register"
                  className="fhb-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Free
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <Link to="/feedbackhub" className="fhb-btn-secondary">
                  Learn More
                </Link>
              </div>
              <p className="fhb-price-note">
                <strong>Free 14-day trial</strong> — no credit card required
              </p>
            </div>

            <div className="fhb-visual">
              <div className="fhb-mockup">
                <img
                  src="/feedbackhub-dashboard.png"
                  alt="Feedback Hub dashboard showing user submissions"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeedbackHubBanner
