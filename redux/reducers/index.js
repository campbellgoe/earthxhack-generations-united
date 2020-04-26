import { combineReducers } from "redux";
import notifications from "./notifications";
import modal from './modal';
import languages from './languages'

export default combineReducers({ notifications, modal, languages });
