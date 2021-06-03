import React, { useState } from "react"
import FoodType from "../Main/components/FoodType"
import { useSelector } from "react-redux"

function Main(props) {
  const foodtype = useSelector((state) => state)
  return (
    <div>
      <FoodType type={foodtype} />
    </div>
  )
}

export default Main
