const reducers = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;
      break;

    default:
      return state;
  }
};
