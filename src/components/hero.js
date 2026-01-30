import React from 'react'
import { Link } from 'gatsby'

const Hero = ({ data }) => {
  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 0 100px;
          overflow: hidden;
        }
        
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        
        .hero-bg::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(0, 212, 170, 0.12) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(60px);
        }
        
        .hero-bg::after {
          content: '';
          position: absolute;
          bottom: -10%;
          left: -15%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(80px);
        }
        
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%);
        }
        
        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-text {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-label {
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
        
        .hero-label::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #00d4aa;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #f8fafc;
          margin-bottom: 1.5rem;
        }
        
        .hero-title-highlight {
          background: linear-gradient(135deg, #00d4aa 0%, #22d3ee 50%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #94a3b8;
          margin-bottom: 2rem;
          max-width: 540px;
        }
        
        .hero-stats {
          display: flex;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(148, 163, 184, 0.1);
        }
        
        .hero-stat {
          text-align: left;
        }
        
        .hero-stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #00d4aa;
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        
        .hero-stat-label {
          font-size: 0.875rem;
          color: #64748b;
        }
        
        .hero-cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.75rem;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .hero-btn-primary {
          background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
          color: #0a0f1c;
          box-shadow: 0 4px 24px rgba(0, 212, 170, 0.25);
        }
        
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 212, 170, 0.35);
          color: #0a0f1c;
        }
        
        .hero-btn-secondary {
          background: transparent;
          color: #f8fafc;
          border: 2px solid rgba(148, 163, 184, 0.2);
        }
        
        .hero-btn-secondary:hover {
          border-color: #00d4aa;
          background: rgba(0, 212, 170, 0.05);
          color: #f8fafc;
        }
        
        .hero-visual {
          position: relative;
          animation: fadeInUp 0.8s 0.2s ease forwards;
          opacity: 0;
        }
        
        .hero-card-stack {
          position: relative;
          height: 450px;
        }
        
        .hero-card {
          position: absolute;
          background: rgba(21, 29, 46, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
          transition: all 0.4s ease;
        }
        
        .hero-card:hover {
          transform: translateY(-8px) !important;
        }
        
        .hero-card-1 {
          top: 0;
          left: 0;
          right: 60px;
          z-index: 3;
          animation: float 6s ease-in-out infinite;
        }
        
        .hero-card-2 {
          top: 120px;
          left: 40px;
          right: 20px;
          z-index: 2;
          animation: float 6s 1s ease-in-out infinite;
        }
        
        .hero-card-3 {
          top: 240px;
          left: 80px;
          right: 0;
          z-index: 1;
          animation: float 6s 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        
        .hero-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .hero-card-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
          border-radius: 10px;
          font-size: 1.25rem;
        }
        
        .hero-card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #f8fafc;
          margin: 0;
        }
        
        .hero-card-subtitle {
          font-size: 0.75rem;
          color: #64748b;
          margin: 0;
        }
        
        .hero-card-content {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.6;
          margin: 0;
        }
        
        .hero-card-tag {
          display: inline-block;
          padding: 0.25rem 0.625rem;
          background: rgba(0, 212, 170, 0.15);
          color: #00d4aa;
          font-size: 0.7rem;
          font-weight: 500;
          border-radius: 6px;
          margin-right: 0.5rem;
          margin-top: 0.75rem;
        }
        
        @media (max-width: 900px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-text {
            order: 2;
          }
          
          .hero-visual {
            order: 1;
            margin-bottom: 2rem;
          }
          
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-cta {
            justify-content: center;
          }
          
          .hero-card-stack {
            height: 380px;
            max-width: 400px;
            margin: 0 auto;
          }
          
          .hero-card-1 {
            right: 40px;
          }
          
          .hero-card-2 {
            left: 20px;
            right: 0;
            top: 100px;
          }
          
          .hero-card-3 {
            left: 40px;
            top: 200px;
          }
        }
      `}</style>
      
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-grid"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-label">20+ Years in Software Development</span>
            
            <h1 className="hero-title">
              Building Great Software &{' '}
              <span className="hero-title-highlight">Great Teams</span>
            </h1>
            
            <p className="hero-description">
              I'm George Stark—a software leader passionate about delivering exceptional products 
              and empowering engineering teams. From strategy to execution, I help organizations 
              ship better software, faster.
            </p>
            
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">20+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">10+</div>
                <div className="hero-stat-label">Teams Led</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">50+</div>
                <div className="hero-stat-label">Projects Delivered</div>
              </div>
            </div>
            
            <div className="hero-cta">
              <Link to="/contact" className="hero-btn hero-btn-primary">
                Work With Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/blog" className="hero-btn hero-btn-secondary">
                Read the Blog
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hero-card hero-card-1">
                <div className="hero-card-header">
                  <div className="hero-card-icon">🚀</div>
                  <div>
                    <h3 className="hero-card-title">Engineering Leadership</h3>
                    <p className="hero-card-subtitle">Team building & delivery</p>
                  </div>
                </div>
                <p className="hero-card-content">
                  Helping teams ship high-quality software through agile practices, 
                  mentorship, and a culture of continuous improvement.
                </p>
                <span className="hero-card-tag">Agile</span>
                <span className="hero-card-tag">DevOps</span>
                <span className="hero-card-tag">Mentorship</span>
              </div>
              
              <div className="hero-card hero-card-2">
                <div className="hero-card-header">
                  <div className="hero-card-icon">💡</div>
                  <div>
                    <h3 className="hero-card-title">Solution Architecture</h3>
                    <p className="hero-card-subtitle">Design & strategy</p>
                  </div>
                </div>
                <p className="hero-card-content">
                  Designing scalable, maintainable systems that align with business 
                  goals and technical excellence.
                </p>
              </div>
              
              <div className="hero-card hero-card-3">
                <div className="hero-card-header">
                  <div className="hero-card-icon">📱</div>
                  <div>
                    <h3 className="hero-card-title">Product Development</h3>
                    <p className="hero-card-subtitle">From idea to launch</p>
                  </div>
                </div>
                <p className="hero-card-content">
                  Building consumer apps like Pixel Pomodoro and Melodia with 
                  focus on user experience and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
