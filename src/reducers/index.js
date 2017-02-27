import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import groupReducer from './group_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  group: groupReducer
});

export default rootReducer;
