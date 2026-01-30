import React from 'react'
import { Link } from 'gatsby'

const SoftwareSection = () => {
  const products = [
    {
      name: 'Pixel Pomodoro',
      tagline: 'Level up your productivity',
      description: 'A retro 8-bit style Pomodoro timer app with multiple nostalgic themes. Master your focus with science-backed time management.',
      icon: '🍅',
      link: '/pixelpomodoro',
      gradient: 'linear-gradient(135deg, #ff2a6d 0%, #d300c5 100%)',
      bgGlow: 'rgba(255, 42, 109, 0.15)',
      features: ['6 Retro Themes', 'Session Tracking', '100% Private'],
      status: 'Coming Soon'
    },
    {
      name: 'Melodia',
      tagline: 'Your daily habit companion',
      description: 'Track daily habits, monitor health metrics, and journal your progress. Build better habits one day at a time.',
      icon: '🎵',
      link: '/melodia',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      bgGlow: 'rgba(99, 102, 241, 0.15)',
      features: ['Habit Tracking', 'Health Metrics', 'Daily Notes'],
      status: 'Available'
    }
  ]

  return (
    <>
      <style>{`
        .software-section {
          position: relative;
          padding: 8rem 0;
          overflow: hidden;
        }
        
        .software-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse 60% 40% at 20% 50%, rgba(255, 42, 109, 0.06) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(99, 102, 241, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .software-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }
        
        .software-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
        }
        
        .software-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f59e0b;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 100px;
        }
        
        .software-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .software-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
        }
        
        .software-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
          gap: 2rem;
        }
        
        .product-card {
          position: relative;
          background: rgba(21, 29, 46, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          overflow: hidden;
          text-decoration: none;
          display: block;
        }
        
        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .product-card-1::before {
          background: linear-gradient(90deg, #ff2a6d 0%, #d300c5 100%);
        }
        
        .product-card-2::before {
          background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
        }
        
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }
        
        .product-card:hover::before {
          opacity: 1;
        }
        
        .product-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        
        .product-card:hover .product-glow {
          opacity: 0.5;
        }
        
        .product-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        .product-icon-wrap {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          font-size: 2.5rem;
          transition: transform 0.4s ease;
        }
        
        .product-card:hover .product-icon-wrap {
          transform: scale(1.1) rotate(-5deg);
        }
        
        .product-status {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.375rem 0.75rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .status-coming {
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        
        .status-available {
          background: rgba(0, 212, 170, 0.15);
          color: #00d4aa;
          border: 1px solid rgba(0, 212, 170, 0.3);
        }
        
        .product-content {
          position: relative;
          z-index: 1;
        }
        
        .product-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 0.25rem;
          transition: color 0.3s ease;
        }
        
        .product-card-1:hover .product-name {
          color: #ff2a6d;
        }
        
        .product-card-2:hover .product-name {
          color: #818cf8;
        }
        
        .product-tagline {
          font-size: 0.95rem;
          color: #64748b;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        
        .product-description {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .product-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .product-feature {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.5rem 0.875rem;
          background: rgba(148, 163, 184, 0.08);
          color: #94a3b8;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .product-feature::before {
          content: '✓';
          font-size: 0.7rem;
          color: #00d4aa;
        }
        
        .product-card:hover .product-feature {
          background: rgba(0, 212, 170, 0.1);
        }
        
        .product-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: #f8fafc;
          transition: all 0.3s ease;
        }
        
        .product-link svg {
          transition: transform 0.3s ease;
        }
        
        .product-card:hover .product-link svg {
          transform: translateX(4px);
        }
        
        .product-card-1:hover .product-link {
          color: #ff2a6d;
        }
        
        .product-card-2:hover .product-link {
          color: #818cf8;
        }
        
        @media (max-width: 768px) {
          .software-section {
            padding: 5rem 0;
          }
          
          .software-grid {
            grid-template-columns: 1fr;
          }
          
          .product-card {
            padding: 1.75rem;
          }
          
          .product-icon-wrap {
            width: 60px;
            height: 60px;
            font-size: 2rem;
          }
        }
      `}</style>
      
      <section className="software-section" id="software">
        <div className="software-wrapper">
          <div className="software-header">
            <span className="software-label">My Products</span>
            <h2 className="software-title">Software I've Built</h2>
            <p className="software-subtitle">
              Beyond consulting, I build consumer apps that solve real problems 
              with delightful user experiences.
            </p>
          </div>
          
          <div className="software-grid">
            {products.map((product, index) => (
              <Link 
                to={product.link} 
                className={`product-card product-card-${index + 1}`} 
                key={index}
              >
                <div className="product-glow" style={{ background: product.bgGlow }}></div>
                
                <div className="product-header">
                  <div 
                    className="product-icon-wrap"
                    style={{ background: product.gradient }}
                  >
                    {product.icon}
                  </div>
                  <span className={`product-status ${product.status === 'Coming Soon' ? 'status-coming' : 'status-available'}`}>
                    {product.status}
                  </span>
                </div>
                
                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-tagline">{product.tagline}</p>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-features">
                    {product.features.map((feature, featureIndex) => (
                      <span className="product-feature" key={featureIndex}>{feature}</span>
                    ))}
                  </div>
                  
                  <span className="product-link">
                    Explore {product.name}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SoftwareSection
