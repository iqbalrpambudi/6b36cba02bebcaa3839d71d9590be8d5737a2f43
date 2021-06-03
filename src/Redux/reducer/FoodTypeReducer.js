const FoodTypeReducer = (state = "lunch", action) => {
  switch (action.type) {
    case "LUNCH":
      return (state = "lunch")
    case "DINNER":
      return (state = "dinner")
    default:
      return state
  }
}

export default FoodTypeReducer
