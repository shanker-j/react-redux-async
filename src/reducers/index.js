import { combineReducers } from 'redux';

import math from './mathReducer';
import user from './userReducer';
import pingPong from './pingPongReducer';

export default combineReducers({ math, user, pingPong });