import { combineReducers } from "redux";
import notifications from "./notifications";
import modal from './modal';
import languages from './languages'
import customer from './customer'

export default combineReducers({ notifications, modal, languages, customer });
