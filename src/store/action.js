export const ActionType = {
  SET_ACTIVE_TAB: `view/setActiveTab`,
  LOAD_ALL_FARMS: `data/loadAllFarms`,
  LOAD_ALL_FARMS_STATS: `data/loadAllFarmsStats`,
  FETCH_ALL_FARMS_ERROR: `data/fetchAllFarmsError`,
  FETCH_ALL_FARMS_STATS_ERROR: `data/fetchAllFarmsStatsError`,
};

export const setActiveTab = (activeTab) => ({
  type: ActionType.SET_ACTIVE_TAB,
  payload: activeTab,
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

export const fetchAllFarmsStatsError = (error) => ({
  type: ActionType.FETCH_ALL_FARMS_STATS_ERROR,
  payload: {error},
});
