const mathReducer = (state = {
  result: 1,
  lastValue: []
}, action) => {
  switch (action.type) {
    case "ADD_ASYNC":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValue: [...state.lastValue, action.payload]
      }
      break;
    case "SUBTRACT_ASYNC":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValue: [...state.lastValue, action.payload]
      }
      break;
    default:
      state = {
        ...state
      }
  }
  return state;
}

export default mathReducer;