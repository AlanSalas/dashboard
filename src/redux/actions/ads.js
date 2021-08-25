import { getAds, postAd, putAd, removeAd } from "../../api/ads";
import {
  uiStartLoading,
  uiFinishLoading,
  setError,
  removeError,
} from "../actions/ui";

export const getAllAds = () => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await getAds();
    dispatch({ type: "GET_ALL_ADS", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const addAd = (ad) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await postAd(ad);
    dispatch({ type: "ADD_AD", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const updateAd = (id, ad) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await putAd(id, ad);
    dispatch({ type: "UPDATE_AD", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const deleteAd = (id) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    await removeAd(id);
    dispatch({ type: "DELETE_AD", payload: id });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};
