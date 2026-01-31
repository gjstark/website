import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const DevNotesPlus = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.dnp-nav');
      if (nav) {
        if (window.scrollY > 72) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout hideNav={true} hideFooter={true}>
      <Helmet>
        <title>DevNotesPlus - Beautiful Release Notes for Developers</title>
        <meta name="description" content="Generate beautiful, embeddable release notes for your software. Keep your users informed with automatically generated changelogs, API integration, and customizable widgets." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style type="text/css">{`
          .dnp-page {
            --primary: #10b981;
            --primary-dark: #059669;
            --primary-light: #34d399;
            --accent: #06b6d4;
            --warning: #f59e0b;
            --bg-dark: #0a0f0d;
            --bg-card: #111916;
            --bg-card-hover: #1a2420;
            --bg-code: #0d1210;
            --text-primary: #f0fdf4;
            --text-secondary: #86efac;
            --text-muted: #4ade80;
            --text-dim: #6b7280;
            --gradient-1: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
            --gradient-2: linear-gradient(135deg, #059669 0%, #0891b2 100%);
            --shadow-glow: 0 0 60px rgba(16, 185, 129, 0.2);
            --border-color: rgba(16, 185, 129, 0.2);
            font-family: 'Inter', -apple-system, sans-serif;
            color: var(--text-primary);
            line-height: 1.6;
            position: relative;
            padding: 0;
          }

          .dnp-page-bg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--bg-dark);
            z-index: -2;
          }

          .dnp-page * {
            box-sizing: border-box;
          }

          /* Terminal Grid Background */
          .terminal-grid {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
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
            background: rgba(10, 15, 13, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            text-decoration: none;
            z-index: 100;
            transition: all 0.3s ease;
          }

          .back-to-site:hover {
            background: rgba(16, 185, 129, 0.1);
            border-color: var(--primary);
            color: var(--primary);
          }

          .back-to-site svg {
            transition: transform 0.3s ease;
          }

          .back-to-site:hover svg {
            transform: translateX(-4px);
          }

          /* Navigation */
          .dnp-nav {
            position: fixed;
            top: 72px;
            left: 50%;
            transform: translateX(-50%);
            max-width: 1180px;
            width: 100%;
            padding: 1rem 15px;
            backdrop-filter: blur(20px);
            background: rgba(10, 15, 13, 0.8);
            border-bottom: 1px solid var(--border-color);
            z-index: 90;
            transition: top 0.3s ease;
          }

          .dnp-nav.scrolled {
            top: 0;
          }

          .dnp-nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .dnp-logo {
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .dnp-logo-bracket {
            color: var(--text-dim);
          }

          .dnp-nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .dnp-nav-links a {
            color: var(--text-dim);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            font-size: 0.95rem;
          }

          .dnp-nav-links a:hover {
            color: var(--primary);
          }

          .dnp-nav-cta {
            background: var(--gradient-1);
            color: var(--bg-dark);
            padding: 0.6rem 1.5rem;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-size: 0.9rem;
          }

          .dnp-nav-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
            color: var(--bg-dark);
          }

          /* Hero Section */
          .dnp-hero {
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
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid var(--border-color);
            padding: 0.5rem 1.25rem;
            border-radius: 50px;
            font-size: 0.875rem;
            font-family: 'JetBrains Mono', monospace;
            color: var(--primary);
            margin-bottom: 2rem;
          }

          .hero-badge::before {
            content: '>';
            color: var(--text-dim);
          }

          .dnp-page h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            letter-spacing: -2px;
          }

          .dnp-page h1 .highlight {
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .dnp-hero p {
            font-size: 1.25rem;
            color: var(--text-dim);
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

          .dnp-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--gradient-1);
            color: var(--bg-dark);
            padding: 0.875rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-size: 1rem;
          }

          .dnp-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 40px rgba(16, 185, 129, 0.3);
            color: var(--bg-dark);
          }

          .dnp-btn-secondary {
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

          .dnp-btn-secondary:hover {
            border-color: var(--primary);
            background: rgba(16, 185, 129, 0.1);
            color: var(--primary);
          }

          /* Code Preview */
          .code-preview {
            margin-top: 4rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .code-window {
            background: var(--bg-code);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--shadow-glow), 0 25px 80px rgba(0, 0, 0, 0.5);
          }

          .code-header {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 16px;
            background: rgba(0, 0, 0, 0.3);
            border-bottom: 1px solid var(--border-color);
          }

          .code-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }

          .code-dot.red { background: #ef4444; }
          .code-dot.yellow { background: #f59e0b; }
          .code-dot.green { background: #10b981; }

          .code-title {
            flex: 1;
            text-align: center;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.75rem;
            color: var(--text-dim);
          }

          .code-body {
            padding: 1.5rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            line-height: 1.8;
            overflow-x: auto;
          }

          .code-line {
            display: flex;
            gap: 1rem;
          }

          .code-line-num {
            color: var(--text-dim);
            user-select: none;
            min-width: 24px;
            text-align: right;
          }

          .code-keyword { color: #c678dd; }
          .code-string { color: #98c379; }
          .code-property { color: #61afef; }
          .code-bracket { color: #abb2bf; }
          .code-comment { color: #5c6370; font-style: italic; }

          /* Features Section */
          .dnp-features {
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
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
            width: 56px;
            height: 56px;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
          }

          .feature-card h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: var(--text-primary);
          }

          .feature-card p {
            color: var(--text-dim);
            font-size: 0.95rem;
            line-height: 1.6;
          }

          /* How It Works */
          .how-it-works {
            padding: 6rem 5%;
            background: linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.03), transparent);
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
            background: var(--bg-card);
            border: 2px solid var(--primary);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'JetBrains Mono', monospace;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            margin: 0 auto 1.5rem;
          }

          .step h3 {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
          }

          .step p {
            color: var(--text-dim);
            font-size: 0.95rem;
          }

          /* API Section */
          .api-section {
            padding: 6rem 5%;
            position: relative;
            z-index: 1;
          }

          .api-card {
            max-width: 900px;
            margin: 0 auto;
            background: var(--bg-card);
            border-radius: 24px;
            padding: 3rem;
            border: 1px solid var(--border-color);
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .api-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
            pointer-events: none;
          }

          .api-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
          }

          .api-card h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .api-card > p {
            color: var(--text-dim);
            font-size: 1.1rem;
            max-width: 500px;
            margin: 0 auto 2rem;
          }

          .api-example {
            background: var(--bg-code);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 1.5rem;
            text-align: left;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            overflow-x: auto;
            margin-top: 2rem;
          }

          /* CTA Section */
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

          /* Footer */
          .dnp-footer {
            padding: 3rem 5%;
            border-top: 1px solid var(--border-color);
            text-align: center;
            position: relative;
            z-index: 1;
          }

          .dnp-footer p {
            color: var(--text-dim);
            font-size: 0.9rem;
          }

          .dnp-footer a {
            color: var(--primary);
            text-decoration: none;
          }

          .dnp-footer a:hover {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .dnp-nav-links {
              display: none;
            }

            .dnp-page h1 {
              font-size: 2rem;
              letter-spacing: -1px;
            }

            .dnp-hero p {
              font-size: 1rem;
            }

            .code-preview {
              margin-top: 2rem;
            }

            .code-body {
              font-size: 0.75rem;
              padding: 1rem;
            }

            .section-header h2 {
              font-size: 1.75rem;
            }

            .feature-card {
              padding: 1.5rem;
            }

            .api-card {
              padding: 2rem;
            }

            .cta-section h2 {
              font-size: 1.75rem;
            }
          }
        `}</style>
      </Helmet>

      <div className="dnp-page">
        <div className="dnp-page-bg"></div>
        <div className="terminal-grid"></div>

        <Link to="/" className="back-to-site">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Herding Coders
        </Link>

        {/* Navigation */}
        <nav className="dnp-nav">
          <div className="dnp-nav-content">
            <div className="dnp-logo">
              <span className="dnp-logo-bracket">{'{'}</span>
              DevNotes<span style={{ color: '#06b6d4' }}>Plus</span>
              <span className="dnp-logo-bracket">{'}'}</span>
            </div>
            <ul className="dnp-nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#api">API</a></li>
            </ul>
            <a href="https://www.devnotesplus.com" target="_blank" rel="noopener noreferrer" className="dnp-nav-cta">Get Started</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="dnp-hero">
          <div className="hero-content">
            <div className="hero-badge">release_notes.generate()</div>
            <h1>Beautiful <span className="highlight">Release Notes</span> for Developers</h1>
            <p>Generate stunning, embeddable changelogs for your software. Keep your users informed with automatically formatted release notes and a powerful API.</p>
            <div className="hero-buttons">
              <a href="https://www.devnotesplus.com" target="_blank" rel="noopener noreferrer" className="dnp-btn-primary">
                Start Free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#features" className="dnp-btn-secondary">Learn More</a>
            </div>

            {/* Code Preview */}
            <div className="code-preview">
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dot red"></div>
                  <div className="code-dot yellow"></div>
                  <div className="code-dot green"></div>
                  <div className="code-title">release-notes.json</div>
                </div>
                <div className="code-body">
                  <div className="code-line"><span className="code-line-num">1</span><span className="code-bracket">{'{'}</span></div>
                  <div className="code-line"><span className="code-line-num">2</span>  <span className="code-property">"version"</span>: <span className="code-string">"1.0.1"</span>,</div>
                  <div className="code-line"><span className="code-line-num">3</span>  <span className="code-property">"type"</span>: <span className="code-string">"major"</span>,</div>
                  <div className="code-line"><span className="code-line-num">4</span>  <span className="code-property">"changes"</span>: <span className="code-bracket">[</span></div>
                  <div className="code-line"><span className="code-line-num">5</span>    <span className="code-bracket">{'{'}</span> <span className="code-property">"type"</span>: <span className="code-string">"feature"</span>, <span className="code-property">"desc"</span>: <span className="code-string">"..."</span> <span className="code-bracket">{'}'}</span>,</div>
                  <div className="code-line"><span className="code-line-num">6</span>    <span className="code-bracket">{'{'}</span> <span className="code-property">"type"</span>: <span className="code-string">"bugfix"</span>, <span className="code-property">"desc"</span>: <span className="code-string">"..."</span> <span className="code-bracket">{'}'}</span></div>
                  <div className="code-line"><span className="code-line-num">7</span>  <span className="code-bracket">]</span></div>
                  <div className="code-line"><span className="code-line-num">8</span><span className="code-bracket">{'}'}</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="dnp-features" id="features">
          <div className="section-header">
            <h2>Everything You Need</h2>
            <p>Powerful features to streamline your release communication</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Easy Changelog Creation</h3>
              <p>Create beautiful release notes in minutes. Add features, bug fixes, and breaking changes with a simple interface.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔌</div>
              <h3>REST API</h3>
              <p>Fetch release notes programmatically with our JSON API. Perfect for in-app changelogs and custom integrations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Embeddable Widgets</h3>
              <p>Drop release notes directly into your website or app with customizable, themed components.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏷️</div>
              <h3>Version Management</h3>
              <p>Organize releases by version with support for major, minor, and patch releases following semver.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Public & Private</h3>
              <p>Share public release notes with everyone or keep them private with API key authentication.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast API responses with high availability. Your release notes are always accessible.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works" id="how-it-works">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Get started in three simple steps</p>
          </div>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Create Your Package</h3>
              <p>Set up a new package for your software project and configure your preferences.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Add Releases</h3>
              <p>Document your changes with features, bug fixes, and improvements for each version.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Share & Embed</h3>
              <p>Use the hosted page, API, or embeddable widget to share with your users.</p>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="api-section" id="api">
          <div className="api-card">
            <div className="api-icon">{'</>'}</div>
            <h2>Developer-First API</h2>
            <p>Simple REST API to fetch release notes in JSON format. Integrate directly into your app or website.</p>
            <div className="api-example">
              <span className="code-comment">// Fetch release notes for your package</span><br/>
              <span className="code-keyword">fetch</span>(<span className="code-string">'https://devnotesplus.com/api/public/releases/your-package-id'</span>)<br/>
              &nbsp;&nbsp;.<span className="code-property">then</span>(res =&gt; res.<span className="code-property">json</span>())<br/>
              &nbsp;&nbsp;.<span className="code-property">then</span>(data =&gt; console.<span className="code-property">log</span>(data.releases));
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to streamline your releases?</h2>
          <p>Start creating beautiful release notes for your software today.</p>
          <a href="https://www.devnotesplus.com" target="_blank" rel="noopener noreferrer" className="dnp-btn-primary">
            Get Started Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </section>

        {/* Footer */}
        <footer className="dnp-footer">
          <p>© 2026 DevNotesPlus • Built by <a href="/">Herding Coders</a></p>
        </footer>
      </div>
    </Layout>
  )
}

export default DevNotesPlus
