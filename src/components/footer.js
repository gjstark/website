import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    services: [
      { name: 'Engineering Teams', path: '/services/engineering-team-services' },
      { name: 'Business Analysis', path: '/services/business-analysis-services' },
      { name: 'Solution Design', path: '/services/solution-design-services' },
      { name: 'Quality Services', path: '/services/quality-services' },
      { name: 'Delivery Services', path: '/services/delivery-services' },
    ],
    software: [
      { name: 'Pixel Pomodoro', path: '/pixelpomodoro' },
      { name: 'Melodia', path: '/melodia' },
    ],
    connect: [
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ]
  }

  return (
    <>
      <style>{`
        .site-footer {
          position: relative;
          background: #0a0f1c;
          border-top: 1px solid rgba(148, 163, 184, 0.08);
          overflow: hidden;
        }
        
        .footer-glow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(0, 212, 170, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .footer-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem 3rem;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          position: relative;
          z-index: 1;
        }
        
        .footer-brand {
          max-width: 320px;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
          text-decoration: none;
        }
        
        .footer-logo img {
          width: 48px;
          height: 48px;
        }
        
        .footer-logo-text {
          font-family: 'Sora', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f8fafc;
          letter-spacing: -0.02em;
        }
        
        .footer-tagline {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .footer-socials {
          display: flex;
          gap: 0.75rem;
        }
        
        .footer-social-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(148, 163, 184, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 10px;
          color: #94a3b8;
          transition: all 0.3s ease;
        }
        
        .footer-social-link:hover {
          background: rgba(0, 212, 170, 0.1);
          border-color: rgba(0, 212, 170, 0.3);
          color: #00d4aa;
        }
        
        .footer-column h4 {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f8fafc;
          margin-bottom: 1.25rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          font-size: 0.9rem;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .footer-links a:hover {
          color: #00d4aa;
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          border-top: 1px solid rgba(148, 163, 184, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }
        
        .footer-copyright {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }
        
        .footer-copyright a {
          color: #94a3b8;
          text-decoration: none;
        }
        
        .footer-copyright a:hover {
          color: #00d4aa;
        }
        
        .footer-made-with {
          font-size: 0.875rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-made-with span {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @media (max-width: 900px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .footer-brand {
            grid-column: 1 / -1;
            max-width: 100%;
            text-align: center;
          }
          
          .footer-logo {
            justify-content: center;
          }
          
          .footer-socials {
            justify-content: center;
          }
        }
        
        @media (max-width: 600px) {
          .footer-main {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-column h4 {
            margin-bottom: 1rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
      
      <footer className="site-footer">
        <div className="footer-glow"></div>
        
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/herdingcoders_logo.svg" alt="Herding Coders" />
              <span className="footer-logo-text">Herding Coders</span>
            </Link>
            <p className="footer-tagline">
              Building great software and great software teams. 
              20+ years of experience in software development and team leadership.
            </p>
            <div className="footer-socials">
              <a 
                href="https://github.com/gstark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/georgestark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:georgejstark@gmail.com" 
                className="footer-social-link"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Software</h4>
            <ul className="footer-links">
              {footerLinks.software.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Connect</h4>
            <ul className="footer-links">
              {footerLinks.connect.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <Link to="/">Herding Coders</Link>. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <span>❤️</span> and lots of ☕
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
