export function setName(name) {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: "SET_NAME",
        payload: name
      })
    }, 2000)
  };
}

export function setAge(age) {
  return {
    type: "SET_AGE",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(age)
      }, 2000)
    })
  }
}