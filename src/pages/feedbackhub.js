import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const FeedbackHub = () => {
  const [showReleaseNotes, setShowReleaseNotes] = useState(false)
  const widgetRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.devnotesplus.com/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  useEffect(() => {
    if (!showReleaseNotes) return
    const handleClickOutside = (e) => {
      if (
        widgetRef.current && !widgetRef.current.contains(e.target) &&
        buttonRef.current && !buttonRef.current.contains(e.target)
      ) {
        setShowReleaseNotes(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showReleaseNotes])

  return (
    <Layout hideNav={true} hideFooter={true}>
      <Helmet>
        <title>Feedback Hub - User feedback for your apps</title>
        <meta name="description" content="Add an embeddable widget, collect bug reports and feature ideas, and manage everything from one dashboard. User feedback for your apps." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style type="text/css">{`
          .fh-page {
            --bg: #0f0f14;
            --bg-elevated: #16161d;
            --text: #f4f4f5;
            --text-muted: #a1a1aa;
            --accent: #8b5cf6;
            --accent-hover: #a78bfa;
            --border: rgba(255, 255, 255, 0.08);
            font-family: 'Inter', system-ui, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
          }

          .fh-page * { box-sizing: border-box; }

          .fh-container { max-width: 960px; margin: 0 auto; padding: 0 24px; }

          .fh-back {
            position: fixed;
            top: 20px;
            left: 20px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--text-muted);
            background: rgba(22, 22, 29, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            border-radius: 8px;
            text-decoration: none;
            z-index: 100;
            transition: all 0.2s ease;
          }

          .fh-back:hover {
            background: rgba(139, 92, 246, 0.1);
            border-color: var(--accent);
            color: var(--accent);
          }

          .fh-hero {
            padding: 80px 0 60px;
            text-align: center;
          }

          .fh-hero h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin: 0 0 16px;
            letter-spacing: -2px;
          }

          .fh-hero h1 .highlight {
            background: linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .fh-hero p {
            font-size: 1.125rem;
            color: var(--text-muted);
            max-width: 500px;
            margin: 0 auto 32px;
          }

          .fh-hero-buttons {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .fh-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
            font-size: 15px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.15s;
            font-family: inherit;
            text-decoration: none;
            border: none;
          }

          .fh-btn-primary {
            background: var(--accent);
            color: white;
          }

          .fh-btn-primary:hover {
            background: var(--accent-hover);
          }

          .fh-btn-outline {
            background: transparent;
            color: var(--text);
            border: 1px solid var(--border);
          }

          .fh-btn-outline:hover {
            background: var(--bg-elevated);
            border-color: rgba(255, 255, 255, 0.15);
          }

          .fh-hero-mockup {
            margin-top: 48px;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border);
            background: var(--bg-elevated);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .fh-hero-mockup img {
            width: 100%;
            height: auto;
            display: block;
          }

          .fh-features {
            padding: 80px 0;
          }

          .fh-features h2 {
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            margin: 0 0 8px;
          }

          .fh-features-sub {
            text-align: center;
            color: var(--text-muted);
            margin-bottom: 48px;
          }

          .fh-features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 24px;
          }

          .fh-feature-card {
            padding: 24px;
            border-radius: 12px;
            border: 1px solid var(--border);
            background: var(--bg-elevated);
          }

          .fh-feature-icon {
            font-size: 24px;
            margin-bottom: 12px;
          }

          .fh-feature-card h3 {
            font-size: 1rem;
            font-weight: 600;
            margin: 0 0 8px;
          }

          .fh-feature-card p {
            font-size: 14px;
            color: var(--text-muted);
            margin: 0;
          }

          .fh-how {
            padding: 6rem 0;
            border-top: 1px solid var(--border);
            background: linear-gradient(180deg, transparent, rgba(20, 184, 166, 0.03), transparent);
          }

          .fh-how-header {
            text-align: center;
            max-width: 600px;
            margin: 0 auto 4rem;
          }

          .fh-how-header h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            letter-spacing: -0.5px;
          }

          .fh-how-header p {
            color: var(--text-muted);
            font-size: 1.1rem;
            margin: 0;
          }

          .fh-steps {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2.5rem;
            max-width: 900px;
            margin: 0 auto;
          }

          .fh-step {
            flex: 1;
            min-width: 240px;
            max-width: 280px;
            text-align: center;
          }

          .fh-step-number {
            width: 56px;
            height: 56px;
            background: var(--bg-elevated);
            border: 2px solid rgba(20, 184, 166, 0.5);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.25rem;
            font-weight: 700;
            color: #14b8a6;
            margin: 0 auto 1.25rem;
          }

          .fh-step h3 {
            font-size: 1.125rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
          }

          .fh-step p {
            font-size: 0.95rem;
            color: var(--text-muted);
            line-height: 1.6;
            margin: 0;
          }

          .fh-cta {
            padding: 80px 0;
            text-align: center;
            border-top: 1px solid var(--border);
          }

          .fh-cta h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0 0 8px;
          }

          .fh-cta p {
            color: var(--text-muted);
            margin-bottom: 24px;
          }

          .fh-footer {
            padding: 2rem 0;
            text-align: center;
            border-top: 1px solid var(--border);
          }

          .fh-footer p {
            color: var(--text-muted);
            font-size: 0.9rem;
          }

          .fh-footer a {
            color: var(--accent);
            text-decoration: none;
          }

          .fh-footer a:hover {
            color: var(--accent-hover);
          }

          .fh-release-notes-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--text-muted);
            background: rgba(22, 22, 29, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border);
            border-radius: 8px;
            text-decoration: none;
            z-index: 100;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s ease;
          }

          .fh-release-notes-btn:hover,
          .fh-release-notes-btn.active {
            background: rgba(139, 92, 246, 0.1);
            border-color: var(--accent);
            color: var(--accent);
          }

          .fh-release-notes-panel {
            position: fixed;
            top: 60px;
            right: 20px;
            width: 420px;
            max-height: 75vh;
            overflow-y: auto;
            background: var(--bg-elevated);
            border: 1px solid var(--border);
            border-radius: 12px;
            z-index: 99;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            padding: 20px;
            display: none;
          }

          .fh-release-notes-panel.visible {
            display: block;
            animation: fh-panel-in 0.2s ease-out;
          }

          @keyframes fh-panel-in {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .fh-release-notes-panel::-webkit-scrollbar {
            width: 6px;
          }

          .fh-release-notes-panel::-webkit-scrollbar-track {
            background: transparent;
          }

          .fh-release-notes-panel::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
          }

          .fh-release-notes-panel::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          /* Override DevNotesPlus widget theme to match page */
          .fh-release-notes-panel .dnp-widget.dnp-theme-dark {
            --dnp-bg: var(--bg);
            --dnp-card-bg: rgba(255, 255, 255, 0.03);
            --dnp-text: var(--text);
            --dnp-text-muted: var(--text-muted);
            --dnp-border: var(--border);
            --dnp-accent: var(--accent);
            font-family: 'Inter', system-ui, sans-serif;
          }

          .fh-release-notes-panel .dnp-widget-header {
            border-bottom-color: var(--border);
            padding-bottom: 16px;
            margin-bottom: 20px;
          }

          .fh-release-notes-panel .dnp-widget-title {
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: -0.3px;
          }

          .fh-release-notes-panel .dnp-widget-icon svg {
            stroke: var(--accent);
          }

          .fh-release-notes-panel .dnp-release {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 16px;
            margin-bottom: 12px;
            transition: background 0.15s ease, border-color 0.15s ease;
          }

          .fh-release-notes-panel .dnp-release:hover {
            background: rgba(139, 92, 246, 0.04);
            border-color: rgba(139, 92, 246, 0.15);
            box-shadow: none;
          }

          .fh-release-notes-panel .dnp-version {
            border-radius: 6px;
            font-size: 0.8rem;
            font-family: 'JetBrains Mono', monospace;
            padding: 3px 10px;
          }

          .fh-release-notes-panel .dnp-version-major { background: rgba(239, 68, 68, 0.15); color: #f87171; }
          .fh-release-notes-panel .dnp-version-minor { background: rgba(139, 92, 246, 0.15); color: var(--accent-hover); }
          .fh-release-notes-panel .dnp-version-patch { background: rgba(20, 184, 166, 0.15); color: #14b8a6; }

          .fh-release-notes-panel .dnp-date {
            font-size: 0.75rem;
          }

          .fh-release-notes-panel .dnp-change {
            font-size: 0.85rem;
            padding: 4px 0;
          }

          .fh-release-notes-panel .dnp-change-icon {
            border-radius: 6px;
          }

          .fh-release-notes-panel .dnp-change-feature .dnp-change-icon {
            background: rgba(20, 184, 166, 0.12);
          }

          .fh-release-notes-panel .dnp-change-bugfix .dnp-change-icon {
            background: rgba(239, 68, 68, 0.12);
          }

          .fh-release-notes-panel .dnp-change-improvement .dnp-change-icon {
            background: rgba(139, 92, 246, 0.12);
          }

          .fh-release-notes-panel .dnp-change-breaking .dnp-change-icon {
            background: rgba(217, 119, 6, 0.12);
          }

          .fh-release-notes-panel .dnp-powered-by {
            border-top-color: var(--border);
            margin-top: 16px;
            padding-top: 12px;
          }

          .fh-release-notes-panel .dnp-powered-by a {
            font-size: 0.7rem;
            color: var(--text-muted);
          }

          .fh-release-notes-panel .dnp-powered-by a:hover {
            color: var(--accent);
          }

          .fh-release-notes-panel .dnp-spinner {
            border-color: var(--border);
            border-top-color: var(--accent);
          }

          .fh-release-notes-panel .dnp-error {
            background: rgba(239, 68, 68, 0.08);
            border-color: rgba(239, 68, 68, 0.2);
            color: #f87171;
            border-radius: 10px;
          }

          @media (max-width: 480px) {
            .fh-release-notes-panel {
              width: calc(100vw - 40px);
              right: 20px;
            }
          }
        `}</style>
      </Helmet>

      <div className="fh-page">
        <Link to="/" className="fh-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Herding Coders
        </Link>

        <button
          ref={buttonRef}
          className={`fh-release-notes-btn${showReleaseNotes ? ' active' : ''}`}
          onClick={() => setShowReleaseNotes(!showReleaseNotes)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
          Release Notes
        </button>

        <div className={`fh-release-notes-panel${showReleaseNotes ? ' visible' : ''}`} ref={widgetRef}>
          <div
            id="devnotesplus-widget"
            data-package-id="97f21c39-bf8f-4aa1-898c-498bf3092764"
            data-theme="dark"
            data-limit="5"
          ></div>
        </div>

        <div className="fh-container">
          <section className="fh-hero">
            <h1><span className="highlight">User feedback</span> for your apps</h1>
            <p>Add an embeddable widget, collect bug reports and feature ideas, and manage everything from one dashboard.</p>
            <div className="fh-hero-buttons">
              <Link to="/contact" className="fh-btn fh-btn-primary">Get Started</Link>
              <a href="#features" className="fh-btn fh-btn-outline">Learn More</a>
            </div>
            <div className="fh-hero-mockup">
              <img src="/feedbackhub-dashboard.png" alt="FeedbackHub dashboard interface" />
            </div>
          </section>

          <section className="fh-features" id="features">
            <h2>Everything you need</h2>
            <p className="fh-features-sub">Powerful features for collecting and managing user feedback</p>
            <div className="fh-features-grid">
              <div className="fh-feature-card">
                <div className="fh-feature-icon">📦</div>
                <h3>Embeddable widget</h3>
                <p>Drop a single script tag into any site. Your users can submit feedback without leaving the page.</p>
              </div>
              <div className="fh-feature-card">
                <div className="fh-feature-icon">🏷️</div>
                <h3>Structured feedback</h3>
                <p>Bug, feature, UX, performance—capture type, priority, rating, and area so you can triage fast.</p>
              </div>
              <div className="fh-feature-card">
                <div className="fh-feature-icon">📋</div>
                <h3>Inbox & filters</h3>
                <p>View all submissions in one place. Filter by type, status, and priority. Never lose a report.</p>
              </div>
              <div className="fh-feature-card">
                <div className="fh-feature-icon">🔑</div>
                <h3>Token-based auth</h3>
                <p>Generate API tokens per app. Lock them to specific origins so only your sites can submit.</p>
              </div>
              <div className="fh-feature-card">
                <div className="fh-feature-icon">📊</div>
                <h3>Simple analytics</h3>
                <p>See totals, new counts, recent volume, and average ratings at a glance.</p>
              </div>
              <div className="fh-feature-card">
                <div className="fh-feature-icon">🚀</div>
                <h3>Multi-app support</h3>
                <p>One account, many products. Create apps for each project and keep feedback organized.</p>
              </div>
            </div>
          </section>

          <section className="fh-how" id="how-it-works">
            <div className="fh-how-header">
              <h2>How it works</h2>
              <p>Get started in three simple steps</p>
            </div>
            <div className="fh-steps">
              <div className="fh-step">
                <div className="fh-step-number">01</div>
                <h3>Create an app</h3>
                <p>Sign up, create an app, and set which domains can use your widget.</p>
              </div>
              <div className="fh-step">
                <div className="fh-step-number">02</div>
                <h3>Embed the widget</h3>
                <p>Add a script tag and API token to your site. The feedback button appears in seconds.</p>
              </div>
              <div className="fh-step">
                <div className="fh-step-number">03</div>
                <h3>Collect & triage</h3>
                <p>Reviews land in your inbox. Filter, assign priorities, and ship better products.</p>
              </div>
            </div>
          </section>

          <section className="fh-cta">
            <h2>Ready to collect feedback?</h2>
            <p>Get your first feedback in under a minute.</p>
            <Link to="/contact" className="fh-btn fh-btn-primary">Get Started Free</Link>
          </section>

          <footer className="fh-footer">
            <p>© 2026 Feedback Hub • Built by <Link to="/">Herding Coders</Link></p>
          </footer>
        </div>
      </div>
    </Layout>
  )
}

export default FeedbackHub
