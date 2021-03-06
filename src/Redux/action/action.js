export function setDinner() {
  return { type: "DINNER" }
}
export function setLunch() {
  return { type: "LUNCH" }
}
export function addProduct(payload) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id: payload.id,
      name: payload.name,
      price: payload.price,
    },
  }
}
export function removeProduct() {
  return {
    type: "REMOVE_PRODUCT",
  }
}
export function showModal() {
  return {
    type: "SHOW_MODAL",
  }
}
export function hideModal() {
  return {
    type: "HIDE_MODAL",
  }
}

