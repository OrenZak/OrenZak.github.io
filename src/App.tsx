import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://avatars.githubusercontent.com/u/8303735?v=4'} className="App-logo" alt="logo" />
        <p>
          Oren Zakay
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/orenzakay"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          className="App-link"
          href="https://www.github.com/OrenZak"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
