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

export const openModal = () => {
  return {
    type: "OPEN_MODAL",
    payload: true,
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
    payload: false,
  };
};

export const setError = (error) => {
  return {
    type: "SET_ERROR",
    payload: error,
  };
};

export const removeError = () => {
  return {
    type: "REMOVE_ERROR",
    payload: false,
  };
};
