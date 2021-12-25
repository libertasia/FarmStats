import {ActionType} from "./action";
import {MetricType, TabType} from "../const";

const initialState = {
  activeTab: TabType.TABLE,
  locations: [],
  metrics: [
    {
      type: MetricType.PH,
      isSelected: true,
    },
    {
      type: MetricType.RAINFALL,
      isSelected: true,
    },
    {
      type: MetricType.TEMPERATURE,
      isSelected: true,
    }
  ],
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ALL_FARMS:
      return {
        ...state,
        locations: action.payload.farms.map((item) => ({
          farm_id: item.farm_id,
          name: item.name,
          isSelected: true,
        })),
      };
    case ActionType.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    case ActionType.SET_METRIC_FILTER:
      const updatedMetric = [...state.metrics];
      const index = updatedMetric.findIndex((item) => item.type === action.payload.type);
      const selectedMetricType = {...updatedMetric[index]};
      selectedMetricType.isSelected = action.payload.isSelected;
      updatedMetric[index] = selectedMetricType;
      return {
        ...state,
        metrics: updatedMetric,
      };
    case ActionType.SET_LOCATION_FILTER:
      const updatedLocations = [...state.locations];
      const updatedIndex = updatedLocations.findIndex((item) => item.farm_id === action.payload.farm_id);
      const selectedLocations = {...updatedLocations[updatedIndex]};
      selectedLocations.isSelected = action.payload.isSelected;
      updatedLocations[updatedIndex] = selectedLocations;
      return {
        ...state,
        locations: updatedLocations,
      };
    default:
      return state;
  }
};

export {viewReducer};
