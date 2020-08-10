export function ping() {
  return {
    type: "PING",
    payload: 1
  }
}

export function pong() {
  return {
    type: "PONG",
    payload: 0
  }
}