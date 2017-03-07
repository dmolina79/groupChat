import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import groupReducer from './group_reducer';
//import ActiveGroupReducer from './active-group-reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  group: groupReducer
  // activeGroup: ActiveGroupReducer
});

export default rootReducer;
