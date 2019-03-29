
import * as actionType from '../../actions/ActionType';
import { createReducer } from 'redux-create-reducer';

const initialState = {
  counterValue: 0
};

const counterApp = createReducer(initialState, {
  [actionType.ADD_COUNTER]: (state, action) => {
    return {
      ...state,
      counterValue: state.counterValue + action.payload
    }
  },
  [actionType.REMOVE_COUNTER]: (state, action) => {
    return {
      ...state,
      counterValue: state.counterValue - action.payload 
    }
  },
  [actionType.RESET_COUNTER]: (state, action) => {
    return {
      ...state,
      counterValue: action.payload
    }
  }
});

export default counterApp;
