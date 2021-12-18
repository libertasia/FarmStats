export const ActionType = {
  SET_ACTIVE_TAB: `view/setActiveTab`,
};

export const setActiveTab = (activeTab) => ({
    type: ActionType.SET_ACTIVE_TAB,
    payload: activeTab,
});
