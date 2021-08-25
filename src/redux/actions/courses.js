import {
  getCourses,
  postCourse,
  putCourse,
  removeCourse,
} from "../../api/courses";
import {
  uiStartLoading,
  uiFinishLoading,
  setError,
  removeError,
} from "../actions/ui";

export const getAllCourses = () => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await getCourses();
    dispatch({ type: "GET_ALL", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const addCourse = (course) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await postCourse(course);
    dispatch({ type: "ADD_COURSE", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const updateCourse = (id, course) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await putCourse(id, course);
    dispatch({ type: "UPDATE_COURSE", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    await removeCourse(id);
    dispatch({ type: "DELETE_COURSE", payload: id });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};
