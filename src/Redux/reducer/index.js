import { combineReducers } from "redux"
import FoodTypes from "./FoodTypeReducer"
import Products from "./ProductReducer"
import Modal from "./ModalReducer"

const allReducers = combineReducers({
  foodtypes: FoodTypes,
  productlist: Products,
  modal: Modal,
})

export default allReducers
