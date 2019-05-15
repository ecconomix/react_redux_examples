
import { counterActionTypes } from 'actionTypes';
import { createReducer } from 'redux-create-reducer';

const initialState = {
  counterValue: 0
};

const counterApp = createReducer(initialState, {
  [counterActionTypes.ADD_COUNTER]: (state, action) => {
    return {
      ...state,
      counterValue: state.counterValue + action.payload
    }
  },
  [counterActionTypes.REMOVE_COUNTER]: (state, action) => {
    return {
      ...state,
      counterValue: state.counterValue - action.payload 
    }
  },
  [counterActionTypes.RESET_COUNTER]: (state, action) => {
    return {
      ...state,
      counterValue: action.payload
    }
  }
});

export default counterApp;
