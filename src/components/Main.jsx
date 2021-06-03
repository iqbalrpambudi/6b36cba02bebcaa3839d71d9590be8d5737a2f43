import React from "react"
import FoodType from "./mini-components/FoodType"
import Card from "./mini-components/Card"
import Cart from "./mini-components/Cart"
import { useSelector } from "react-redux"
import { ContainerComponent } from "../style/style"
import { Products } from "../assets/Products"

function Main(props) {
  const foodtype = useSelector((state) => state.foodtypes)
  const cart = useSelector((state) => state.productlist)
  return (
    <div style={{ padding: `117px 0` }}>
      <FoodType type={foodtype} />
      <ContainerComponent>
        {Products.filter((data) => data.foodtype === foodtype).map(
          (data, index) => {
            return <Card key={index} {...data} />
          }
        )}
        {cart.length > 0 ? <Cart /> : null}
      </ContainerComponent>
    </div>
  )
}

export default Main
