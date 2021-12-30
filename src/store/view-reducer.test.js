import {AggregationType, TabType, MetricType} from "../const";
import {mockFarms, mockLocations} from "../test-mocks";
import {ActionType} from "./action";
import {viewReducer} from "./view-reducer";

describe(`View-Reducer`, () => {
  it(`without additional parameters should return initial state`, () => {
    const initialState = {
      activeTab: TabType.TABLE,
      activeAggregation: AggregationType.AVERAGE,
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
    expect(viewReducer(undefined, {}))
      .toEqual(initialState);
  });
  it(`should change locations by a given value`, () => {
    const state = {
      locations: [],
      otherFiled: `shouldNotChange`,
    };
    const loadAllFarmsAction = {
      type: ActionType.LOAD_ALL_FARMS,
      payload: {farms: mockFarms},
    };

    expect(viewReducer(state, loadAllFarmsAction))
      .toEqual({locations: mockLocations, otherFiled: `shouldNotChange`});
  });
  it(`should change activeTab by a given value`, () => {
    const state = {
      activeTab: TabType.TABLE,
      otherFiled: `shouldNotChange`,
    };
    const changeActiveTabAction = {
      type: ActionType.SET_ACTIVE_TAB,
      payload: `someActiveTab`,
    };

    expect(viewReducer(state, changeActiveTabAction))
      .toEqual({activeTab: `someActiveTab`, otherFiled: `shouldNotChange`});
  });
  it(`should change activeAggregation by a given value`, () => {
    const state = {
      activeAggregation: AggregationType.AVERAGE,
      otherFiled: `shouldNotChange`,
    };
    const changeActiveAggregationAction = {
      type: ActionType.SET_ACTIVE_AGGREGATION,
      payload: `someActiveAggregation`,
    };

    expect(viewReducer(state, changeActiveAggregationAction))
      .toEqual({activeAggregation: `someActiveAggregation`, otherFiled: `shouldNotChange`});
  });
  it(`should update metrics by a given value`, () => {
    const state = {
      metrics: [
        {
          type: MetricType.PH,
          isSelected: false,
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
      otherFiled: `shouldNotChange`,
    };
    const setMetricFilterAction = {
      type: ActionType.SET_METRIC_FILTER,
      payload: {type: MetricType.PH, isSelected: true},
    };

    const updatedMetrics = [
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
    ];

    expect(viewReducer(state, setMetricFilterAction))
      .toEqual({metrics: updatedMetrics, otherFiled: `shouldNotChange`});
  });
  it(`should update locations by a given value`, () => {
    const state = {
      locations: mockLocations,
      otherFiled: `shouldNotChange`,
    };
    const setLocationFilterAction = {
      type: ActionType.SET_LOCATION_FILTER,
      payload: {farm_id: `1`, isSelected: false},
    };

    const updatedLocations = [
      {
        "farm_id": "1",
        "name": "farm 1",
        "isSelected": false,
      },
      {
        "farm_id": "2",
        "name": "farm 2",
        "isSelected": true,
      },
      {
        "farm_id": "3",
        "name": "farm 3",
        "isSelected": true,
      },
      {
        "farm_id": "4",
        "name": "farm 4",
        "isSelected": true,
      }
    ];

    expect(viewReducer(state, setLocationFilterAction))
      .toEqual({locations: updatedLocations, otherFiled: `shouldNotChange`});
  });
});
