import { combineReducers } from 'redux';
import counterApp from './CounterReducer/counterApp';

const rootReducer = combineReducers({
  counterApp
})

export default rootReducer;