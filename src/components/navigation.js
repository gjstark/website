import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-item-dropdown')) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const services = [
    { name: 'Engineering Team Services', path: '/services/engineering-team-services' },
    { name: 'Business Analysis Services', path: '/services/business-analysis-services' },
    { name: 'Solution Design Services', path: '/services/solution-design-services' },
    { name: 'Quality Services', path: '/services/quality-services' },
    { name: 'Delivery Services', path: '/services/delivery-services' },
  ]

  const software = [
    { name: 'Pixel Pomodoro', path: '/pixelpomodoro', description: 'Retro 8-bit focus timer' },
    { name: 'Melodia', path: '/melodia', description: 'Daily habit tracker' },
    { name: 'DevNotesPlus', path: '/devnotesplus', description: 'Release notes generator' },
  ]

  const resources = [
    { name: 'Engineering Team Assessment', path: '/team-assessment', description: 'Assess your software team' },
    { name: 'Position Descriptions', path: '/position-descriptions', description: 'Software engineering roles' },
  ]

  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const toggleDropdown = (name, e) => {
    e.stopPropagation()
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const isOpen = (name) => activeDropdown === name

  return (
    <>
      <style>{`
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 1.5rem;
          transition: all 0.3s ease;
        }
        
        .nav-container.scrolled {
          padding: 0.75rem 1.5rem;
        }
        
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          background: rgba(10, 15, 28, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
        }
        
        .nav-container.scrolled .nav-inner {
          background: rgba(10, 15, 28, 0.95);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        
        .nav-logo {
          width: auto;
          height: 60px;
          transition: transform 0.3s ease;
        }
        
        .nav-brand:hover .nav-logo {
          transform: scale(1.05);
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-item {
          position: relative;
        }
        
        .nav-item-dropdown {
          position: relative;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.625rem 1rem;
          font-family: 'Sora', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: #94a3b8;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.2s ease;
          cursor: pointer;
          background: transparent;
          border: none;
        }
        
        .nav-link:hover, .nav-link.active {
          color: #f8fafc;
          background: rgba(148, 163, 184, 0.1);
        }
        
        .nav-link.highlight {
          background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
          color: #0a0f1c;
          font-weight: 600;
        }
        
        .nav-link.highlight:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);
        }
        
        .dropdown-arrow {
          width: 12px;
          height: 12px;
          transition: transform 0.2s ease;
        }
        
        .dropdown-arrow.rotated {
          transform: rotate(180deg);
        }
        
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: #151d2e;
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 16px;
          padding: 0.75rem;
          min-width: 260px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          z-index: 1001;
          display: none;
        }
        
        .dropdown-menu.show {
          display: block;
        }
        
        .dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: #94a3b8;
          text-decoration: none;
          border-radius: 10px;
          transition: all 0.2s ease;
          font-size: 0.875rem;
        }
        
        .dropdown-item:hover {
          background: rgba(0, 212, 170, 0.1);
          color: #00d4aa;
        }
        
        .dropdown-item-desc {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 0.25rem;
        }
        
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 0.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        
        .mobile-toggle span {
          width: 24px;
          height: 2px;
          background: #f8fafc;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        .mobile-toggle.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-toggle.open span:nth-child(2) {
          opacity: 0;
        }
        
        .mobile-toggle.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
        
        .mobile-menu {
          display: none;
          position: fixed;
          top: 80px;
          left: 1rem;
          right: 1rem;
          background: rgba(21, 29, 46, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 1rem;
          max-height: calc(100vh - 100px);
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
          z-index: 999;
        }
        
        .mobile-menu.open {
          display: block;
          animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-nav-item {
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          padding: 0.75rem 0;
        }
        
        .mobile-nav-item:last-child {
          border-bottom: none;
        }
        
        .mobile-nav-link {
          display: block;
          padding: 0.75rem;
          color: #f8fafc;
          text-decoration: none;
          font-weight: 500;
          border-radius: 10px;
        }
        
        .mobile-nav-link:hover {
          background: rgba(0, 212, 170, 0.1);
        }
        
        .mobile-dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          color: #f8fafc;
          font-weight: 500;
          cursor: pointer;
          border-radius: 10px;
        }
        
        .mobile-dropdown-header:hover {
          background: rgba(148, 163, 184, 0.1);
        }
        
        .mobile-dropdown-items {
          padding-left: 1rem;
          margin-top: 0.5rem;
          display: none;
        }
        
        .mobile-dropdown-items.open {
          display: block;
        }
        
        .mobile-dropdown-item {
          display: block;
          padding: 0.625rem 0.75rem;
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.875rem;
          border-radius: 8px;
        }
        
        .mobile-dropdown-item:hover {
          color: #00d4aa;
          background: rgba(0, 212, 170, 0.05);
        }
        
        .mobile-cta {
          display: block;
          margin-top: 1rem;
          padding: 0.875rem;
          text-align: center;
          background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
          color: #0a0f1c;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
        }
        
        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          
          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
      
      <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`} role="navigation">
        <div className="nav-inner">
          <Link to="/" className="nav-brand">
            <img
              src="/herdingcoders_logo.svg"
              className="nav-logo"
              alt="Herding Coders"
            />
          </Link>
          
          <ul className="nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="active">
                Home
              </Link>
            </li>
            
            <li 
              className="nav-item nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-link" onClick={(e) => toggleDropdown('services', e)}>
                Services
                <svg className={`dropdown-arrow ${isOpen('services') ? 'rotated' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`dropdown-menu ${isOpen('services') ? 'show' : ''}`}>
                {services.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="dropdown-item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
            
            <li 
              className="nav-item nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('software')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-link" onClick={(e) => toggleDropdown('software', e)}>
                Software
                <svg className={`dropdown-arrow ${isOpen('software') ? 'rotated' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`dropdown-menu ${isOpen('software') ? 'show' : ''}`}>
                {software.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="dropdown-item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div>{item.name}</div>
                    <div className="dropdown-item-desc">{item.description}</div>
                  </Link>
                ))}
              </div>
            </li>
            
            <li className="nav-item">
              <Link to="/blog" className="nav-link" activeClassName="active">
                Blog
              </Link>
            </li>

            <li
              className="nav-item nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="nav-link" onClick={(e) => toggleDropdown('resources', e)}>
                Resources
                <svg className={`dropdown-arrow ${isOpen('resources') ? 'rotated' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`dropdown-menu ${isOpen('resources') ? 'show' : ''}`}>
                <Link
                  to="/resources"
                  className="dropdown-item"
                  onClick={() => setActiveDropdown(null)}
                >
                  All Resources
                </Link>
                {resources.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="dropdown-item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div>{item.name}</div>
                    <div className="dropdown-item-desc">{item.description}</div>
                  </Link>
                ))}
              </div>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link highlight">
                Get in Touch
              </Link>
            </li>
          </ul>
          
          <button 
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-item">
          <Link to="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
        </div>
        
        <div className="mobile-nav-item">
          <div 
            className="mobile-dropdown-header"
            onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
          >
            Services
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{ transform: activeDropdown === 'mobile-services' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={`mobile-dropdown-items ${activeDropdown === 'mobile-services' ? 'open' : ''}`}>
            {services.map((item) => (
              <Link key={item.path} to={item.path} className="mobile-dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mobile-nav-item">
          <div 
            className="mobile-dropdown-header"
            onClick={() => setActiveDropdown(activeDropdown === 'mobile-software' ? null : 'mobile-software')}
          >
            Software
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{ transform: activeDropdown === 'mobile-software' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={`mobile-dropdown-items ${activeDropdown === 'mobile-software' ? 'open' : ''}`}>
            {software.map((item) => (
              <Link key={item.path} to={item.path} className="mobile-dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mobile-nav-item">
          <Link to="/blog" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
        </div>

        <div className="mobile-nav-item">
          <div
            className="mobile-dropdown-header"
            onClick={() => setActiveDropdown(activeDropdown === 'mobile-resources' ? null : 'mobile-resources')}
          >
            Resources
            <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{ transform: activeDropdown === 'mobile-resources' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={`mobile-dropdown-items ${activeDropdown === 'mobile-resources' ? 'open' : ''}`}>
            <Link to="/resources" className="mobile-dropdown-item" onClick={() => setMobileMenuOpen(false)}>
              All Resources
            </Link>
            {resources.map((item) => (
              <Link key={item.path} to={item.path} className="mobile-dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/contact" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>
          Get in Touch
        </Link>
      </div>
    </>
  )
}

export default Navigation
