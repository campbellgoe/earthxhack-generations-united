import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

export const initializeStore = () => {
  let middleware = applyMiddleware(thunk);
  //if dev mode, enable redux dev tools
  if(process.env.NODE_ENV !== "production"){
    middleware = composeWithDevTools(middleware);
  }
  return createStore(rootReducer, middleware);
};
