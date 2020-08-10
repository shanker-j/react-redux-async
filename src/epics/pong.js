import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// import { pong } from '../actions/pingPongActions';

async function delayCall(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay)
  });
}

const pongEpic = action$ => {
  return action$.pipe(
    ofType('PONG'),
    switchMap((action) => {
      return Observable.create((observer) => {
        delayCall(2000).then(() => {
          observer.next({ ...action, type: action.type + "_ASYNC" })
        })
      });
    })
    // mapTo({ ...action, type: action.type + "_ASYNC" })
  )
}


export default pongEpic;