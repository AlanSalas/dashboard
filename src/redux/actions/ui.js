export const uiStartLoading = () => {
  return {
    type: "START_LOADING",
    payload: true,
  };
};

export const uiFinishLoading = () => {
  return {
    type: "FINISH_LOADING",
    payload: false,
  };
};
