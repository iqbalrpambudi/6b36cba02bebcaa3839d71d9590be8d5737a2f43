import React from "react"
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"

function App() {
  return (
    <div className="main-app" style={{ maxWidth: `460px`, margin: `0 auto` }}>
      <Header />
      <Main />
    </div>
  )
}

export default App
