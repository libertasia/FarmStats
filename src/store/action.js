export const ActionType = {
  SET_ACTIVE_TAB: `view/setActiveTab`,
  LOAD_ALL_FARMS: `data/loadAllFarms`,
  FETCH_ALL_FARMS_ERROR: `data/fetchAllFarmsError`,
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
