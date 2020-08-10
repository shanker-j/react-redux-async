import { combineEpics } from "redux-observable";

import ping from './ping';
import pong from './pong';

export default combineEpics(ping, pong);