const pingPongReducer = (state = {
  isPing: true
}, action) => {
  switch (action.type) {
    case "PING_ASYNC":
      state = {
        ...state,
        isPing: true
      }
      break;
    case "PONG_ASYNC":
      state = {
        ...state,
        isPing: false
      }
      break;
    default:
      state = {
        ...state
      }
  }
  return state;
}

export default pingPongReducer;