import {fetchAllFarmsError, fetchAllFarmsStatsError, fetchMonthlyStatsError, loadAllFarms, loadAllFarmsStats, loadMonthlyStats} from "./action";
import {APIRoute, MetricType} from "../const";
import {getAllFarms} from "./selectors";

export const fetchAllFarms = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FARMS)
    .then((response) => dispatch(loadAllFarms(response.data, true)))
    .catch((error) => dispatch(fetchAllFarmsError(error)))
};

export const fetchAllFarmsStats = () => (dispatch, _getState, api) => {
  // console.log(`fetching all farm stats`);
  const allFarms = getAllFarms(_getState());
  allFarms.forEach((element) => {
    // console.log(`calling ${APIRoute.FARMS}/${element.farm_id}/stats`)
    api.get(`${APIRoute.FARMS}/${element.farm_id}/stats`)
      .then((response) => dispatch(loadAllFarmsStats(response.data.measurements, true)))
      .catch((error) => dispatch(fetchAllFarmsStatsError(error)))
  });
};

export const fetchMonthlyStats = () => (dispatch, _getState, api) => {
  // console.log(`fetching monthly stats`);
  const allFarms = getAllFarms(_getState());
  const sensorNames = [];
  Object.keys(MetricType).forEach(e => sensorNames.push(MetricType[e]));
  allFarms.forEach((farm) => {
    sensorNames.forEach((sensor) => {
      // console.log(`calling ${APIRoute.FARMS}/${farm.farm_id}/stats/${sensor}/monthly`)
      api.get(`${APIRoute.FARMS}/${farm.farm_id}/stats/${sensor}/monthly`)
        .then((response) => dispatch(loadMonthlyStats(response.data)))
        .catch((error) => dispatch(fetchMonthlyStatsError(error)))
    })
  });
};

