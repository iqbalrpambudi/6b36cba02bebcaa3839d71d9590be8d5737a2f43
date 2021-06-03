import { DINNER, LUNCH } from "../constant/constant"

export function setDinner(payload) {
  return { type: DINNER, payload }
}
export function setLunch(payload) {
  return { type: LUNCH, payload }
}
export function addProduct(payload) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id: payload.id,
      name: payload.name,
      qty: payload.qty,
    },
  }
}
export function removeProduct(id) {
  return {
    type: "REMOVE_PRODUCT",
  }
}
