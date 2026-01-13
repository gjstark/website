import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

const PrivacyPolicy = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy - Pixel Pomodoro</title>
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
          }

          .privacy-page {
            font-family: 'Press Start 2P', monospace;
            background: var(--bg-dark);
            color: var(--text);
            min-height: 100vh;
            line-height: 2.2;
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

          .privacy-header {
            padding: 20px;
            border-bottom: 4px solid var(--bg-secondary);
          }

          .header-content {
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            font-size: 10px;
            color: var(--primary);
            text-decoration: none;
            text-shadow: 0 0 10px var(--primary);
          }

          .back-link {
            color: var(--cyan);
            text-decoration: none;
            font-size: 8px;
            transition: all 0.3s ease;
          }

          .back-link:hover {
            text-shadow: 0 0 10px var(--cyan);
          }

          .privacy-main {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 20px;
          }

          .page-title {
            font-size: clamp(14px, 3vw, 20px);
            color: var(--yellow);
            text-shadow: 3px 3px 0 var(--primary);
            margin-bottom: 10px;
            text-align: center;
          }

          .last-updated {
            font-size: 8px;
            color: var(--text-dim);
            text-align: center;
            margin-bottom: 50px;
          }

          .content-box {
            background: var(--bg-secondary);
            border: 4px solid var(--text);
            padding: 40px;
            margin-bottom: 30px;
          }

          .content-box h2 {
            font-size: 10px;
            color: var(--cyan);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px dashed var(--text-dim);
          }

          .content-box h3 {
            font-size: 9px;
            color: var(--primary);
            margin: 25px 0 15px 0;
          }

          .content-box p {
            font-size: 8px;
            color: var(--text);
            margin-bottom: 15px;
          }

          .content-box ul {
            list-style: none;
            margin: 15px 0;
            padding-left: 20px;
          }

          .content-box li {
            font-size: 8px;
            color: var(--text);
            margin-bottom: 10px;
            position: relative;
          }

          .content-box li::before {
            content: '►';
            color: var(--primary);
            position: absolute;
            left: -20px;
          }

          .highlight-box {
            background: rgba(5, 217, 232, 0.1);
            border: 2px solid var(--cyan);
            padding: 20px;
            margin: 20px 0;
          }

          .highlight-box p {
            color: var(--cyan);
            margin: 0;
          }

          .privacy-main a {
            color: var(--cyan);
            text-decoration: none;
          }

          .privacy-main a:hover {
            text-decoration: underline;
          }

          .contact-box {
            text-align: center;
            padding: 30px;
            background: var(--bg-secondary);
            border: 4px solid var(--primary);
          }

          .contact-box h2 {
            border: none;
            margin-bottom: 15px;
          }

          .email-link {
            font-size: 10px;
            color: var(--primary);
            text-shadow: 0 0 10px var(--primary);
          }

          .privacy-footer {
            padding: 30px 20px;
            text-align: center;
            border-top: 2px solid var(--bg-secondary);
          }

          .copyright {
            font-size: 8px;
            color: var(--text-dim);
          }

          @media (max-width: 768px) {
            .content-box {
              padding: 25px 20px;
            }

            .header-content {
              flex-direction: column;
              gap: 15px;
            }
          }
        `}</style>
      </Helmet>

      <div className="privacy-page">
        <div className="scanlines"></div>

        <header className="privacy-header">
          <div className="header-content">
            <Link to="/pixelpomodoro" className="logo">🍅 PIXEL POMODORO</Link>
            <Link to="/pixelpomodoro" className="back-link">← BACK TO GAME</Link>
          </div>
        </header>

        <main className="privacy-main">
          <h1 className="page-title">📜 PRIVACY POLICY 📜</h1>
          <p className="last-updated">LAST UPDATED: JANUARY 13, 2026</p>

          <div className="content-box">
            <h2>🎮 INTRODUCTION</h2>
            <p>
              This Privacy Policy describes how Pixel Pomodoro ("we", "our", or "the app")
              handles information when you use our mobile application. We are committed to
              protecting your privacy and being transparent about our data practices.
            </p>
          </div>

          <div className="content-box">
            <h2>💾 DATA STORED LOCALLY</h2>
            <p>
              Pixel Pomodoro stores the following information <strong>locally on your device only</strong>:
            </p>
            <ul>
              <li><strong>Timer Settings:</strong> Your preferred work duration, break duration, and session configurations</li>
              <li><strong>Session History:</strong> Records of your completed Pomodoro sessions including timestamps and duration</li>
              <li><strong>App Preferences:</strong> Your selected theme and notification preferences</li>
            </ul>

            <div className="highlight-box">
              <p>⚡ THIS DATA NEVER LEAVES YOUR DEVICE. WE DO NOT COLLECT, TRANSMIT, OR STORE ANY OF YOUR DATA ON EXTERNAL SERVERS. ⚡</p>
            </div>
          </div>

          <div className="content-box">
            <h2>🚫 DATA WE DO NOT COLLECT</h2>
            <p>Pixel Pomodoro does <strong>NOT</strong> collect:</p>
            <ul>
              <li>Personal identification information (name, email, phone number)</li>
              <li>Location data</li>
              <li>Device identifiers or advertising IDs</li>
              <li>Usage analytics or tracking data</li>
              <li>Any data for advertising purposes</li>
            </ul>
          </div>

          <div className="content-box">
            <h2>🔗 THIRD-PARTY SERVICES</h2>
            <h3>GOOGLE FONTS</h3>
            <p>
              The app may download fonts from Google Fonts to display text. This connection
              is subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
              No personal data is shared with Google through this service.
            </p>
          </div>

          <div className="content-box">
            <h2>🔐 PERMISSIONS</h2>
            <p>Pixel Pomodoro may request the following permissions:</p>
            <ul>
              <li><strong>Notifications:</strong> To alert you when timer sessions complete</li>
              <li><strong>Foreground Service:</strong> To keep the timer running accurately in the background</li>
              <li><strong>Wake Lock:</strong> To keep the screen active during timer sessions (optional)</li>
            </ul>
            <p>
              These permissions are used solely for the app's core functionality and not for data collection.
            </p>
          </div>

          <div className="content-box">
            <h2>🛡️ DATA STORAGE & SECURITY</h2>
            <p>
              All app data is stored locally on your device using encrypted local storage.
              Since we don't transmit or store your data externally, your information remains under your control.
            </p>
            <p>To delete all app data, you can:</p>
            <ul>
              <li>Clear the app's data through your device settings</li>
              <li>Uninstall the application</li>
            </ul>
          </div>

          <div className="content-box">
            <h2>👶 CHILDREN'S PRIVACY</h2>
            <p>
              Pixel Pomodoro does not collect personal information from anyone, including
              children under 13. The app is safe for users of all ages.
            </p>
          </div>

          <div className="content-box">
            <h2>📝 CHANGES TO THIS POLICY</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              reflected with a new "Last Updated" date at the top of this document.
            </p>
          </div>

          <div className="contact-box">
            <h2>📧 CONTACT US</h2>
            <p>If you have any questions about this Privacy Policy, contact us at:</p>
            <a href="mailto:georgejstark@gmail.com" className="email-link">GEORGEJSTARK@GMAIL.COM</a>
          </div>
        </main>

        <footer className="privacy-footer">
          <p className="copyright">
            © 2026 HERDING CODERS • MADE WITH 🍅 AND ☕
          </p>
        </footer>
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
