import {ActionType} from "./action";

const initialState = {
  farms: [],
  isAllFarmsLoaded: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ALL_FARMS:
      return {
        ...state,
        farms: action.payload.farms,
        isAllFarmsLoaded: action.payload.isAllFarmsLoaded,
      };
    default:
      return state;
  }
};

export {dataReducer};
