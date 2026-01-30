import React from "react"
import Helmet from 'react-helmet'
import Layout from "../components/layout"

const ContactPage = () => (
  <Layout pageInfo={{ pageName: "Contact" }}>
    <Helmet>
      <title>Contact | Herding Coders</title>
      <meta name="description" content="Get in touch to discuss how I can help with your software development, team leadership, or consulting needs." />
    </Helmet>
    
    <style>{`
      .contact-page {
        min-height: 100vh;
        padding-top: 140px;
        padding-bottom: 5rem;
        position: relative;
      }
      
      .contact-page::before {
        content: '';
        position: absolute;
        top: 100px;
        right: -200px;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(0, 212, 170, 0.08) 0%, transparent 60%);
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
      }
      
      .contact-page::after {
        content: '';
        position: absolute;
        bottom: 100px;
        left: -200px;
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%);
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
      }
      
      .contact-wrapper {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
        z-index: 1;
      }
      
      .contact-header {
        text-align: center;
        max-width: 600px;
        margin: 0 auto 3rem;
      }
      
      .contact-label {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #00d4aa;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
        background: rgba(0, 212, 170, 0.1);
        border: 1px solid rgba(0, 212, 170, 0.2);
        border-radius: 100px;
      }
      
      .contact-title {
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 700;
        color: #f8fafc;
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
      }
      
      .contact-title-highlight {
        background: linear-gradient(135deg, #00d4aa 0%, #22d3ee 50%, #6366f1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .contact-subtitle {
        font-size: 1.125rem;
        color: #94a3b8;
        line-height: 1.7;
        margin: 0;
      }
      
      .contact-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
      }
      
      .contact-form-card {
        background: rgba(21, 29, 46, 0.6);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(148, 163, 184, 0.08);
        border-radius: 24px;
        padding: 2.5rem;
        position: relative;
        overflow: hidden;
      }
      
      .contact-form-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #00d4aa 0%, #6366f1 100%);
      }
      
      .form-group {
        margin-bottom: 1.5rem;
      }
      
      .form-label {
        display: block;
        font-size: 0.875rem;
        font-weight: 600;
        color: #f8fafc;
        margin-bottom: 0.5rem;
      }
      
      .form-input,
      .form-textarea {
        width: 100%;
        padding: 1rem 1.25rem;
        font-family: 'Sora', sans-serif;
        font-size: 0.95rem;
        background: rgba(10, 15, 28, 0.6);
        border: 1px solid rgba(148, 163, 184, 0.15);
        border-radius: 12px;
        color: #f8fafc;
        transition: all 0.3s ease;
      }
      
      .form-input:focus,
      .form-textarea:focus {
        outline: none;
        border-color: #00d4aa;
        box-shadow: 0 0 0 3px rgba(0, 212, 170, 0.1);
      }
      
      .form-input::placeholder,
      .form-textarea::placeholder {
        color: #64748b;
      }
      
      .form-textarea {
        min-height: 150px;
        resize: vertical;
      }
      
      .form-submit {
        width: 100%;
        padding: 1rem 2rem;
        font-family: 'Sora', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
        color: #0a0f1c;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 24px rgba(0, 212, 170, 0.25);
      }
      
      .form-submit:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 32px rgba(0, 212, 170, 0.35);
      }
      
      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      
      .contact-info-card {
        background: rgba(21, 29, 46, 0.4);
        border: 1px solid rgba(148, 163, 184, 0.08);
        border-radius: 16px;
        padding: 1.5rem;
        transition: all 0.3s ease;
      }
      
      .contact-info-card:hover {
        background: rgba(21, 29, 46, 0.6);
        border-color: rgba(0, 212, 170, 0.2);
      }
      
      .contact-info-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, rgba(0, 212, 170, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
        border-radius: 12px;
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }
      
      .contact-info-title {
        font-size: 1rem;
        font-weight: 600;
        color: #f8fafc;
        margin-bottom: 0.25rem;
      }
      
      .contact-info-text {
        font-size: 0.9rem;
        color: #94a3b8;
        margin: 0;
      }
      
      .contact-info-link {
        font-size: 0.9rem;
        color: #00d4aa;
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      .contact-info-link:hover {
        color: #22d3ee;
      }
      
      .contact-expect {
        background: rgba(21, 29, 46, 0.4);
        border: 1px solid rgba(148, 163, 184, 0.08);
        border-radius: 16px;
        padding: 1.5rem;
      }
      
      .contact-expect-title {
        font-size: 1rem;
        font-weight: 600;
        color: #f8fafc;
        margin-bottom: 1rem;
      }
      
      .contact-expect-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .contact-expect-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.9rem;
        color: #94a3b8;
        margin-bottom: 0.75rem;
      }
      
      .contact-expect-item:last-child {
        margin-bottom: 0;
      }
      
      .contact-expect-item svg {
        color: #00d4aa;
        flex-shrink: 0;
      }
      
      @media (max-width: 768px) {
        .contact-page {
          padding-top: 120px;
        }
        
        .contact-content {
          grid-template-columns: 1fr;
        }
        
        .contact-form-card {
          padding: 2rem;
        }
      }
    `}</style>
    
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-header">
          <span className="contact-label">Get in Touch</span>
          <h1 className="contact-title">
            Let's <span className="contact-title-highlight">Connect</span>
          </h1>
          <p className="contact-subtitle">
            Have a project in mind or want to discuss how I can help your team? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-form-card">
            <form 
              method="POST" 
              name="Contact" 
              action="/thankyou/" 
              netlify-honeypot="bot-field" 
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="Contact" />
              <input type="hidden" name="bot-field" />
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="form-input"
                  placeholder="Your name"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="form-input"
                  placeholder="you@example.com"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="comments" className="form-label">Message</label>
                <textarea 
                  name="comments" 
                  id="comments" 
                  className="form-textarea"
                  placeholder="Tell me about your project or how I can help..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <h3 className="contact-info-title">Email</h3>
              <a href="mailto:georgejstark@gmail.com" className="contact-info-link">
                georgejstark@gmail.com
              </a>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">💼</div>
              <h3 className="contact-info-title">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/georgestark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-info-link"
              >
                Connect on LinkedIn
              </a>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">🐙</div>
              <h3 className="contact-info-title">GitHub</h3>
              <a 
                href="https://github.com/gstark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-info-link"
              >
                View my code
              </a>
            </div>
            
            <div className="contact-expect">
              <h3 className="contact-expect-title">What to Expect</h3>
              <ul className="contact-expect-list">
                <li className="contact-expect-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Response within 24-48 hours
                </li>
                <li className="contact-expect-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Free initial consultation
                </li>
                <li className="contact-expect-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  No obligation discussion
                </li>
                <li className="contact-expect-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Tailored recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
