const initialState = {
  loading: false,
  error: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: action.payload };

    case "FINISH_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

export default reducers;
