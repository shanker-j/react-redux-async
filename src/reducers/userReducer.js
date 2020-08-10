const userReducer = (state = {
  name: "SAM",
  age: 5
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      }
      break;
    case "SET_AGE_FULFILLED":
      state = {
        ...state,
        age: action.payload
      }
      break;
    default:
      state={
        ...state
      }  
  }
  return state;
}

export default userReducer;