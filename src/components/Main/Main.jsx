import React, { useState } from "react"
import FoodType from "../Main/components/FoodType"
import Card from "./components/Card"
import Cart from "./components/Cart"
import { useSelector } from "react-redux"
import { ContainerComponent } from "../../style/style"

function Main(props) {
  const foodtype = useSelector((state) => state.foodtypes)
  const cart = useSelector((state) => state.productlist)
  return (
    <div style={{ marginTop: `117px` }}>
      <FoodType type={foodtype} />
      <ContainerComponent>
        <Card />
        <Card />
        {console.log(cart.length > 0)}
        {cart.length > 0 ? <Cart /> : null}
      </ContainerComponent>
    </div>
  )
}

export default Main
