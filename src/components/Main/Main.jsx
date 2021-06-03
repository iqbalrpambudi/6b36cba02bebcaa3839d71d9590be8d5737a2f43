import React, { useState } from "react"
import FoodType from "../Main/components/FoodType"
import Card from "./components/Card"
import { useSelector } from "react-redux"

function Main(props) {
  const foodtype = useSelector((state) => state)
  return (
    <>
      <FoodType type={foodtype} />
      <div style={{ padding: `0 16px`, overflowY: `auto`, display: "block" }}>
        <Card />
        <Card />
      </div>
    </>
  )
}

export default Main
