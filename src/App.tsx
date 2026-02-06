import questionIcon from './assets/question icon-05.svg'
import brandIcon from './assets/bread-05.svg'
import loginButton from './assets/log in button-05.svg'
import happyIcon from './assets/happy-07.svg'
import laughingIcon from './assets/laughing-07.svg'
import midIcon from './assets/mid-07.svg'
import sadIcon from './assets/sad-07.svg'
import angryIcon from './assets/angry-07.svg'
import { useState } from 'react'
import './App.css'
import sectionCopy from './content/sections.json'

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState<'home' | 'section'>('home')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [sectionResponse, setSectionResponse] = useState('')
  const [shareLink, setShareLink] = useState('')
  const [reactionCounts, setReactionCounts] = useState([
    { happy: 4, laugh: 2, mid: 1, sad: 0, angry: 0 },
    { happy: 1, laugh: 0, mid: 3, sad: 0, angry: 0 },
  ])
  const [userReactions, setUserReactions] = useState<Array<keyof (typeof reactionCounts)[number] | null>>([
    null,
    null,
  ])

  const closeModal = () => setIsModalOpen(false)
  const openModal = (section: string) => {
    setActiveSection(section)
    setIsModalOpen(true)
  }
  const openSectionPage = () => {
    setIsModalOpen(false)
    setCurrentPage('section')
    const baseUrl =
      typeof window !== 'undefined' ? window.location.origin : 'https://prompty.app'
    const sessionId =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    setShareLink(`${baseUrl}/?session=${sessionId}`)
  }
  const goHome = () => {
    setCurrentPage('home')
    setSectionResponse('')
    setShareLink('')
  }
  const copyShareLink = async () => {
    if (!shareLink) return
    try {
      await navigator.clipboard.writeText(shareLink)
    } catch {
      // Ignore clipboard failures in unsupported browsers.
    }
  }
  const setReaction = (cardIndex: number, key: keyof (typeof reactionCounts)[number]) => {
    setReactionCounts((prev) =>
      prev.map((item, index) => {
        if (index !== cardIndex) return item
        const current = userReactions[cardIndex]
        if (current === key) return item
        const next = { ...item }
        if (current) {
          next[current] = Math.max(0, next[current] - 1)
        }
        next[key] = next[key] + 1
        return next
      })
    )
    setUserReactions((prev) =>
      prev.map((item, index) => (index === cardIndex ? key : item))
    )
  }

  return (
    <div className="page">
      <header className="top-bar">
        <div className="top-bar__line" />
        <div className="top-bar__brand">
          <img src={brandIcon} alt="Multigrain logo" />
          <span>Multigrain</span>
        </div>
        <h1 className="page-title">Prompty</h1>
        <div className="top-bar__controls">
          <button className="icon-button" type="button" aria-label="Help">
            <img src={questionIcon} alt="Help" />
          </button>
          <button className="icon-button" type="button" aria-label="Log In or Sign Up">
            <img src={loginButton} alt="Log In/Sign Up" />
          </button>
        </div>
      </header>

      {currentPage === 'home' ? (
        <main className="hero">
          <div className="choice-grid">
            <button
              className="choice-card choice-card--moral"
              type="button"
              onClick={() => openModal('Moral')}
            >
              Moral
            </button>
            <button
              className="choice-card choice-card--creative"
              type="button"
              onClick={() => openModal('Creative')}
            >
              Creative
            </button>
            <button
              className="choice-card choice-card--ai"
              type="button"
              onClick={() => openModal('AI Skill Development')}
            >
              AI Skill Development
            </button>
          </div>
        </main>
      ) : (
        <main className="section-page">
          <div className="section-top">
            <div className="share-panel share-panel--compact">
              <div className="share-text">
                Share this link to invite friends to respond and react.
              </div>
              <button className="share-copy" type="button" onClick={copyShareLink}>
                Copy link
              </button>
            </div>
            <button className="back-button" type="button" onClick={goHome}>
              Back
            </button>
          </div>
          {activeSection && (
            <div className="section-content">
              <div className="section-header">
                <span className="section-kicker">Prompt</span>
                <h2 className="section-prompt">
                  {sectionCopy[activeSection] ?? `This is the ${activeSection} section`}
                </h2>
              </div>

              <div className="responses">
                <div className="response-card">
                  <div className="response-meta">
                  </div>
                  <p className="section-response">
                    {sectionResponse || 'Your response will appear here.'}
                  </p>
                  <div className="reaction-row">
                    <button type="button" onClick={() => setReaction(0, 'happy')}>
                      <img src={happyIcon} alt="Happy" />
                      <span>{reactionCounts[0].happy}</span>
                    </button>
                    <button type="button" onClick={() => setReaction(0, 'laugh')}>
                      <img src={laughingIcon} alt="Laughing" />
                      <span>{reactionCounts[0].laugh}</span>
                    </button>
                    <button type="button" onClick={() => setReaction(0, 'mid')}>
                      <img src={midIcon} alt="Neutral" />
                      <span>{reactionCounts[0].mid}</span>
                    </button>
                    <button type="button" onClick={() => setReaction(0, 'sad')}>
                      <img src={sadIcon} alt="Sad" />
                      <span>{reactionCounts[0].sad}</span>
                    </button>
                    <button type="button" onClick={() => setReaction(0, 'angry')}>
                      <img src={angryIcon} alt="Angry" />
                      <span>{reactionCounts[0].angry}</span>
                    </button>
                  </div>
                </div>

                <div className="response-card">
                  <div className="response-meta">
                  </div>
                  <p className="section-response">
                    I think the answer depends on context, but honesty should
                    lead.
                  </p>
                  <div className="reaction-row">
                    <button type="button" onClick={() => setReaction(1, 'happy')}>
                      <img src={happyIcon} alt="Happy" />
                      <span>{reactionCounts[1].happy}</span>
                    </button>
                    <button type="button" onClick={() => setReaction(1, 'laugh')}>
                      <img src={laughingIcon} alt="Laughing" />
                      <span>{reactionCounts[1].laugh}</span>
                    </button>
                    <button type="button" onClick={() => setReaction(1, 'mid')}>
                      <img src={midIcon} alt="Neutral" />
                      <span>{reactionCounts[1].mid}</span>
                    </button>
                    <button type="button" onClick={() => setReaction(1, 'sad')}>
                      <img src={sadIcon} alt="Sad" />
                      <span>{reactionCounts[1].sad}</span>
                    </button>
                    <button type="button" onClick={() => setReaction(1, 'angry')}>
                      <img src={angryIcon} alt="Angry" />
                      <span>{reactionCounts[1].angry}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      )}

      {isModalOpen && activeSection && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <button
              className="modal-close"
              type="button"
              onClick={closeModal}
              aria-label="Close"
            />
            <p className="modal-text">
              {sectionCopy[activeSection] ?? `This is the ${activeSection} section`}
            </p>
            <label className="modal-field">
              <textarea
                className="modal-textarea"
                rows={6}
                placeholder="Type your answer here..."
                value={sectionResponse}
                onChange={(event) => setSectionResponse(event.target.value)}
              />
              <button
                className="modal-submit"
                type="button"
                onClick={openSectionPage}
              >
                Submit and share
              </button>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
