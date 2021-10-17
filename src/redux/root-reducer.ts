import { combineReducers } from 'redux';
import programReducer from './program/reducer';

const rootReducer = combineReducers({
  programDirectory: programReducer,
});

export default rootReducer;