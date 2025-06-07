import React from 'react'
import Header from './components/Header'
import CVDisplay from './components/CVDisplay'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-content">
        <CVDisplay />
      </main>
      <footer className="app-footer">
        <p>CV Maker - Built with React</p>
      </footer>
    </div>
  )
}

export default App
