import React, { useState } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import positions from "../data/position-descriptions.json"

const PositionDescriptionsPage = () => {
  const [selectedId, setSelectedId] = useState(null)
  const selected = positions.find(p => p.id === selectedId)

  const generateWordDoc = (position) => {
    const html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:w="urn:schemas-microsoft-com:office:word"
            xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="utf-8"><title>${position.title}</title>
      <style>
        body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.4; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { font-size: 18pt; text-align: center; margin-bottom: 30px; }
        h2 { font-size: 14pt; margin-top: 30px; border-bottom: 2px solid #333; padding-bottom: 5px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        td { padding: 6px 10px; vertical-align: top; }
        td:first-child { font-weight: bold; width: 200px; }
        ul { margin: 10px 0; padding-left: 25px; }
        li { margin-bottom: 5px; }
      </style></head>
      <body>
        <h1>${position.title}</h1>
        <table>
          <tr><td>POSITION TITLE:</td><td>${position.title}</td></tr>
          <tr><td>REPORTS TO:</td><td>${position.reportsTo}</td></tr>
          <tr><td>EMPLOYMENT TYPE/STATUS:</td><td>${position.employmentType}</td></tr>
          <tr><td>EMPLOYMENT STATUS:</td><td>${position.employmentStatus}</td></tr>
          <tr><td>CLASSIFICATION:</td><td>${position.classification}</td></tr>
          <tr><td>DATE REVIEWED:</td><td>${position.dateReviewed}</td></tr>
        </table>
        <h2>Company Information</h2>
        <p>${position.companyInfo}</p>
        <h2>Role Objective</h2>
        <p>${position.roleObjective}</p>
        <h2>Key Responsibilities</h2>
        <ul>${position.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>
        <h2>Required Qualifications</h2>
        <ul>${position.qualifications.map(q => `<li>${q}</li>`).join("")}</ul>
      </body></html>`
    const blob = new Blob([html], { type: "application/msword" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${position.title.replace(/\//g, "-")} - Position Description.doc`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <Layout>
      <Helmet>
        <title>Position Descriptions | Herding Coders</title>
        <meta name="description" content="Software engineering position descriptions for Development Lead, Senior Developer, Developer, Business Analyst, QA Tester, QA Lead, and UI/UX Designer." />
      </Helmet>

      <style>{`
        .pd-page {
          min-height: 100vh;
          padding-top: 140px;
          padding-bottom: 5rem;
          position: relative;
        }

        .pd-page::before {
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

        .pd-page::after {
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

        .pd-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .pd-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .pd-label {
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

        .pd-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .pd-title-highlight {
          background: linear-gradient(135deg, #00d4aa 0%, #22d3ee 50%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pd-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
        }

        .pd-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .pd-card {
          background: rgba(21, 29, 46, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 16px;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .pd-card:hover {
          background: rgba(21, 29, 46, 0.8);
          border-color: rgba(0, 212, 170, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .pd-card.active {
          background: rgba(0, 212, 170, 0.1);
          border-color: rgba(0, 212, 170, 0.4);
          box-shadow: 0 0 20px rgba(0, 212, 170, 0.1);
        }

        .pd-card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #f8fafc;
          margin: 0;
        }

        .pd-card.active .pd-card-title {
          color: #00d4aa;
        }

        .pd-detail {
          background: rgba(21, 29, 46, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pd-detail-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #f8fafc;
          margin: 0 0 1.5rem 0;
        }

        .pd-info-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 2rem;
        }

        .pd-info-table td {
          padding: 0.625rem 1rem;
          font-size: 0.95rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.08);
        }

        .pd-info-table td:first-child {
          font-weight: 600;
          color: #94a3b8;
          width: 220px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .pd-info-table td:last-child {
          color: #f8fafc;
        }

        .pd-section-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #00d4aa;
          margin: 2rem 0 0.75rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(0, 212, 170, 0.2);
        }

        .pd-section-text {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin: 0;
        }

        .pd-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pd-list li {
          position: relative;
          padding: 0.5rem 0 0.5rem 1.5rem;
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.6;
          border-bottom: 1px solid rgba(148, 163, 184, 0.05);
        }

        .pd-list li:last-child {
          border-bottom: none;
        }

        .pd-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 1rem;
          width: 6px;
          height: 6px;
          background: #00d4aa;
          border-radius: 50%;
        }

        .pd-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .pd-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-family: 'Sora', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .pd-btn-pdf {
          background: linear-gradient(135deg, #00d4aa 0%, #6366f1 100%);
          color: #0a0f1c;
        }

        .pd-btn-pdf:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 212, 170, 0.3);
        }

        .pd-btn-word {
          background: rgba(99, 102, 241, 0.15);
          color: #a5b4fc;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .pd-btn-word:hover {
          background: rgba(99, 102, 241, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
        }

        .pd-empty {
          text-align: center;
          padding: 4rem 2rem;
          background: rgba(21, 29, 46, 0.4);
          border: 1px dashed rgba(148, 163, 184, 0.15);
          border-radius: 24px;
        }

        .pd-empty-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .pd-empty-text {
          font-size: 1.125rem;
          color: #64748b;
          margin: 0;
        }

        @media print {
          body * {
            visibility: hidden;
          }
          .pd-print-area, .pd-print-area * {
            visibility: visible;
          }
          .pd-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white;
            color: #000;
            padding: 40px;
          }
          .pd-print-area .pd-detail-title {
            color: #000;
            font-size: 18pt;
            text-align: center;
          }
          .pd-print-area .pd-info-table td {
            color: #000;
            border-bottom: 1px solid #ddd;
          }
          .pd-print-area .pd-info-table td:first-child {
            color: #333;
          }
          .pd-print-area .pd-section-title {
            color: #333;
            border-bottom: 2px solid #333;
          }
          .pd-print-area .pd-section-text,
          .pd-print-area .pd-list li {
            color: #000;
          }
          .pd-print-area .pd-list li::before {
            background: #333;
          }
          .pd-actions {
            display: none !important;
          }
          nav, .nav-container, .mobile-menu, footer {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .pd-page {
            padding-top: 120px;
          }
          .pd-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          .pd-detail {
            padding: 1.5rem;
          }
          .pd-info-table td:first-child {
            width: auto;
          }
        }
      `}</style>

      <div className="pd-page">
        <div className="pd-wrapper">
          <div className="pd-header">
            <span className="pd-label">Resources</span>
            <h1 className="pd-title">
              Position{" "}
              <span className="pd-title-highlight">Descriptions</span>
            </h1>
            <p className="pd-subtitle">
              Select a position below to view its description. Download as PDF or Word for your own use.
            </p>
          </div>

          <div className="pd-grid">
            {positions.map(p => (
              <div
                key={p.id}
                className={`pd-card${selectedId === p.id ? " active" : ""}`}
                onClick={() => setSelectedId(p.id)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedId(p.id) } }}
              >
                <p className="pd-card-title">{p.title}</p>
              </div>
            ))}
          </div>

          {selected ? (
            <div className="pd-detail pd-print-area">
              <h2 className="pd-detail-title">{selected.title}</h2>

              <table className="pd-info-table">
                <tbody>
                  <tr><td>Position Title</td><td>{selected.title}</td></tr>
                  <tr><td>Reports To</td><td>{selected.reportsTo}</td></tr>
                  <tr><td>Employment Type</td><td>{selected.employmentType}</td></tr>
                  <tr><td>Employment Status</td><td>{selected.employmentStatus}</td></tr>
                  <tr><td>Classification</td><td>{selected.classification}</td></tr>
                  <tr><td>Date Reviewed</td><td>{selected.dateReviewed}</td></tr>
                </tbody>
              </table>

              <h3 className="pd-section-title">Company Information</h3>
              <p className="pd-section-text">{selected.companyInfo}</p>

              <h3 className="pd-section-title">Role Objective</h3>
              <p className="pd-section-text">{selected.roleObjective}</p>

              <h3 className="pd-section-title">Key Responsibilities</h3>
              <ul className="pd-list">
                {selected.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>

              <h3 className="pd-section-title">Required Qualifications</h3>
              <ul className="pd-list">
                {selected.qualifications.map((q, i) => <li key={i}>{q}</li>)}
              </ul>

              <div className="pd-actions">
                <button className="pd-btn pd-btn-pdf" onClick={handlePrint}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Download PDF
                </button>
                <button className="pd-btn pd-btn-word" onClick={() => generateWordDoc(selected)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Download Word
                </button>
              </div>
            </div>
          ) : (
            <div className="pd-empty">
              <div className="pd-empty-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <p className="pd-empty-text">Select a position above to view its description</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default PositionDescriptionsPage
