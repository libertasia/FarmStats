import {combineReducers} from "redux";
import {viewReducer} from "./view-reducer";
import {dataReducer} from "./data-reducer";
import {errorReducer} from "./error-reducer";

export const NameSpace = {
  DATA: `DATA`,
  ERRORS: `ERRORS`,
  VIEW: `VIEW`,
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.ERRORS]: errorReducer,
  [NameSpace.VIEW]: viewReducer,
});
