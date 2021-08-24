import {
  getLessons,
  postLesson,
  putLesson,
  removeLesson,
} from "../../api/lessons";
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

export const addLesson = (lesson) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await postLesson(lesson);
    dispatch({ type: "ADD_LESSON", payload: data });
    dispatch(uiFinishLoading());
  } catch (error) {
    console.log(error);
  }
};

export const updateLesson = (id, lesson) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await putLesson(id, lesson);
    dispatch({ type: "UPDATE_LESSON", payload: data });
    dispatch(uiFinishLoading());
  } catch (error) {
    console.log(error);
  }
};

export const deleteLesson = (id) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    await removeLesson(id);
    dispatch({ type: "DELETE_LESSON", payload: id });
    dispatch(uiFinishLoading());
  } catch (error) {
    console.log(error);
  }
};
