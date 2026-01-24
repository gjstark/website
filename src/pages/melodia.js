import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Melodia = () => {
  useEffect(() => {
    const handleScroll = () => {
      const melodiaNav = document.querySelector('.melodia-nav');
      if (melodiaNav) {
        if (window.scrollY > 72) { // 72px is the height of main nav
          melodiaNav.classList.add('scrolled');
        } else {
          melodiaNav.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Melodia - Your Daily Habit Companion</title>
        <meta name="description" content="Track your daily habits, monitor health metrics, and journal your progress. Melodia helps you stay consistent and reach your goals—all while keeping your data private." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style type="text/css">{`
          .melodia-page {
            --primary: #6366f1;
            --primary-dark: #4f46e5;
            --primary-light: #818cf8;
            --accent: #22d3ee;
            --bg-dark: #0f0f1a;
            --bg-card: #1a1a2e;
            --bg-card-hover: #252542;
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
            --text-muted: #71717a;
            --gradient-1: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
            --gradient-2: linear-gradient(135deg, #22d3ee 0%, #6366f1 100%);
            --shadow-glow: 0 0 60px rgba(99, 102, 241, 0.3);
            font-family: 'Outfit', sans-serif;
            color: var(--text-primary);
            line-height: 1.6;
            position: relative;
            padding: 0;
          }

          .melodia-page-bg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--bg-dark);
            z-index: -2;
          }

          .melodia-page * {
            box-sizing: border-box;
          }

          /* Melodia Page Navigation */
          .melodia-nav {
            position: fixed;
            top: 72px;
            left: 50%;
            transform: translateX(-50%);
            max-width: 1180px;
            width: 100%;
            padding: 1.5rem 15px;
            margin-top: 0;
            margin-bottom: 2rem;
            backdrop-filter: blur(20px);
            background: rgba(15, 15, 26, 0.8);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            z-index: 90;
            transition: top 0.3s ease;
          }

          .melodia-nav.scrolled {
            top: 0;
          }

          .melodia-nav-content {
            max-width: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .melodia-logo {
            font-size: 1.75rem;
            font-weight: 800;
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            letter-spacing: -0.5px;
          }

          .melodia-nav-links {
            display: flex;
            gap: 2.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .melodia-nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            font-size: 0.95rem;
          }

          .melodia-nav-links a:hover {
            color: var(--text-primary);
          }

          .melodia-nav-cta {
            background: var(--gradient-1);
            color: white;
            padding: 0.75rem 1.75rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-size: 0.95rem;
          }

          .melodia-nav-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
            color: white;
          }

          .bg-gradient {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
          }

          .bg-gradient::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                        radial-gradient(ellipse at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(ellipse at 50% 50%, rgba(34, 211, 238, 0.05) 0%, transparent 60%);
            animation: pulse 15s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(5deg); }
          }

          .melodia-hero {
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

          .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(99, 102, 241, 0.15);
            border: 1px solid rgba(99, 102, 241, 0.3);
            padding: 0.5rem 1.25rem;
            border-radius: 50px;
            font-size: 0.875rem;
            color: var(--primary-light);
            margin-bottom: 2rem;
          }

          .badge::before {
            content: '✨';
          }

          .melodia-page h1 {
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            letter-spacing: -2px;
          }

          .melodia-page h1 span {
            background: var(--gradient-1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .melodia-hero p {
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

          .melodia-cta-btn {
            display: inline-block;
            background: var(--gradient-1);
            color: white;
            padding: 0.75rem 1.75rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            font-size: 0.95rem;
          }

          .melodia-cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
            color: white;
          }

          .btn-secondary {
            display: inline-block;
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 0.75rem 1.75rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .btn-secondary:hover {
            border-color: var(--primary);
            background: rgba(99, 102, 241, 0.1);
            color: white;
          }

          .app-preview {
            margin-top: 4rem;
            position: relative;
          }

          .phone-mockup {
            width: 280px;
            height: 580px;
            background: var(--bg-card);
            border-radius: 40px;
            padding: 12px;
            margin: 0 auto;
            box-shadow: var(--shadow-glow), 0 25px 80px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
          }

          .phone-screen {
            background: linear-gradient(180deg, #1e1e2e 0%, #16162a 100%);
            border-radius: 32px;
            height: 100%;
            padding: 1.5rem;
            overflow: hidden;
          }

          .phone-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .phone-title {
            font-size: 1.5rem;
            font-weight: 700;
          }

          .phone-date {
            font-size: 0.75rem;
            color: var(--text-muted);
          }

          .habit-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 1rem;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .habit-check {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 2px solid var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
          }

          .habit-check.done {
            background: var(--primary);
          }

          .habit-info {
            flex: 1;
          }

          .habit-name {
            font-size: 0.9rem;
            font-weight: 500;
          }

          .habit-category {
            font-size: 0.7rem;
            color: var(--text-muted);
          }

          .metric-row {
            display: flex;
            gap: 0.5rem;
            margin-top: 1rem;
          }

          .metric-chip {
            background: rgba(99, 102, 241, 0.2);
            padding: 0.5rem 0.75rem;
            border-radius: 12px;
            font-size: 0.7rem;
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }

          .melodia-features {
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
            color: var(--text-secondary);
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
            border-radius: 24px;
            padding: 2rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
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
            border-color: rgba(99, 102, 241, 0.2);
          }

          .feature-card:hover::before {
            opacity: 1;
          }

          .feature-icon {
            width: 56px;
            height: 56px;
            background: var(--gradient-1);
            border-radius: 16px;
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
          }

          .feature-card p {
            color: var(--text-secondary);
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .melodia-stats {
            padding: 4rem 5%;
            background: linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.05), transparent);
            position: relative;
            z-index: 1;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }

          .stat-item h3 {
            font-size: 3rem;
            font-weight: 800;
            background: var(--gradient-2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
          }

          .stat-item p {
            color: var(--text-secondary);
            font-size: 1rem;
          }

          .how-it-works {
            padding: 6rem 5%;
            position: relative;
            z-index: 1;
          }

          .steps {
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
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
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
            color: var(--text-secondary);
            font-size: 0.95rem;
          }

          .melodia-privacy {
            padding: 6rem 5%;
            position: relative;
            z-index: 1;
          }

          .privacy-card {
            max-width: 800px;
            margin: 0 auto;
            background: var(--bg-card);
            border-radius: 32px;
            padding: 3rem;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.05);
            position: relative;
            overflow: hidden;
          }

          .privacy-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(34, 211, 238, 0.2) 0%, transparent 70%);
            pointer-events: none;
          }

          .privacy-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
          }

          .privacy-card h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .privacy-card p {
            color: var(--text-secondary);
            font-size: 1.1rem;
            max-width: 500px;
            margin: 0 auto;
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
            color: var(--text-secondary);
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .cta-section .melodia-cta-btn {
            font-size: 1.1rem;
            padding: 1rem 2.5rem;
          }

          .melodia-footer {
            padding: 3rem 5%;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            text-align: center;
            position: relative;
            z-index: 1;
          }

          .melodia-footer p {
            color: var(--text-muted);
            font-size: 0.9rem;
          }

          @media (max-width: 768px) {
            .melodia-nav-links {
              display: none;
            }

            .melodia-page h1 {
              font-size: 2.25rem;
              letter-spacing: -1px;
            }

            .melodia-hero p {
              font-size: 1rem;
            }

            .phone-mockup {
              width: 240px;
              height: 500px;
            }

            .section-header h2 {
              font-size: 2rem;
            }

            .feature-card {
              padding: 1.5rem;
            }

            .privacy-card {
              padding: 2rem;
            }

            .cta-section h2 {
              font-size: 2rem;
            }
          }
        `}</style>
      </Helmet>

      <div className="melodia-page">
        <div className="melodia-page-bg"></div>
        <div className="bg-gradient"></div>

        {/* Melodia Page Navigation */}
        <nav className="melodia-nav">
          <div className="melodia-nav-content">
            <div className="melodia-logo">Melodia</div>
            <ul className="melodia-nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#privacy">Privacy</a></li>
            </ul>
            <a href="#download" className="melodia-nav-cta">Get the App</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="melodia-hero">
          <div className="hero-content">
            <div className="badge">Your personal habit tracker</div>
            <h1>Build better habits, <span>one day at a time</span></h1>
            <p>Track your daily habits, monitor health metrics, and journal your progress. Melodia helps you stay consistent and reach your goals—all while keeping your data private.</p>
            <div className="hero-buttons">
              <a href="#download" className="melodia-cta-btn">Download Free</a>
              <a href="#features" className="btn-secondary">Learn More</a>
            </div>

            {/* App Preview */}
            <div className="app-preview">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-header">
                    <div>
                      <div className="phone-title">Habits</div>
                      <div className="phone-date">Today, January 24</div>
                    </div>
                  </div>
                  <div className="habit-card">
                    <div className="habit-check done">✓</div>
                    <div className="habit-info">
                      <div className="habit-name">Morning Exercise</div>
                      <div className="habit-category">🏃 Fitness</div>
                    </div>
                  </div>
                  <div className="habit-card">
                    <div className="habit-check done">✓</div>
                    <div className="habit-info">
                      <div className="habit-name">Read 30 minutes</div>
                      <div className="habit-category">📚 Personal</div>
                    </div>
                  </div>
                  <div className="habit-card">
                    <div className="habit-check"></div>
                    <div className="habit-info">
                      <div className="habit-name">Practice Guitar</div>
                      <div className="habit-category">🎸 Personal</div>
                    </div>
                  </div>
                  <div className="metric-row">
                    <div className="metric-chip">⚖️ 72kg</div>
                    <div className="metric-chip">😴 7.5h</div>
                    <div className="metric-chip">💧 6 glasses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="melodia-features" id="features">
          <div className="section-header">
            <h2>Everything you need to stay on track</h2>
            <p>Powerful features designed to help you build lasting habits and achieve your goals.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Daily Habit Tracking</h3>
              <p>Create custom habits and check them off each day. Track your streaks and see your progress grow over time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Health Metrics</h3>
              <p>Log daily metrics like weight, sleep hours, and water intake. Visualize trends with beautiful charts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Daily Notes</h3>
              <p>Add personal notes to each day. Reflect on your progress and capture thoughts and insights.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Progress Statistics</h3>
              <p>View weekly and monthly statistics. Understand your patterns and celebrate your achievements.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Categories</h3>
              <p>Organize habits with custom categories and colors. Make your habit tracker uniquely yours.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Flexible Layout</h3>
              <p>Drag and drop to reorder sections. Customize your dashboard exactly how you want it.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="melodia-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100%</h3>
              <p>Free Forever</p>
            </div>
            <div className="stat-item">
              <h3>0</h3>
              <p>Data Sold</p>
            </div>
            <div className="stat-item">
              <h3>∞</h3>
              <p>Habits to Track</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works" id="how-it-works">
          <div className="section-header">
            <h2>Start in seconds</h2>
            <p>Getting started with Melodia is simple and straightforward.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Add Your Habits</h3>
              <p>Create habits you want to build. Assign categories and set your goals.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Check Them Daily</h3>
              <p>Each day, mark off the habits you've completed. Watch your streaks grow.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Track Progress</h3>
              <p>Review your statistics and celebrate your consistency wins.</p>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="melodia-privacy" id="privacy">
          <div className="privacy-card">
            <div className="privacy-icon">🔒</div>
            <h2>Your data stays with you</h2>
            <p>Melodia stores all your data locally on your device. No accounts, no cloud sync, no tracking. Your habits are your business.</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" id="download">
          <h2>Ready to build better habits?</h2>
          <p>Join thousands who are transforming their daily routines with Melodia.</p>
          <a href="#" className="melodia-cta-btn">Download for Android</a>
        </section>

        {/* Footer */}
        <footer className="melodia-footer">
          <p>© 2026 Melodia. Built with ❤️ for habit builders everywhere.</p>
        </footer>
      </div>
    </Layout>
  )
}

export default Melodia
