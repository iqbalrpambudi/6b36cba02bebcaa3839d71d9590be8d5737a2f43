const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload]
    case "REMOVE_PRODUCT":
      return (state = [])
    default:
      return state
  }
}
export default ProductReducer
