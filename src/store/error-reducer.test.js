import {ActionType} from "./action";
import {errorReducer} from "./error-reducer";

describe(`Error-Reducer`, () => {
  it(`without additional parameters should return initial state`, () => {
    const initialState = {
      error: null,
      errorMessage: null,
    };
    expect(errorReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`should update state by a given value`, () => {
    const state = {
      error: null,
      errorMessage: null,
    };
    const error = {
      message: `something went wrong`,
    };
    const fetchAllFarmsErrorAction = {
      type: ActionType.FETCH_ALL_FARMS_ERROR,
      payload: {error},
    };

    expect(errorReducer(state, fetchAllFarmsErrorAction))
      .toEqual({error, errorMessage: `something went wrong`});
  });
});
