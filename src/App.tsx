import emojiIcon from './assets/emoji icon-05.svg'
import questionIcon from './assets/question icon-05.svg'
import brandIcon from './assets/bread-05.svg'
import { useState } from 'react'
import './App.css'
import sectionCopy from './content/sections.json'

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const closeModal = () => setActiveSection(null)

  return (
    <div className="page">
      <header className="top-bar">
        <div className="top-bar__line" />
        <div className="top-bar__brand">
          <img src={brandIcon} alt="Multigrain logo" />
          <span>Multigrain</span>
        </div>
        <div className="top-bar__controls">
          <button className="icon-button" type="button" aria-label="Mood selector">
            <img src={emojiIcon} alt="Mood selector" />
          </button>
          <button className="icon-button" type="button" aria-label="Help">
            <img src={questionIcon} alt="Help" />
          </button>
          <button className="pill pill--text" type="button">
            Log In/Sign Up
          </button>
        </div>
      </header>

      <main className="hero">
        <div className="choice-grid">
          <button
            className="choice-card choice-card--moral"
            type="button"
            onClick={() => setActiveSection('Moral')}
          >
            Moral
          </button>
          <button
            className="choice-card choice-card--creative"
            type="button"
            onClick={() => setActiveSection('Creative')}
          >
            Creative
          </button>
          <button
            className="choice-card choice-card--ai"
            type="button"
            onClick={() => setActiveSection('AI Skill Development')}
          >
            AI Skill Development
          </button>
        </div>
      </main>

      {activeSection && (
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
              />
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
