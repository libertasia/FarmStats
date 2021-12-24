import {fetchAllFarmsError, loadAllFarms} from "./action";
import {APIRoute} from "../const";

export const fetchAllFarms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FARMS)
    .then((response) => dispatch(loadAllFarms(response.data, true)))
    .catch((error) => dispatch(fetchAllFarmsError(error)))
);
