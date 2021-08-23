import { getCourses } from "../../api/courses";
import { uiStartLoading, uiFinishLoading } from "../actions/ui";

export const getAllCourses = () => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await getCourses();
    dispatch({ type: "GET_ALL", payload: data });
    dispatch(uiFinishLoading());
  } catch (error) {
    console.log(error);
  }
};
