import { call, put, takeLatest, select } from "redux-saga/effects";
import { addNumber } from '../actions/mathActions'

async function delayCall(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay)
  });
}

function getNewVal(state) {
  console.log("State:", state);
  return (state.math.result + 9);
}

function* handleIncrement() {
  console.log("increment");
  const newVal = yield select(getNewVal)
  console.log("new Val", newVal);
  yield call(delayCall, 2000);
  let action = addNumber(10);
  yield put({ ...action, type: action.type + "_ASYNC" });
}

function* watchIncrement() {
  yield takeLatest('ADD', handleIncrement);
  //For every click
  // yield takeEvery('ADD', handleIncrement);
  //For first click on each load of page
  // yield take('ADD');
  // yield call(handleIncrement);
}

export default watchIncrement;