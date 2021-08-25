const reducers = (state = [], action) => {
  switch (action.type) {
    case "GET_ALL_LESSONS":
      return action.payload;

    case "ADD_LESSON":
      return [...state, action.payload];

    case "UPDATE_LESSON":
      return state.map((lesson) =>
        lesson.id === action.payload.id ? action.payload : lesson
      );

    case "DELETE_LESSON":
      return state.filter((lesson) => lesson.id !== action.payload);

    default:
      return state;
  }
};

export default reducers;
