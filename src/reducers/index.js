import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  // auth piece of state created by AuthReducer
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
