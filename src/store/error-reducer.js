const errorInitialState = {
  error: null,
  errorMessage: null,
};

const errorReducer = (state = errorInitialState, action) => {
  if (!action.payload) {
    return state;
  }

  const {error} = action.payload;

  if (error) {
    return {
      ...state,
      error,
      errorMessage: error.message,
    };
  } else {
    return {
      ...state,
      error: null,
      errorMessage: null,
    };
  }
};

export {errorReducer};
