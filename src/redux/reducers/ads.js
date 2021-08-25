const reducers = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_ADS":
      return action.payload;

    case "ADD_AD":
      return [...state, action.payload];

    case "UPDATE_AD":
      return state.map((ad) =>
        ad.id === action.payload.id ? action.payload : ad
      );

    case "DELETE_AD":
      return state.filter((ad) => ad.id !== action.payload);

    default:
      return state;
  }
};

export default reducers;
