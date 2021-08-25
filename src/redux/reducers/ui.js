const initialState = {
  loading: false,
  openModal: false,
  error: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: action.payload };

    case "FINISH_LOADING":
      return { ...state, loading: action.payload };

    case "OPEN_MODAL":
      return { ...state, openModal: action.payload };

    case "CLOSE_MODAL":
      return { ...state, openModal: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "REMOVE_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default reducers;
