import {
  ActionType,
  fetchAllFarmsError,
  fetchAllFarmsStatsError,
  fetchMonthlyStatsError,
  loadAllFarms,
  loadAllFarmsStats,
  loadMonthlyStats,
  setActiveAggregation,
  setActiveTab,
  setLocationFilter,
  setMetricFilter
} from "./action";

describe(`Actions work correctly`, () => {
  it(`Function fetchAllFarmsError returns correct action type and correct object in payload with error property containing the provided error`, () => {
    const someError = `someError`;

    const expectedAction = {
      type: ActionType.FETCH_ALL_FARMS_ERROR,
      payload: {error: someError},
    };

    expect(fetchAllFarmsError(someError)).toEqual(expectedAction);
  });
  it(`Function fetchAllFarmsStatsError returns correct action type and correct object in payload with error property containing the provided error`, () => {
    const someError = `someError`;

    const expectedAction = {
      type: ActionType.FETCH_ALL_FARMS_STATS_ERROR,
      payload: {error: someError},
    };

    expect(fetchAllFarmsStatsError(someError)).toEqual(expectedAction);
  });
  it(`Function fetchMonthlyStatsError returns correct action type and correct object in payload with error property containing the provided error`, () => {
    const someError = `someError`;

    const expectedAction = {
      type: ActionType.FETCH_MONTHLY_STATS_ERROR,
      payload: {error: someError},
    };

    expect(fetchMonthlyStatsError(someError)).toEqual(expectedAction);
  });
  it(`Function loadAllFarms returns correct action with payload`, () => {
    const someFarms = [];
    const isLoaded = true;

    const expectedAction = {
      type: ActionType.LOAD_ALL_FARMS,
      payload: {farms: someFarms, isAllFarmsLoaded: isLoaded},
    };

    expect(loadAllFarms(someFarms, isLoaded)).toEqual(expectedAction);
  });
  it(`Function loadAllFarmsStats returns correct action with payload`, () => {
    const someStats = [];
    const isLoaded = true;

    const expectedAction = {
      type: ActionType.LOAD_ALL_FARMS_STATS,
      payload: {farmsStats: someStats, isAllFarmsStatsLoaded: isLoaded},
    };

    expect(loadAllFarmsStats(someStats, isLoaded)).toEqual(expectedAction);
  });
  it(`Function loadMonthlyStats returns correct action with payload`, () => {
    const someMonthlyStats = [];

    const expectedAction = {
      type: ActionType.LOAD_MONTHLY_STATS,
      payload: someMonthlyStats,
    };

    expect(loadMonthlyStats(someMonthlyStats)).toEqual(expectedAction);
  });
  it(`Function setActiveAggregation returns correct action with payload`, () => {
    const activeAggregation = ``;

    const expectedAction = {
      type: ActionType.SET_ACTIVE_AGGREGATION,
      payload: activeAggregation,
    };

    expect(setActiveAggregation(activeAggregation)).toEqual(expectedAction);
  });
  it(`Function setActiveTab returns correct action with payload`, () => {
    const activeTab = ``;

    const expectedAction = {
      type: ActionType.SET_ACTIVE_TAB,
      payload: activeTab,
    };

    expect(setActiveTab(activeTab)).toEqual(expectedAction);
  });
  it(`Function setLocationFilter returns correct action with payload`, () => {
    const locationId = `1`;
    const isSelected = true;

    const expectedAction = {
      type: ActionType.SET_LOCATION_FILTER,
      payload: {farm_id: locationId, isSelected},
    };

    expect(setLocationFilter(locationId, isSelected)).toEqual(expectedAction);
  });
  it(`Function setMetricFilter returns correct action with payload`, () => {
    const metric = ``;
    const isSelected = true;

    const expectedAction = {
      type: ActionType.SET_METRIC_FILTER,
      payload: {type: metric, isSelected},
    };

    expect(setMetricFilter(metric, isSelected)).toEqual(expectedAction);
  });
});
