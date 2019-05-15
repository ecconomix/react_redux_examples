import { counterActionTypes } from 'actionTypes';

export const addCounter = () => ({
  type: counterActionTypes.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
  type: counterActionTypes.REMOVE_COUNTER,
  payload: 1
});

export const resetCounter = () => ({
  type: counterActionTypes.RESET_COUNTER,
  payload: 0
})