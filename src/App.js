import React from "react"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"

function App() {
  return (
    <div
      className="main-app"
      style={{
        maxWidth: `375px`,
        margin: `0 auto`,
        width: `100%`,
      }}
    >
      <Header />
      <Main />
    </div>
  )
}

export default App
