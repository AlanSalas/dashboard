import { getLessons } from "../../api/lessons";
import { uiStartLoading, uiFinishLoading } from "../actions/ui";

export const getAllLessons = () => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await getLessons();
    dispatch({ type: "GET_ALL_LESSONS", payload: data });
    dispatch(uiFinishLoading());
  } catch (error) {
    console.log(error);
  }
};
