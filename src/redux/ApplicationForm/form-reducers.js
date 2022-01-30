import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './form-actions';

const items = createReducer([], {
  [actions.addForm]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  items,
});
