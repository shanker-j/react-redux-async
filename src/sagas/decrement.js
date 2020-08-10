import { call, put, takeLatest } from "redux-saga/effects";

import { subtractNumber } from '../actions/mathActions'

async function delayCall(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay)
  });
}


function* handleDecrement() {
  console.log("decrement")
  yield call(delayCall, 2000);
  let action = subtractNumber(10);
  yield put({ ...action, type: action.type + "_ASYNC" });
}

function* watchDecrement() {
  yield takeLatest('SUBTRACT', handleDecrement);
}

export default watchDecrement;