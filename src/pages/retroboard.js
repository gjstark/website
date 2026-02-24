import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const RETROBOARD_URL = 'https://retros.herdingcoders.com'

const RetroBoard = () => {
  const [screenshotError, setScreenshotError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.rb-nav')
      if (nav) {
        if (window.scrollY > 72) {
          nav.classList.add('scrolled')
        } else {
          nav.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout hideNav={true} hideFooter={true}>
      <Helmet>
        <title>RetroBoard - Real-time retrospectives for your team</title>
        <meta name="description" content="Create a room, share the code, and run collaborative retrospectives with live updates. Real-time sync, dot voting, and export to Markdown." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style type="text/css">{`
          .rb-page {
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --primary-light: #a78bfa;
            --accent: #a78bfa;
            --bg-dark: #0a0a0a;
            --bg-card: #0d0d14;
            --bg-card-hover: #111118;
            --bg-code: #0d0d14;
            --text-primary: #e5e5e5;
            --text-secondary: #888;
            --text-dim: #555;
            --gradient-1: linear-gradient(135deg, #6366f1 0%, #a78bfa 100%);
            --gradient-2: linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%);
            --shadow-glow: 0 0 60px rgba(99, 102, 241, 0.2);
            --border-color: rgba(99, 102, 241, 0.2);
            font-family: 'Inter', -apple-system, sans-serif;
            color: var(--text-primary);
            line-height: 1.6;
            position: relative;
            padding: 0;
          }

          .rb-page-bg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--bg-dark);
            z-index: -2;
          }

          .rb-page * {
            box-sizing: border-box;
          }

          .terminal-grid {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: -1;
            pointer-events: none;
          }

          .back-to-site {
            position: fixed;
            top: 20px;
            left: 20px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            font-family: 'Inter', sans-serif;
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--text-dim);
            background: rgba(10, 10, 10, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            text-decoration: none;
            z-index: 100;
            transition: all 0.3s ease;
          }

          .back-to-site:hover {
            background: rgba(99, 102, 241, 0.1);
            border-color: var(--primary);
            color: var(--primary);
          }

          .rb-nav {
            position: fixed;
            top: 72px;
            left: 50%;
            transform: translateX(-50%);
            max-width: 1180px;
            width: 100%;
            padding: 1rem 15px;
            backdrop-filter: blur(20px);
            background: rgba(10, 10, 10, 0.8);
            border-bottom: 1px solid var(--border-color);
            z-index: 90;
            transition: top 0.3s ease;
          }

          .rb-nav.scrolled {
            top: 0;
          }

          .rb-nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .rb-logo {
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .rb-logo-bracket {
            color: var(--text-dim);
          }

          .rb-nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .rb-nav-links a {
            color: var(--text-dim);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            font-size: 0.95rem;
          }

          .rb-nav-links a:hover {
            color: var(--primary);
          }

          .rb-nav-cta {
            background: var(--gradient-1);
            color: white;
            padding: 0.6rem 1.5rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-size: 0.9rem;
          }

          .rb-nav-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
            color: white;
          }

          .rb-hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10rem 5% 4rem;
            text-align: center;
            position: relative;
            z-index: 1;
          }

          .hero-content {
            max-width: 900px;
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid var(--border-color);
            padding: 0.5rem 1.25rem;
            border-radius: 50px;
            font-size: 0.875rem;
            font-family: 'JetBrains Mono', monospace;
            color: var(--primary);
            margin-bottom: 2rem;
          }

          .hero-badge .accent {
            color: var(--primary);
          }

          .rb-page h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            letter-spacing: -2px;
          }

          .rb-page h1 .highlight {
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .rb-hero p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto 2.5rem;
            line-height: 1.7;
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }

          .rb-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--gradient-1);
            color: white;
            padding: 0.875rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-size: 1rem;
          }

          .rb-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(99, 102, 241, 0.3);
            color: white;
          }

          .rb-btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: transparent;
            border: 2px solid var(--border-color);
            color: var(--text-primary);
            padding: 0.875rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .rb-btn-secondary:hover {
            border-color: var(--primary);
            background: rgba(99, 102, 241, 0.1);
            color: var(--primary);
          }

          .screenshot-placeholder {
            margin-top: 4rem;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            border-radius: 10px;
            border: 1px solid var(--border-color);
            overflow: hidden;
            background: var(--bg-card);
          }

          .screenshot-placeholder img {
            width: 100%;
            height: auto;
            display: block;
          }

          .rb-features {
            padding: 6rem 5%;
            position: relative;
            z-index: 1;
          }

          .section-header {
            text-align: center;
            max-width: 600px;
            margin: 0 auto 4rem;
          }

          .section-header h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            letter-spacing: -1px;
          }

          .section-header p {
            color: var(--text-dim);
            font-size: 1.1rem;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .feature-card {
            background: var(--bg-card);
            border-radius: 16px;
            padding: 2rem;
            border: 1px solid var(--border-color);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }

          .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--gradient-1);
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .feature-card:hover {
            background: var(--bg-card-hover);
            transform: translateY(-5px);
            border-color: var(--primary);
          }

          .feature-card:hover::before {
            opacity: 1;
          }

          .feature-icon {
            font-size: 1.75rem;
            margin-bottom: 1.25rem;
          }

          .feature-card h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: var(--text-primary);
          }

          .feature-card p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .how-it-works {
            padding: 6rem 5%;
            background: linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.03), transparent);
            position: relative;
            z-index: 1;
          }

          .steps-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
          }

          .step {
            flex: 1;
            min-width: 250px;
            max-width: 300px;
            text-align: center;
            position: relative;
          }

          .step-number {
            width: 60px;
            height: 60px;
            background: var(--gradient-1);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.25rem;
            font-weight: 700;
            margin: 0 auto 1.5rem;
          }

          .step h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
          }

          .step p {
            color: var(--text-secondary);
            font-size: 0.95rem;
          }

          .cta-section {
            padding: 6rem 5%;
            text-align: center;
            position: relative;
            z-index: 1;
          }

          .cta-section h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .cta-section p {
            color: var(--text-dim);
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .rb-footer {
            padding: 3rem 5%;
            border-top: 1px solid var(--border-color);
            text-align: center;
            position: relative;
            z-index: 1;
          }

          .rb-footer p {
            color: var(--text-dim);
            font-size: 0.9rem;
          }

          .rb-footer a {
            color: var(--primary);
            text-decoration: none;
          }

          .rb-footer a:hover {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .rb-nav-links {
              display: none;
            }

            .rb-page h1 {
              font-size: 2rem;
              letter-spacing: -1px;
            }

            .rb-hero p {
              font-size: 1rem;
            }

            .section-header h2 {
              font-size: 1.75rem;
            }

            .feature-card {
              padding: 1.5rem;
            }

            .cta-section h2 {
              font-size: 1.75rem;
            }
          }
        `}</style>
      </Helmet>

      <div className="rb-page">
        <div className="rb-page-bg"></div>
        <div className="terminal-grid"></div>

        <Link to="/" className="back-to-site">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Herding Coders
        </Link>

        <nav className="rb-nav">
          <div className="rb-nav-content">
            <div className="rb-logo">
              <span className="rb-logo-bracket">{'{'}</span>
              Retro<span style={{ color: '#a78bfa' }}>Board</span>
              <span className="rb-logo-bracket">{'}'}</span>
            </div>
            <ul className="rb-nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
            <a href={RETROBOARD_URL} target="_blank" rel="noopener noreferrer" className="rb-nav-cta">Get Started</a>
          </div>
        </nav>

        <section className="rb-hero">
          <div className="hero-content">
            <div className="hero-badge"><span className="accent">retro_board</span>.start()</div>
            <h1>Real-time <span className="highlight">retrospectives</span> for your team</h1>
            <p>Create a room, share the code, and run collaborative retrospectives with live updates.</p>
            <div className="hero-buttons">
              <a href={RETROBOARD_URL} target="_blank" rel="noopener noreferrer" className="rb-btn-primary">
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#features" className="rb-btn-secondary">Learn More</a>
            </div>

            <div className="screenshot-placeholder">
              <img
                src="/retro-screenshot.png"
                alt="RetroBoard interface showing a retrospective in progress"
                onError={() => setScreenshotError(true)}
                style={{
                  display: screenshotError ? 'none' : 'block'
                }}
              />
              {screenshotError && (
                <div style={{
                  padding: '120px 24px',
                  textAlign: 'center',
                  color: 'var(--text-dim)',
                  fontSize: '0.95rem'
                }}>
                  Add <code style={{ fontFamily: 'JetBrains Mono', background: 'rgba(99,102,241,0.1)', padding: '2px 8px', borderRadius: 4 }}>retro-screenshot.png</code> to <code style={{ fontFamily: 'JetBrains Mono', background: 'rgba(99,102,241,0.1)', padding: '2px 8px', borderRadius: 4 }}>static/</code> to display your screenshot
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="rb-features" id="features">
          <div className="section-header">
            <h2>Everything you need</h2>
            <p>Powerful features for effective team retrospectives</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-time sync</h3>
              <p>See cards, votes, and mood updates instantly. WebSocket-powered, no refresh needed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Multiple templates</h3>
              <p>Standard, Start/Stop/Continue, or Sailboat. Pick the format that fits your team.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗳️</div>
              <h3>Dot voting</h3>
              <p>Prioritize ideas with built-in voting. Top items rise to the top automatically.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📤</div>
              <h3>Export to Markdown</h3>
              <p>Download your retro as a formatted Markdown file for documentation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Finish & lock</h3>
              <p>Close the retro when done. No more changes—preserve the final state.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3>Simple signup</h3>
              <p>Create an account to save your retros and access them anytime from your dashboard.</p>
            </div>
          </div>
        </section>

        <section className="how-it-works" id="how-it-works">
          <div className="section-header">
            <h2>How it works</h2>
            <p>Get started in three simple steps</p>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Create a room</h3>
              <p>Choose a template and name your sprint. Get a unique code to share.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Share the link</h3>
              <p>Send the room code or link to your team. Everyone joins in one click.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Collaborate live</h3>
              <p>Add cards, vote, and discuss. Export when you're done.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to run a retro?</h2>
          <p>Create your first retrospective in under a minute.</p>
          <a href={RETROBOARD_URL} target="_blank" rel="noopener noreferrer" className="rb-btn-primary">
            Get Started Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </section>

        <footer className="rb-footer">
          <p>© 2026 RetroBoard • Built by <a href="/">Herding Coders</a></p>
        </footer>
      </div>
    </Layout>
  )
}

export default RetroBoard
