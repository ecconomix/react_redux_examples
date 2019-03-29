import { combineReducers } from 'redux';
import counterReducer from './CounterReducer/counterReducer';

const rootReducer = combineReducers({
  counterReducer
})

export default rootReducer;