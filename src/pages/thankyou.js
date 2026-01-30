import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Layout from "../components/layout"

const ThankYouPage = () => (
  <Layout>
    <Helmet>
      <title>Thank You | Herding Coders</title>
    </Helmet>
    
    <style>{`
      .thankyou-page {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 140px 2rem 5rem;
        position: relative;
      }
      
      .thankyou-page::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(0, 212, 170, 0.1) 0%, transparent 60%);
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
      }
      
      .thankyou-card {
        max-width: 600px;
        text-align: center;
        background: rgba(21, 29, 46, 0.6);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(148, 163, 184, 0.08);
        border-radius: 32px;
        padding: 4rem;
        position: relative;
        z-index: 1;
      }
      
      .thankyou-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #00d4aa 0%, #6366f1 100%);
        border-radius: 32px 32px 0 0;
      }
      
      .thankyou-icon {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
        border-radius: 50%;
        font-size: 2.5rem;
        margin: 0 auto 2rem;
        animation: bounce 2s ease-in-out infinite;
      }
      
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      .thankyou-title {
        font-size: 2rem;
        font-weight: 700;
        color: #f8fafc;
        margin-bottom: 1rem;
      }
      
      .thankyou-title-highlight {
        background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .thankyou-text {
        font-size: 1.125rem;
        color: #94a3b8;
        line-height: 1.7;
        margin-bottom: 2rem;
      }
      
      .thankyou-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        font-family: 'Sora', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
        color: #0a0f1c;
        border-radius: 100px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 4px 24px rgba(0, 212, 170, 0.25);
      }
      
      .thankyou-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 32px rgba(0, 212, 170, 0.35);
        color: #0a0f1c;
      }
    `}</style>
    
    <div className="thankyou-page">
      <div className="thankyou-card">
        <div className="thankyou-icon">✓</div>
        <h1 className="thankyou-title">
          <span className="thankyou-title-highlight">Thank You!</span>
        </h1>
        <p className="thankyou-text">
          Your message has been sent successfully. I'll get back to you within 
          24-48 hours. In the meantime, feel free to explore the blog or check 
          out my software projects.
        </p>
        <Link to="/" className="thankyou-btn">
          Back to Home
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  </Layout>
)

export default ThankYouPage
