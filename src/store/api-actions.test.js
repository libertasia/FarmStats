import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../services/api";
import {ActionType} from "./action";
import {APIRoute} from "../const";
import {fetchAllFarms} from "./api-actions";

const api = createAPI(() => {});

describe(`Async operation`, () => {
  it(`should make a correct API call to /v1/farms`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const farmsLoader = fetchAllFarms();

    apiMock
      .onGet(APIRoute.FARMS)
      .reply(200, [
        {
          "farm_id": "test",
          "name": "test",
          "location": "test"
        }
      ]);

    return farmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_ALL_FARMS,
        payload: {
          farms: [
          {
            "farm_id": "test",
            "name": "test",
            "location": "test"
          }],
          isAllFarmsLoaded: true,
        },
      });
    });
  });
});
