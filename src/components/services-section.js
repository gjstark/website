import React from 'react'
import { Link } from 'gatsby'

const ServicesSection = () => {
  const services = [
    {
      icon: '👥',
      title: 'Engineering Team Services',
      description: 'Build and scale high-performing engineering teams with best practices in hiring, onboarding, and team culture.',
      link: '/services/engineering-team-services',
      tags: ['Team Building', 'Culture', 'Hiring']
    },
    {
      icon: '📋',
      title: 'Business Analysis',
      description: 'Bridge the gap between business needs and technical solutions with thorough requirements gathering and analysis.',
      link: '/services/business-analysis-services',
      tags: ['Requirements', 'Stakeholders', 'Documentation']
    },
    {
      icon: '🏗️',
      title: 'Solution Design',
      description: 'Architect scalable, maintainable systems that align with your business objectives and technical constraints.',
      link: '/services/solution-design-services',
      tags: ['Architecture', 'Scalability', 'Best Practices']
    },
    {
      icon: '✅',
      title: 'Quality Services',
      description: 'Implement comprehensive testing strategies and quality processes that ensure reliable, bug-free releases.',
      link: '/services/quality-services',
      tags: ['Testing', 'QA', 'Automation']
    },
    {
      icon: '🚢',
      title: 'Delivery Services',
      description: 'Ship software on time with agile methodologies, CI/CD pipelines, and effective project management.',
      link: '/services/delivery-services',
      tags: ['Agile', 'CI/CD', 'Project Management']
    }
  ]

  return (
    <>
      <style>{`
        .services-section {
          position: relative;
          padding: 8rem 0;
          background: linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 0.5) 50%, rgba(17, 24, 39, 0) 100%);
        }
        
        .services-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        
        .services-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }
        
        .services-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
        }
        
        .services-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 100px;
        }
        
        .services-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .services-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.5rem;
        }
        
        .service-card {
          background: rgba(21, 29, 46, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: block;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00d4aa 0%, #6366f1 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .service-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0, 212, 170, 0.03) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        
        .service-card:hover {
          background: rgba(28, 38, 64, 0.8);
          border-color: rgba(0, 212, 170, 0.2);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .service-card:hover::before,
        .service-card:hover::after {
          opacity: 1;
        }
        
        .service-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
          border: 1px solid rgba(0, 212, 170, 0.2);
          border-radius: 14px;
          font-size: 1.5rem;
          margin-bottom: 1.25rem;
          transition: all 0.4s ease;
        }
        
        .service-card:hover .service-icon {
          background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
          border-color: transparent;
          transform: scale(1.05);
        }
        
        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 0.75rem;
          transition: color 0.3s ease;
        }
        
        .service-card:hover .service-title {
          color: #00d4aa;
        }
        
        .service-description {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        
        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        
        .service-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          padding: 0.375rem 0.75rem;
          background: rgba(148, 163, 184, 0.08);
          color: #64748b;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .service-card:hover .service-tag {
          background: rgba(0, 212, 170, 0.1);
          color: #00d4aa;
        }
        
        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #00d4aa;
          transition: all 0.3s ease;
        }
        
        .service-link svg {
          transition: transform 0.3s ease;
        }
        
        .service-card:hover .service-link svg {
          transform: translateX(4px);
        }
        
        .services-cta {
          text-align: center;
          margin-top: 3rem;
        }
        
        .services-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          background: transparent;
          color: #f8fafc;
          border: 2px solid rgba(148, 163, 184, 0.2);
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .services-cta-btn:hover {
          border-color: #00d4aa;
          background: rgba(0, 212, 170, 0.05);
          color: #f8fafc;
        }
        
        @media (max-width: 768px) {
          .services-section {
            padding: 5rem 0;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .service-card {
            padding: 1.5rem;
          }
        }
      `}</style>
      
      <section className="services-section" id="services">
        <div className="services-wrapper">
          <div className="services-header">
            <span className="services-label">What I Offer</span>
            <h2 className="services-title">Services That Drive Results</h2>
            <p className="services-subtitle">
              From team leadership to technical architecture, I provide comprehensive 
              services to help your organization deliver better software.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <Link to={service.link} className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, tagIndex) => (
                    <span className="service-tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <span className="service-link">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          
          <div className="services-cta">
            <Link to="/contact" className="services-cta-btn">
              Discuss Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesSection
