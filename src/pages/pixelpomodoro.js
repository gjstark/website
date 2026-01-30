import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const PixelPomodoro = () => {
  useEffect(() => {
    // Add floating pixel decorations
    const colors = ['#ff2a6d', '#05d9e8', '#d300c5', '#ffe66d']
    for (let i = 0; i < 15; i++) {
      const pixel = document.createElement('div')
      pixel.className = 'pixel-decoration'
      pixel.style.position = 'absolute'
      pixel.style.width = '8px'
      pixel.style.height = '8px'
      pixel.style.opacity = '0.5'
      pixel.style.animation = 'float 6s ease-in-out infinite'
      pixel.style.left = Math.random() * 100 + 'vw'
      pixel.style.top = Math.random() * 100 + 'vh'
      pixel.style.background = colors[Math.floor(Math.random() * colors.length)]
      pixel.style.animationDelay = Math.random() * 6 + 's'
      pixel.style.animationDuration = (4 + Math.random() * 4) + 's'
      document.body.appendChild(pixel)
    }

    // Animate timer display
    const timerDisplay = document.querySelector('.timer-display')
    let time = 1500 // 25:00 in seconds

    function updateTimer() {
      if (timerDisplay) {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        timerDisplay.textContent =
          String(minutes).padStart(2, '0') + ':' +
          String(seconds).padStart(2, '0')
        time--
        if (time < 0) time = 1500
      }
    }

    const interval = setInterval(updateTimer, 1000)

    return () => {
      clearInterval(interval)
      // Clean up pixel decorations
      document.querySelectorAll('.pixel-decoration').forEach(el => el.remove())
    }
  }, [])

  return (
    <Layout hideNav={true} hideFooter={true}>
      <Helmet>
        <title>Pixel Pomodoro - Retro 8-Bit Focus Timer</title>
        <meta name="description" content="Level up your productivity with Pixel Pomodoro - a retro 8-bit style Pomodoro timer app with multiple nostalgic themes." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <style type="text/css">{`
          :root {
            --bg-dark: #0d0221;
            --bg-secondary: #1a0533;
            --primary: #ff2a6d;
            --cyan: #05d9e8;
            --magenta: #d300c5;
            --yellow: #ffe66d;
            --text: #f5f5f5;
            --text-dim: #7a5980;
            --grid-color: rgba(5, 217, 232, 0.15);
          }

          .pixel-page {
            font-family: 'Press Start 2P', monospace;
            background: var(--bg-dark);
            color: var(--text);
            min-height: 100vh;
            overflow-x: hidden;
            line-height: 1.8;
            position: relative;
          }

          .back-to-site {
            position: fixed;
            top: 20px;
            left: 20px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 20px;
            font-family: 'Press Start 2P', monospace;
            font-size: 8px;
            color: var(--text);
            background: rgba(13, 2, 33, 0.9);
            border: 2px solid var(--cyan);
            text-decoration: none;
            z-index: 100;
            transition: all 0.3s ease;
          }

          .back-to-site:hover {
            background: var(--cyan);
            color: var(--bg-dark);
            box-shadow: 0 0 20px var(--cyan);
          }

          .back-to-site svg {
            transition: transform 0.3s ease;
          }

          .back-to-site:hover svg {
            transform: translateX(-4px);
          }

          .scanlines {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
            background: repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.1) 0px,
              rgba(0, 0, 0, 0.1) 1px,
              transparent 1px,
              transparent 2px
            );
          }

          .grid-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background:
              linear-gradient(var(--grid-color) 1px, transparent 1px),
              linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
            background-size: 50px 50px;
            transform: perspective(500px) rotateX(60deg);
            transform-origin: center top;
            animation: gridScroll 20s linear infinite;
            z-index: -1;
            opacity: 0.5;
          }

          @keyframes gridScroll {
            0% { background-position: 0 0; }
            100% { background-position: 0 50px; }
          }

          .gradient-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              180deg,
              rgba(13, 2, 33, 0.3) 0%,
              rgba(13, 2, 33, 0.8) 50%,
              rgba(13, 2, 33, 0.95) 100%
            );
            z-index: -1;
          }

          .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 120px 20px 60px;
            position: relative;
          }

          .hero-title {
            font-size: clamp(24px, 6vw, 48px);
            margin-bottom: 20px;
            text-shadow:
              4px 4px 0 var(--magenta),
              -2px -2px 0 var(--cyan);
            animation: glitch 3s infinite;
          }

          @keyframes glitch {
            0%, 90%, 100% {
              text-shadow:
                4px 4px 0 var(--magenta),
                -2px -2px 0 var(--cyan);
            }
            92% {
              text-shadow:
                -4px 4px 0 var(--cyan),
                4px -2px 0 var(--magenta);
            }
            94% {
              text-shadow:
                4px -4px 0 var(--magenta),
                -4px 2px 0 var(--cyan);
            }
          }

          .hero-subtitle {
            font-size: clamp(10px, 2vw, 14px);
            color: var(--cyan);
            margin-bottom: 40px;
            text-shadow: 0 0 20px var(--cyan);
          }

          .tomato-container {
            position: relative;
            width: 200px;
            height: 200px;
            margin: 40px auto;
          }

          .tomato {
            font-size: 120px;
            animation: bounce 2s ease-in-out infinite, glow 1.5s ease-in-out infinite alternate;
            filter: drop-shadow(0 0 20px var(--primary));
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @keyframes glow {
            0% { filter: drop-shadow(0 0 20px var(--primary)); }
            100% { filter: drop-shadow(0 0 40px var(--primary)) drop-shadow(0 0 60px var(--magenta)); }
          }

          .timer-display {
            font-size: clamp(32px, 8vw, 64px);
            color: var(--primary);
            text-shadow: 0 0 30px var(--primary);
            margin: 30px 0;
            font-variant-numeric: tabular-nums;
          }

          .cta-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 40px;
          }

          .pixel-btn {
            display: inline-block;
            padding: 20px 40px;
            font-family: 'Press Start 2P', monospace;
            font-size: 10px;
            text-decoration: none;
            color: var(--text);
            background: var(--primary);
            border: none;
            cursor: pointer;
            position: relative;
            transition: all 0.1s ease;
            box-shadow:
              4px 4px 0 #b31d4a,
              inset -4px -4px 0 rgba(0,0,0,0.2),
              inset 4px 4px 0 rgba(255,255,255,0.2);
          }

          .pixel-btn:hover {
            transform: translate(2px, 2px);
            box-shadow:
              2px 2px 0 #b31d4a,
              inset -4px -4px 0 rgba(0,0,0,0.2),
              inset 4px 4px 0 rgba(255,255,255,0.2);
          }

          .pixel-btn:active {
            transform: translate(4px, 4px);
            box-shadow:
              0 0 0 #b31d4a,
              inset -4px -4px 0 rgba(0,0,0,0.2),
              inset 4px 4px 0 rgba(255,255,255,0.2);
          }

          .pixel-btn.secondary {
            background: var(--bg-secondary);
            border: 3px solid var(--cyan);
            box-shadow:
              4px 4px 0 #033d42,
              inset -4px -4px 0 rgba(0,0,0,0.2),
              inset 4px 4px 0 rgba(255,255,255,0.1);
          }

          .pixel-btn.secondary:hover {
            background: var(--cyan);
            color: var(--bg-dark);
            box-shadow:
              2px 2px 0 #033d42,
              inset -4px -4px 0 rgba(0,0,0,0.2),
              inset 4px 4px 0 rgba(255,255,255,0.1);
          }

          .features {
            padding: 100px 20px;
            position: relative;
          }

          .section-title {
            text-align: center;
            font-size: clamp(16px, 4vw, 24px);
            margin-bottom: 60px;
            color: var(--yellow);
            text-shadow: 3px 3px 0 var(--primary);
          }

          .features-grid {
            max-width: 1000px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
          }

          .feature-card {
            background: var(--bg-secondary);
            border: 4px solid var(--text);
            padding: 30px;
            position: relative;
            transition: all 0.3s ease;
          }

          .feature-card:hover {
            transform: translate(-4px, -4px);
            border-color: var(--cyan);
            box-shadow: 8px 8px 0 var(--primary);
          }

          .feature-icon {
            font-size: 40px;
            margin-bottom: 20px;
          }

          .feature-title {
            font-size: 12px;
            color: var(--cyan);
            margin-bottom: 15px;
          }

          .feature-desc {
            font-size: 8px;
            color: var(--text-dim);
            line-height: 2;
          }

          .themes {
            padding: 100px 20px;
            background: linear-gradient(180deg, transparent 0%, rgba(26, 5, 51, 0.5) 50%, transparent 100%);
          }

          .themes-showcase {
            max-width: 900px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 20px;
          }

          .theme-pill {
            padding: 15px 20px;
            font-size: 8px;
            text-align: center;
            border: 3px solid;
            transition: all 0.3s ease;
          }

          .theme-pill:hover {
            transform: scale(1.05);
          }

          .theme-nes {
            background: #0f0f1b;
            border-color: #e63946;
            color: #f4f1de;
          }
          .theme-gameboy {
            background: #0f380f;
            border-color: #8bac0f;
            color: #cadc9f;
          }
          .theme-synthwave {
            background: #0d0221;
            border-color: #ff2a6d;
            color: #f5f5f5;
          }
          .theme-amber {
            background: #0a0a0a;
            border-color: #ffb000;
            color: #ffcc00;
          }
          .theme-c64 {
            background: #40318d;
            border-color: #7869c4;
            color: #d5d5d5;
          }
          .theme-sunset {
            background: #1a1423;
            border-color: #ff6b6b;
            color: #f7fff7;
          }

          .stats {
            padding: 80px 20px;
            text-align: center;
          }

          .stats-grid {
            max-width: 800px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }

          .stat-item {
            padding: 20px;
          }

          .stat-number {
            font-size: clamp(24px, 5vw, 36px);
            color: var(--primary);
            text-shadow: 0 0 20px var(--primary);
            display: block;
            margin-bottom: 10px;
          }

          .stat-label {
            font-size: 8px;
            color: var(--text-dim);
          }

          .download {
            padding: 100px 20px;
            text-align: center;
          }

          .download-box {
            max-width: 600px;
            margin: 0 auto;
            background: var(--bg-secondary);
            border: 6px solid var(--primary);
            padding: 50px;
            position: relative;
          }

          .download-box::before,
          .download-box::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            border: 4px solid var(--cyan);
          }

          .download-box::before {
            top: 10px;
            left: 10px;
            border-right: none;
            border-bottom: none;
          }

          .download-box::after {
            bottom: 10px;
            right: 10px;
            border-left: none;
            border-top: none;
          }

          .download-title {
            font-size: 16px;
            margin-bottom: 20px;
            color: var(--yellow);
          }

          .download-text {
            font-size: 10px;
            color: var(--text-dim);
            margin-bottom: 30px;
            line-height: 2;
          }

          .store-badge {
            display: inline-block;
            transition: all 0.3s ease;
          }

          .store-badge:hover {
            transform: scale(1.05);
            filter: drop-shadow(0 0 20px var(--cyan));
          }

          .store-badge img {
            height: 60px;
          }

          .pixel-footer {
            padding: 40px 20px;
            text-align: center;
            border-top: 2px solid var(--bg-secondary);
          }

          .footer-links {
            margin-bottom: 20px;
          }

          .footer-links a {
            color: var(--text-dim);
            text-decoration: none;
            font-size: 8px;
            margin: 0 15px;
            transition: all 0.3s ease;
          }

          .footer-links a:hover {
            color: var(--cyan);
          }

          .copyright {
            font-size: 8px;
            color: var(--text-dim);
          }

          .blink {
            animation: blink 1s step-end infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
          }

          @media (max-width: 768px) {
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }

            .pixel-btn {
              width: 100%;
              max-width: 280px;
            }
          }
        `}</style>
      </Helmet>

      <div className="pixel-page">
        <div className="scanlines"></div>
        <div className="grid-bg"></div>
        <div className="gradient-overlay"></div>

        <Link to="/" className="back-to-site">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Herding Coders
        </Link>

        <section className="hero">
          <h1 className="hero-title">PIXEL POMODORO</h1>
          <p className="hero-subtitle">LEVEL UP YOUR PRODUCTIVITY</p>

          <div className="tomato-container">
            <div className="tomato">🍅</div>
          </div>

          <div className="timer-display">25:00</div>

          <p style={{ fontSize: '10px', color: 'var(--text-dim)', marginBottom: '20px' }}>
            INSERT COIN TO START<span className="blink">_</span>
          </p>

          <div className="cta-buttons">
            <a href="#download" className="pixel-btn">▶ START FOCUS</a>
            <a href="#features" className="pixel-btn secondary">? LEARN MORE</a>
          </div>
        </section>

        <section className="features" id="features">
          <h2 className="section-title">⚡ POWER-UPS ⚡</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3 className="feature-title">POMODORO TECHNIQUE</h3>
              <p className="feature-desc">Master your focus with 25-min work sessions and strategic breaks. Science-backed productivity!</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h3 className="feature-title">RETRO THEMES</h3>
              <p className="feature-desc">6 nostalgic color schemes from NES Classic to Synthwave. Pick your vibe!</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3 className="feature-title">SMART ALERTS</h3>
              <p className="feature-desc">Never miss a session with pixel-perfect notifications and 8-bit sound effects.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">TRACK PROGRESS</h3>
              <p className="feature-desc">View your productivity stats and session history. Watch your high score grow!</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3 className="feature-title">BACKGROUND MODE</h3>
              <p className="feature-desc">Timer runs even when minimized. Focus on work, not the clock.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">100% PRIVATE</h3>
              <p className="feature-desc">All data stays on your device. No accounts, no tracking, no cloud.</p>
            </div>
          </div>
        </section>

        <section className="themes" id="themes">
          <h2 className="section-title">🎨 SELECT YOUR THEME 🎨</h2>

          <div className="themes-showcase">
            <div className="theme-pill theme-nes">NES CLASSIC</div>
            <div className="theme-pill theme-gameboy">GAME BOY</div>
            <div className="theme-pill theme-synthwave">SYNTHWAVE</div>
            <div className="theme-pill theme-amber">AMBER CRT</div>
            <div className="theme-pill theme-c64">C64</div>
            <div className="theme-pill theme-sunset">SUNSET</div>
          </div>
        </section>

        <section className="stats">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">SESSIONS UNLIMITED</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">RETRO THEMES</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">DATA COLLECTED</span>
            </div>
          </div>
        </section>

        <section className="download" id="download">
          <div className="download-box">
            <h2 className="download-title">READY PLAYER ONE?</h2>
            <p className="download-text">
              Pixel Pomodoro will transform your productivity into an 8-bit adventure.
              Free forever. No ads. No BS.
            </p>

            <div style={{
              fontSize: '24px',
              color: 'var(--yellow)',
              textShadow: '3px 3px 0 var(--primary)',
              margin: '30px 0',
              animation: 'blink 1.5s step-end infinite'
            }}>
              COMING SOON
            </div>

            <p style={{ fontSize: '8px', color: 'var(--text-dim)', marginTop: '30px' }}>
              STAY TUNED FOR LAUNCH<span className="blink">_</span>
            </p>
          </div>
        </section>

        <footer className="pixel-footer">
          <div className="footer-links">
            <Link to="/pixelpomodoro/privacy-policy">PRIVACY POLICY</Link>
            <a href="mailto:georgejstark@gmail.com">CONTACT</a>
          </div>
          <p className="copyright">
            © 2026 HERDING CODERS • MADE WITH 🍅 AND ☕
          </p>
        </footer>
      </div>
    </Layout>
  )
}

export default PixelPomodoro
