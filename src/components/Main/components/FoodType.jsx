import React from "react"
import { FoodTypesComponent } from "../../../style/style"
import { setDinner, setLunch } from "../../../Redux/action/action"
import { useDispatch } from "react-redux"
function FoodType(props) {
  const dispatch = useDispatch()
  return (
    <FoodTypesComponent {...props}>
      <div className="foodtypes">
        <div
          className="foodtypes__button foodtypes__button--lunch"
          onClick={() => dispatch(setLunch())}
        >
          Lunch
        </div>
        <div
          className="foodtypes__button foodtypes__button--dinner"
          onClick={() => dispatch(setDinner())}
        >
          Dinner
        </div>
      </div>
    </FoodTypesComponent>
  )
}

export default FoodType
