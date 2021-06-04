import React from "react"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Modal from "./components/mini-components/Modal"
import { useSelector } from "react-redux"
function App() {
  const modal = useSelector((state) => state.modal)
  console.log(modal)
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
      <Modal show={modal} />
    </div>
  )
}

export default App
