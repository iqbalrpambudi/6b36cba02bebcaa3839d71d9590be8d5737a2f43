import { combineReducers } from "redux"
import FoodTypes from "./FoodTypeReducer"
import Products from "./ProductReducer"

const allReducers = combineReducers({
  foodtypes: FoodTypes,
  productlist: Products,
})

export default allReducers
