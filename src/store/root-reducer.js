import {combineReducers} from "redux";
import {viewReducer} from "./view-reducer";

export const NameSpace = {
  VIEW: `VIEW`,
};

export default combineReducers({
  [NameSpace.VIEW]: viewReducer,
});
