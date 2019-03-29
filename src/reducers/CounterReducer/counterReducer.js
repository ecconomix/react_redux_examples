
import * as actionType from '../../actions/ActionType';
import { createReducer } from 'redux-create-reducer';

const initialState = {
  counterApp: 0
};

const counterReducer = createReducer(initialState, {
  [actionType.ADD_COUNTER]: (state, action) => {
    return {
       ...state, 
       counterApp: state.counterApp + action.payload
    }
  },
  [actionType.REMOVE_COUNTER]: (state, action) => {
    return {
      ...state,
      counterApp: state.counterApp - action.payload
    }
  },
  [actionType.RESET_COUNTER]: (state, action) => {
    return {
      ...state,
      counterApp: action.payload
    }
  }
});

export default counterReducer;
