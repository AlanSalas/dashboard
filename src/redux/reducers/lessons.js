const reducers = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_LESSONS":
      return action.payload;

    default:
      return state;
  }
};

export default reducers;
