import {ActionType} from "./action";

const initialState = {
  farms: [],
  farmsStats: [],
  isAllFarmsLoaded: false,
  isAllFarmsStatsLoaded: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ALL_FARMS:
      return {
        ...state,
        farms: action.payload.farms,
        isAllFarmsLoaded: action.payload.isAllFarmsLoaded,
      };
    case ActionType.LOAD_ALL_FARMS_STATS:
      return {
        ...state,
        farmsStats: [...state.farmsStats, ...action.payload.farmsStats],
        isAllFarmsStatsLoaded: action.payload.isAllFarmsStatsLoaded,
      };
    default:
      return state;
  }
};

export {dataReducer};
