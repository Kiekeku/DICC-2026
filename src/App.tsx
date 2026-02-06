import './App.css'

function App() {
  return (
    <div className="page">
      <header className="top-bar">
        <div className="top-bar__line" />
        <div className="top-bar__controls">
          <div className="pill pill--faces" aria-label="Mood selector">
            <span className="face face--happy" role="img" aria-label="happy">
              🙂
            </span>
            <span className="face face--neutral" role="img" aria-label="neutral">
              😐
            </span>
            <span className="face face--sad" role="img" aria-label="sad">
              🙁
            </span>
          </div>
          <button className="pill pill--icon" type="button" aria-label="Help">
            ?
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
