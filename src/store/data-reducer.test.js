import {ActionType} from "./action";
import {dataReducer} from "./data-reducer";
import {mockFarms, mockMonthlyStats, mockStats} from "../test-mocks";

describe(`Data-Reducer`, () => {
  it(`without additional parameters should return initial state`, () => {
    const initialState = {
      farms: [],
      farmsStats: [],
      monthlyStats: [],
      isAllFarmsLoaded: false,
      isAllFarmsStatsLoaded: false,
    };
    expect(dataReducer(undefined, {}))
      .toEqual(initialState);
  });
  it(`should update farms and isAllFarmsLoaded status by a given value`, () => {
    const state = {
      farms: [],
      isAllFarmsLoaded: false,
      otherFiled: `shouldNotChange`,
    };
    const loadAllFarmsAction = {
      type: ActionType.LOAD_ALL_FARMS,
      payload: {farms: mockFarms, isAllFarmsLoaded: true},
    };

    expect(dataReducer(state, loadAllFarmsAction))
      .toEqual({farms: mockFarms, isAllFarmsLoaded: true, otherFiled: `shouldNotChange`});
  });
  it(`should update farmsStats and isAllFarmsStatsLoaded status by a given value`, () => {
    const state = {
      farmsStats: [],
      isAllFarmsStatsLoaded: false,
      otherFiled: `shouldNotChange`,
    };
    const loadAllFarmsStatsAction = {
      type: ActionType.LOAD_ALL_FARMS_STATS,
      payload: {farmsStats: mockStats, isAllFarmsStatsLoaded: true},
    };

    expect(dataReducer(state, loadAllFarmsStatsAction))
      .toEqual({farmsStats: mockStats, isAllFarmsStatsLoaded: true, otherFiled: `shouldNotChange`});
  });
  it(`should update monthlyStats by a given value`, () => {
    const state = {
      monthlyStats: [],
      otherFiled: `shouldNotChange`,
    };
    const loadMonthlyStatsAction = {
      type: ActionType.LOAD_MONTHLY_STATS,
      payload: mockMonthlyStats[0],
    };

    expect(dataReducer(state, loadMonthlyStatsAction))
      .toEqual({monthlyStats: [mockMonthlyStats[0]], otherFiled: `shouldNotChange`});
  });
});
