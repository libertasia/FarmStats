import {NameSpace} from './root-reducer';

export const getActiveTab = (state) => state[NameSpace.VIEW].activeTab;
export const getAllFarms = (state) => {
  console.log(state)
  return state[NameSpace.DATA].farms;
}
export const getAllFarmsStats = (state) => state[NameSpace.DATA].farmsStats;
export const getAllFarmsLoadedStatus = (state) => state[NameSpace.DATA].isAllFarmsLoaded;
export const getAllFarmsStatsLoadedStatus = (state) => state[NameSpace.DATA].isAllFarmsStatsLoaded;
