import React, { useState } from "react"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import assessmentData from "../data/team-assessment.json"

const { measures, ratings } = assessmentData

function getOverallRating(total) {
  const match = ratings.find(r => total >= r.min && total <= r.max)
  return match || null
}

function getMeasureColor(score) {
  if (score === 1) return "#ef4444"
  if (score === 2) return "#f59e0b"
  if (score === 3) return "#22d3ee"
  if (score === 4) return "#00d4aa"
  return "#64748b"
}

const TeamAssessmentPage = () => {
  const [scores, setScores] = useState({})

  const handleSelect = (measureId, score) => {
    setScores(prev => ({ ...prev, [measureId]: score }))
  }

  const totalScore = Object.values(scores).reduce((sum, s) => sum + s, 0)
  const allAnswered = Object.keys(scores).length === measures.length
  const overallRating = allAnswered ? getOverallRating(totalScore) : null

  return (
    <Layout>
      <Helmet>
        <title>Team Assessment | Herding Coders</title>
        <meta name="description" content="Assess your software engineering team across key measures including communication, behaviour, delivery, resourcing, and leadership." />
      </Helmet>

      <style>{`
        .assessment-page {
          min-height: 100vh;
          padding-top: 140px;
          padding-bottom: 5rem;
          position: relative;
        }

        .assessment-page::before {
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

        .assessment-page::after {
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

        .assessment-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .assessment-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .assessment-label {
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

        .assessment-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .assessment-title-highlight {
          background: linear-gradient(135deg, #00d4aa 0%, #22d3ee 50%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .assessment-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
        }

        .measure-section {
          background: rgba(21, 29, 46, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .measure-section.scored {
          border-color: rgba(0, 212, 170, 0.2);
        }

        .measure-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00d4aa 0%, #6366f1 100%);
        }

        .measure-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .measure-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f8fafc;
          margin: 0 0 0.5rem 0;
        }

        .measure-description {
          font-size: 0.95rem;
          color: #94a3b8;
          margin: 0;
          max-width: 700px;
          line-height: 1.6;
        }

        .measure-score-badge {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 16px;
          font-size: 1.5rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.3s ease;
        }

        .measure-score-badge.empty {
          background: rgba(100, 116, 139, 0.15);
          color: #64748b;
          border: 2px dashed rgba(100, 116, 139, 0.3);
        }

        .levels-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .level-card {
          background: rgba(10, 15, 28, 0.5);
          border: 2px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .level-card:hover {
          background: rgba(10, 15, 28, 0.8);
          border-color: rgba(148, 163, 184, 0.25);
          transform: translateY(-2px);
        }

        .level-card.selected {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .level-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .level-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.625rem;
          border-radius: 100px;
          transition: all 0.3s ease;
        }

        .level-score {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.25rem;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        .level-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .level-bullets li {
          font-size: 0.8rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
        }

        .level-bullets li:last-child {
          margin-bottom: 0;
        }

        .level-bullets li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #64748b;
          transition: background 0.3s ease;
        }

        .level-card.selected .level-bullets li::before {
          background: currentColor;
        }

        .level-check {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.3s ease;
        }

        .level-card.selected .level-check {
          opacity: 1;
          transform: scale(1);
        }

        /* Results section */
        .results-section {
          background: rgba(21, 29, 46, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 24px;
          padding: 2.5rem;
          margin-top: 2rem;
          position: relative;
          overflow: hidden;
        }

        .results-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00d4aa 0%, #6366f1 100%);
        }

        .results-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f8fafc;
          margin: 0 0 2rem 0;
          text-align: center;
        }

        .results-total {
          text-align: center;
          margin-bottom: 2rem;
        }

        .results-total-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .results-total-max {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1rem;
          color: #64748b;
        }

        .results-rating {
          text-align: center;
          padding: 1.25rem 2rem;
          border-radius: 16px;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
        }

        .results-rating-label {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
        }

        .results-rating-description {
          font-size: 0.95rem;
          margin: 0;
          opacity: 0.8;
        }

        .results-breakdown {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }

        .breakdown-item {
          text-align: center;
          background: rgba(10, 15, 28, 0.5);
          border-radius: 16px;
          padding: 1.25rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.08);
        }

        .breakdown-name {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .breakdown-score {
          font-family: 'JetBrains Mono', monospace;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1;
          transition: color 0.3s ease;
        }

        .breakdown-label {
          font-size: 0.7rem;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .results-placeholder {
          text-align: center;
          padding: 2rem;
          color: #64748b;
          font-size: 1rem;
        }

        .results-summary {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .results-summary-card {
          background: rgba(10, 15, 28, 0.5);
          border-radius: 16px;
          padding: 1.5rem;
          border-left: 3px solid;
        }

        .results-summary-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .results-summary-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f8fafc;
          margin: 0;
        }

        .results-summary-level {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.25rem 0.625rem;
          border-radius: 100px;
        }

        .results-summary-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .results-summary-bullets li {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 0.4rem;
          padding-left: 1rem;
          position: relative;
        }

        .results-summary-bullets li:last-child {
          margin-bottom: 0;
        }

        .results-summary-bullets li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #64748b;
        }

        .reset-button-wrapper {
          text-align: center;
          margin-top: 2rem;
        }

        .reset-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Sora', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.875rem 1.75rem;
          background: transparent;
          color: #94a3b8;
          border: 2px solid rgba(148, 163, 184, 0.15);
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .reset-button:hover {
          color: #f8fafc;
          border-color: rgba(239, 68, 68, 0.4);
          background: rgba(239, 68, 68, 0.1);
        }

        @media (max-width: 1024px) {
          .levels-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .results-breakdown {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .assessment-page {
            padding-top: 120px;
          }
          .measure-section {
            padding: 1.5rem;
          }
          .levels-grid {
            grid-template-columns: 1fr;
          }
          .measure-header {
            flex-direction: column;
          }
          .results-breakdown {
            grid-template-columns: repeat(2, 1fr);
          }
          .results-section {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="assessment-page">
        <div className="assessment-wrapper">
          <div className="assessment-header">
            <span className="assessment-label">Assessment Tool</span>
            <h1 className="assessment-title">
              Software Team{" "}
              <span className="assessment-title-highlight">Assessment</span>
            </h1>
            <p className="assessment-subtitle">
              {assessmentData.subtitle}
            </p>
          </div>

          {measures.map(measure => {
            const selectedScore = scores[measure.id]
            return (
              <div
                key={measure.id}
                className={`measure-section ${selectedScore ? "scored" : ""}`}
              >
                <div className="measure-header">
                  <div>
                    <h2 className="measure-name">{measure.name}</h2>
                    <p className="measure-description">{measure.description}</p>
                  </div>
                  <div
                    className={`measure-score-badge ${!selectedScore ? "empty" : ""}`}
                    style={
                      selectedScore
                        ? {
                            background: `${getMeasureColor(selectedScore)}20`,
                            color: getMeasureColor(selectedScore),
                            border: `2px solid ${getMeasureColor(selectedScore)}40`,
                          }
                        : {}
                    }
                  >
                    {selectedScore || "?"}
                  </div>
                </div>

                <div className="levels-grid">
                  {measure.levels.map(level => {
                    const isSelected = selectedScore === level.score
                    const levelColor = getMeasureColor(level.score)
                    return (
                      <div
                        key={level.score}
                        className={`level-card ${isSelected ? "selected" : ""}`}
                        onClick={() => handleSelect(measure.id, level.score)}
                        onKeyDown={e => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault()
                            handleSelect(measure.id, level.score)
                          }
                        }}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={0}
                        style={
                          isSelected
                            ? {
                                borderColor: `${levelColor}60`,
                                background: `${levelColor}10`,
                                color: levelColor,
                              }
                            : {}
                        }
                      >
                        <div
                          className="level-check"
                          style={
                            isSelected
                              ? { background: levelColor, color: "#0a0f1c" }
                              : {}
                          }
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div className="level-card-header">
                          <span
                            className="level-label"
                            style={{
                              background: isSelected ? `${levelColor}25` : `${levelColor}15`,
                              color: levelColor,
                            }}
                          >
                            {level.label}
                          </span>
                          <span
                            className="level-score"
                            style={{ color: isSelected ? levelColor : "#64748b" }}
                          >
                            +{level.score}
                          </span>
                        </div>
                        <ul className="level-bullets">
                          {level.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

          <div className="results-section">
            <h2 className="results-title">Results</h2>

            {!allAnswered ? (
              <div className="results-placeholder">
                Complete all {measures.length} measures above to see your team's overall score.
              </div>
            ) : (
              <>
                <div className="results-total">
                  <div
                    className="results-total-number"
                    style={{ color: overallRating.color }}
                  >
                    {totalScore}
                  </div>
                  <div className="results-total-max">out of {measures.length * 4}</div>
                </div>

                <div
                  className="results-rating"
                  style={{
                    background: `${overallRating.color}15`,
                    border: `1px solid ${overallRating.color}30`,
                  }}
                >
                  <p
                    className="results-rating-label"
                    style={{ color: overallRating.color }}
                  >
                    {overallRating.label}
                  </p>
                  <p
                    className="results-rating-description"
                    style={{ color: overallRating.color }}
                  >
                    {overallRating.description}
                  </p>
                </div>

                <div className="results-breakdown">
                  {measures.map(m => {
                    const s = scores[m.id]
                    const levelLabel = m.levels.find(l => l.score === s)?.label
                    return (
                      <div key={m.id} className="breakdown-item">
                        <div className="breakdown-name">{m.name}</div>
                        <div
                          className="breakdown-score"
                          style={{ color: getMeasureColor(s) }}
                        >
                          {s}
                        </div>
                        <div className="breakdown-label">{levelLabel}</div>
                      </div>
                    )
                  })}
                </div>

                <div className="results-summary">
                  {measures.map(m => {
                    const s = scores[m.id]
                    const selectedLevel = m.levels.find(l => l.score === s)
                    const color = getMeasureColor(s)
                    return (
                      <div
                        key={m.id}
                        className="results-summary-card"
                        style={{ borderLeftColor: color }}
                      >
                        <div className="results-summary-header">
                          <h3 className="results-summary-name">{m.name}</h3>
                          <span
                            className="results-summary-level"
                            style={{ background: `${color}25`, color }}
                          >
                            {selectedLevel.label} (+{s})
                          </span>
                        </div>
                        <ul className="results-summary-bullets">
                          {selectedLevel.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>

                <div className="reset-button-wrapper">
                  <button
                    className="reset-button"
                    onClick={() => setScores({})}
                  >
                    Reset Assessment
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TeamAssessmentPage
