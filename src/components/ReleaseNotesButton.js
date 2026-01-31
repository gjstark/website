import React, { useState, useEffect, useCallback } from 'react'

/**
 * ReleaseNotesButton - A reusable release notes button and modal component
 * 
 * Props:
 * @param {string} apiUrl - Base URL for the release notes API
 * @param {string} packageId - Package identifier for fetching release notes
 * @param {string} fullNotesUrl - URL to view full release notes externally
 * @param {string} apiKey - Optional API key for private packages (passed as Bearer token)
 * @param {boolean} showBadge - Whether to show the "NEW" badge indicator
 * @param {object} theme - Theme configuration (uses CSS variables from parent by default)
 */
const ReleaseNotesButton = ({
  apiUrl,
  packageId,
  fullNotesUrl,
  apiKey,
  showBadge = true,
  theme = {}
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [releases, setReleases] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchReleaseNotes = useCallback(async () => {
    if (!apiUrl || !packageId) {
      setError('API URL or Package ID not configured')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const headers = {
        'Accept': 'application/json',
      }
      
      // Add Authorization header for private packages
      if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`
      }
      
      const response = await fetch(`${apiUrl}/api/public/releases/${packageId}`, {
        method: 'GET',
        headers,
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch release notes (${response.status})`)
      }

      const data = await response.json()
      setReleases(data.releases || [])
    } catch (err) {
      setError(err.message || 'Failed to load release notes')
    } finally {
      setLoading(false)
    }
  }, [apiUrl, packageId, apiKey])

  const handleOpen = () => {
    setIsOpen(true)
    if (!releases && !loading) {
      fetchReleaseNotes()
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const getChangeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'feature':
        return '✨'
      case 'bugfix':
      case 'bug':
        return '🐛'
      case 'breaking':
        return '💥'
      case 'security':
        return '🔒'
      case 'deprecation':
        return '⚠️'
      case 'improvement':
        return '⚡'
      default:
        return '📝'
    }
  }

  const getTypeLabel = (type) => {
    switch (type?.toLowerCase()) {
      case 'major':
        return { text: 'MAJOR', color: 'var(--rn-primary, #ff2a6d)' }
      case 'minor':
        return { text: 'MINOR', color: 'var(--rn-cyan, #05d9e8)' }
      case 'patch':
        return { text: 'PATCH', color: 'var(--rn-yellow, #ffe66d)' }
      default:
        return { text: type?.toUpperCase() || 'RELEASE', color: 'var(--rn-text-dim, #7a5980)' }
    }
  }

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      })
    } catch {
      return dateString
    }
  }

  // Strip HTML tags and get plain text (prevents XSS while handling HTML from API)
  const stripHtml = (html) => {
    if (typeof html !== 'string') return ''
    const div = document.createElement('div')
    div.innerHTML = html
    return div.textContent || div.innerText || ''
  }

  // Escape HTML to prevent XSS (for non-HTML text fields)
  const escapeHtml = (text) => {
    if (typeof text !== 'string') return ''
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }

  return (
    <>
      <style>{`
        .rn-button {
          --rn-bg-dark: ${theme.bgDark || 'var(--bg-dark, #0d0221)'};
          --rn-bg-secondary: ${theme.bgSecondary || 'var(--bg-secondary, #1a0533)'};
          --rn-primary: ${theme.primary || 'var(--primary, #ff2a6d)'};
          --rn-cyan: ${theme.cyan || 'var(--cyan, #05d9e8)'};
          --rn-magenta: ${theme.magenta || 'var(--magenta, #d300c5)'};
          --rn-yellow: ${theme.yellow || 'var(--yellow, #ffe66d)'};
          --rn-text: ${theme.text || 'var(--text, #f5f5f5)'};
          --rn-text-dim: ${theme.textDim || 'var(--text-dim, #7a5980)'};
          
          position: fixed;
          top: 20px;
          right: 20px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          font-family: 'Press Start 2P', monospace;
          font-size: 8px;
          color: var(--rn-text);
          background: rgba(13, 2, 33, 0.9);
          border: 2px solid var(--rn-cyan);
          cursor: pointer;
          z-index: 100;
          transition: all 0.3s ease;
        }

        .rn-button:hover {
          background: var(--rn-cyan);
          color: var(--rn-bg-dark);
          box-shadow: 0 0 20px var(--rn-cyan);
        }

        .rn-button-badge {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: var(--rn-primary);
          border-radius: 50%;
          animation: rn-pulse 2s ease-in-out infinite;
        }

        @keyframes rn-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        .rn-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
          animation: rn-fade-in 0.2s ease;
        }

        @keyframes rn-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .rn-modal {
          background: var(--rn-bg-secondary);
          border: 4px solid var(--rn-primary);
          max-width: 600px;
          width: 100%;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          position: relative;
          animation: rn-slide-up 0.3s ease;
          box-shadow: 
            8px 8px 0 rgba(255, 42, 109, 0.3),
            0 0 60px rgba(255, 42, 109, 0.2);
        }

        @keyframes rn-slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rn-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 2px solid var(--rn-text-dim);
          background: var(--rn-bg-dark);
        }

        .rn-modal-title {
          font-family: 'Press Start 2P', monospace;
          font-size: 12px;
          color: var(--rn-yellow);
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0;
        }

        .rn-modal-close {
          background: transparent;
          border: 2px solid var(--rn-text-dim);
          color: var(--rn-text);
          width: 32px;
          height: 32px;
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rn-modal-close:hover {
          border-color: var(--rn-primary);
          color: var(--rn-primary);
          box-shadow: 0 0 10px var(--rn-primary);
        }

        .rn-modal-content {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          scrollbar-width: thin;
          scrollbar-color: var(--rn-primary) var(--rn-bg-dark);
        }

        .rn-modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .rn-modal-content::-webkit-scrollbar-track {
          background: var(--rn-bg-dark);
        }

        .rn-modal-content::-webkit-scrollbar-thumb {
          background: var(--rn-primary);
        }

        .rn-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          gap: 20px;
        }

        .rn-loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid var(--rn-bg-dark);
          border-top-color: var(--rn-cyan);
          border-radius: 50%;
          animation: rn-spin 1s linear infinite;
        }

        @keyframes rn-spin {
          to { transform: rotate(360deg); }
        }

        .rn-loading-text {
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          color: var(--rn-text-dim);
        }

        .rn-error {
          text-align: center;
          padding: 40px;
        }

        .rn-error-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .rn-error-message {
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          color: var(--rn-primary);
          margin-bottom: 20px;
          line-height: 1.8;
        }

        .rn-retry-btn {
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          padding: 15px 30px;
          background: var(--rn-bg-dark);
          border: 2px solid var(--rn-cyan);
          color: var(--rn-text);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .rn-retry-btn:hover {
          background: var(--rn-cyan);
          color: var(--rn-bg-dark);
        }

        .rn-release {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px dashed var(--rn-text-dim);
        }

        .rn-release:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .rn-release-header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .rn-release-version {
          font-family: 'Press Start 2P', monospace;
          font-size: 14px;
          color: var(--rn-cyan);
          text-shadow: 0 0 10px var(--rn-cyan);
        }

        .rn-release-date {
          font-family: 'Press Start 2P', monospace;
          font-size: 8px;
          color: var(--rn-text-dim);
        }

        .rn-release-type {
          font-family: 'Press Start 2P', monospace;
          font-size: 8px;
          padding: 4px 8px;
          border: 2px solid currentColor;
        }

        .rn-changes-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .rn-change-item {
          display: flex;
          gap: 10px;
          padding: 10px 0;
          font-family: 'Press Start 2P', monospace;
          font-size: 8px;
          color: var(--rn-text);
          line-height: 1.8;
        }

        .rn-change-icon {
          flex-shrink: 0;
          font-size: 14px;
        }

        .rn-change-text {
          flex: 1;
        }

        .rn-modal-footer {
          padding: 20px;
          border-top: 2px solid var(--rn-text-dim);
          background: var(--rn-bg-dark);
        }

        .rn-full-notes-link {
          display: block;
          text-align: center;
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          padding: 15px 30px;
          background: var(--rn-primary);
          color: var(--rn-text);
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow:
            4px 4px 0 #b31d4a,
            inset -4px -4px 0 rgba(0,0,0,0.2),
            inset 4px 4px 0 rgba(255,255,255,0.2);
        }

        .rn-full-notes-link:hover {
          transform: translate(2px, 2px);
          box-shadow:
            2px 2px 0 #b31d4a,
            inset -4px -4px 0 rgba(0,0,0,0.2),
            inset 4px 4px 0 rgba(255,255,255,0.2);
        }

        .rn-empty {
          text-align: center;
          padding: 40px;
          font-family: 'Press Start 2P', monospace;
          font-size: 10px;
          color: var(--rn-text-dim);
          line-height: 2;
        }

        @media (max-width: 768px) {
          .rn-button {
            padding: 10px 15px;
            font-size: 7px;
          }

          .rn-modal {
            max-height: 90vh;
          }

          .rn-modal-title {
            font-size: 10px;
          }

          .rn-release-version {
            font-size: 12px;
          }
        }
      `}</style>

      <button 
        className="rn-button"
        onClick={handleOpen}
        aria-label="View release notes"
      >
        <span>📋</span>
        <span>RELEASE NOTES</span>
        {showBadge && <span className="rn-button-badge" />}
      </button>

      {isOpen && (
        <div 
          className="rn-modal-backdrop"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="rn-modal-title"
        >
          <div className="rn-modal">
            <div className="rn-modal-header">
              <h2 id="rn-modal-title" className="rn-modal-title">
                <span>📦</span>
                RELEASE NOTES
              </h2>
              <button 
                className="rn-modal-close"
                onClick={handleClose}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="rn-modal-content">
              {loading && (
                <div className="rn-loading">
                  <div className="rn-loading-spinner" />
                  <div className="rn-loading-text">LOADING...</div>
                </div>
              )}

              {error && (
                <div className="rn-error">
                  <div className="rn-error-icon">⚠️</div>
                  <div className="rn-error-message">{escapeHtml(error)}</div>
                  <button 
                    className="rn-retry-btn"
                    onClick={fetchReleaseNotes}
                  >
                    RETRY
                  </button>
                </div>
              )}

              {!loading && !error && releases && releases.length === 0 && (
                <div className="rn-empty">
                  No release notes available yet.<br />
                  Check back soon!
                </div>
              )}

              {!loading && !error && releases && releases.length > 0 && (
                <>
                  {releases.map((release, index) => {
                    const typeLabel = getTypeLabel(release.type)
                    return (
                      <div key={release.version || index} className="rn-release">
                        <div className="rn-release-header">
                          <span className="rn-release-version">
                            v{escapeHtml(release.version)}
                          </span>
                          <span className="rn-release-date">
                            {formatDate(release.date)}
                          </span>
                          <span 
                            className="rn-release-type"
                            style={{ color: typeLabel.color }}
                          >
                            {typeLabel.text}
                          </span>
                        </div>
                        
                        {release.changes && release.changes.length > 0 && (
                          <ul className="rn-changes-list">
                            {release.changes.map((change, changeIndex) => (
                              <li key={changeIndex} className="rn-change-item">
                                <span className="rn-change-icon">
                                  {getChangeIcon(change.type)}
                                </span>
                                <span className="rn-change-text">
                                  {stripHtml(change.description)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  })}
                </>
              )}
            </div>

            {fullNotesUrl && (
              <div className="rn-modal-footer">
                <a 
                  href={fullNotesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rn-full-notes-link"
                >
                  VIEW FULL NOTES →
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ReleaseNotesButton
