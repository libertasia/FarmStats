import {createSelector} from "reselect";
import {NameSpace} from "./root-reducer";
import {generateFilteredData} from "../utils";

export const getActiveTab = (state) => state[NameSpace.VIEW].activeTab;
export const getMetricTypes = (state) => state[NameSpace.VIEW].metrics;
export const getLocations = (state) => state[NameSpace.VIEW].locations;
export const getAllFarms = (state) => state[NameSpace.DATA].farms;
export const getAllFarmsStats = (state) => state[NameSpace.DATA].farmsStats;
export const getAllFarmsLoadedStatus = (state) => state[NameSpace.DATA].isAllFarmsLoaded;
export const getAllFarmsStatsLoadedStatus = (state) => state[NameSpace.DATA].isAllFarmsStatsLoaded;
export const getAllFarmsStatsLoadingStatus = (state) => state[NameSpace.DATA].isAllFarmsStatsLoading;

export const getFilteredFarmsStats = createSelector(
  [getAllFarmsStats, getLocations, getMetricTypes],
  (allData, locations, metrics) => {
    return generateFilteredData(allData, locations, metrics);
  }
);
