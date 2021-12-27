export const ActionType = {
  SET_ACTIVE_TAB: `view/setActiveTab`,
  SET_METRIC_FILTER: `view/setMetricFilter`,
  SET_LOCATION_FILTER:`view/setLocationFilter`,
  SET_ACTIVE_AGGREGATION: `view/setActiveAggregation`,
  LOAD_ALL_FARMS: `data/loadAllFarms`,
  LOAD_ALL_FARMS_STATS: `data/loadAllFarmsStats`,
  LOAD_MONTHLY_STATS: `data/loadMonthlyStats`,
  FETCH_ALL_FARMS_ERROR: `data/fetchAllFarmsError`,
  FETCH_ALL_FARMS_STATS_ERROR: `data/fetchAllFarmsStatsError`,
  FETCH_MONTHLY_STATS_ERROR: `data/fetchMonthlyStatsError`,
};

export const setActiveTab = (activeTab) => ({
  type: ActionType.SET_ACTIVE_TAB,
  payload: activeTab,
});

export const setActiveAggregation = (aggregation) => ({
  type: ActionType.SET_ACTIVE_AGGREGATION,
  payload: aggregation,
});

export const loadAllFarms = (farms, isAllFarmsLoaded) => ({
  type: ActionType.LOAD_ALL_FARMS,
  payload: {farms, isAllFarmsLoaded},
});

export const fetchAllFarmsError = (error) => ({
  type: ActionType.FETCH_ALL_FARMS_ERROR,
  payload: {error},
});

export const loadAllFarmsStats = (farmsStats, isAllFarmsStatsLoaded) => ({
  type: ActionType.LOAD_ALL_FARMS_STATS,
  payload: {farmsStats, isAllFarmsStatsLoaded},
});

export const loadMonthlyStats = (stats) => ({
  type: ActionType.LOAD_MONTHLY_STATS,
  payload: stats,
});

export const fetchAllFarmsStatsError = (error) => ({
  type: ActionType.FETCH_ALL_FARMS_STATS_ERROR,
  payload: {error},
});

export const fetchMonthlyStatsError = (error) => ({
  type: ActionType.FETCH_MONTHLY_STATS_ERROR,
  payload: {error},
});

export const setMetricFilter = (metric, isSelected) => ({
  type: ActionType.SET_METRIC_FILTER,
  payload: {
    type: metric,
    isSelected,
  }
});

export const setLocationFilter = (locationId, isSelected) => ({
  type: ActionType.SET_LOCATION_FILTER,
  payload: {
    farm_id: locationId,
    isSelected,
  }
});
