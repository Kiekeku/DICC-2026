import emojiIcon from './assets/emoji icon-05.svg'
import questionIcon from './assets/question icon-05.svg'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="top-bar">
        <div className="top-bar__line" />
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
          <button className="choice-card choice-card--moral" type="button">
            Moral
          </button>
          <button className="choice-card choice-card--creative" type="button">
            Creative
          </button>
          <button className="choice-card choice-card--ai" type="button">
            AI Skill Development
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
