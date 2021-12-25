import {fetchAllFarmsError, fetchAllFarmsStatsError, loadAllFarms, loadAllFarmsStats} from "./action";
import {APIRoute} from "../const";
import {getAllFarms} from "./selectors";

export const fetchAllFarms = () => (dispatch, _getState, api) => {
  console.log(`fetching all farms`);
  api.get(APIRoute.FARMS)
    .then((response) => dispatch(loadAllFarms(response.data, true)))
    .catch((error) => dispatch(fetchAllFarmsError(error)))
};

export const fetchAllFarmsStats = () => (dispatch, _getState, api) => {
  const allFarms = getAllFarms(_getState());

  allFarms.forEach(element => {
    api.get(`${APIRoute.FARMS}/${element.farm_id}/stats`)
      .then((response) => dispatch(loadAllFarmsStats(response.data.measurements, true)))
      .catch((error) => dispatch(fetchAllFarmsStatsError(error)))
  });
};

