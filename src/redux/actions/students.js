import {
  getStudents,
  postStudent,
  putStudent,
  removeStudent,
} from "../../api/students";
import {
  uiStartLoading,
  uiFinishLoading,
  setError,
  removeError,
} from "../actions/ui";

export const getAllStudents = () => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await getStudents();
    dispatch({ type: "GET_ALL_STUDENTS", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await postStudent(student);
    dispatch({ type: "ADD_STUDENT", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await putStudent(id, student);
    dispatch({ type: "UPDATE_STUDENT", payload: data });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    await removeStudent(id);
    dispatch({ type: "DELETE_STUDENT", payload: id });
    dispatch(uiFinishLoading());
    dispatch(removeError());
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(uiFinishLoading());
  }
};
