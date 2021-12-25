import {fetchAllFarmsError, fetchAllFarmsStatsError, loadAllFarms, loadAllFarmsStats} from "./action";
import {APIRoute} from "../const";
import {getAllFarms} from "./selectors";

export const fetchAllFarms = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FARMS)
    .then((response) => dispatch(loadAllFarms(response.data, true)))
    .catch((error) => dispatch(fetchAllFarmsError(error)))
};

export const fetchAllFarmsStats = () => (dispatch, _getState, api) => {
  console.log(`fetching all farm stats`);
  const allFarms = getAllFarms(_getState());
  allFarms.forEach((element) => {
    console.log(`calling ${APIRoute.FARMS}/${element.farm_id}/stats`)
    api.get(`${APIRoute.FARMS}/${element.farm_id}/stats`)
      .then((response) => dispatch(loadAllFarmsStats(response.data.measurements, true)))
      .catch((error) => dispatch(fetchAllFarmsStatsError(error)))
  });
};

