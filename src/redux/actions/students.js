import {
  getStudents,
  postStudent,
  putStudent,
  removeStudent,
} from "../../api/students";
import { uiStartLoading, uiFinishLoading } from "../actions/ui";

export const getAllStudents = () => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await getStudents();
    dispatch({ type: "GET_ALL_STUDENTS", payload: data });
    dispatch(uiFinishLoading());
  } catch (error) {
    console.log(error);
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await postStudent(student);
    dispatch({ type: "ADD_STUDENT", payload: data });
    dispatch(uiFinishLoading());
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    const { data } = await putStudent(id, student);
    dispatch({ type: "UPDATE_STUDENT", payload: data });
    dispatch(uiFinishLoading());
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch(uiStartLoading());
    await removeStudent(id);
    dispatch({ type: "DELETE_STUDENT", payload: id });
    dispatch(uiFinishLoading());
  } catch (error) {
    console.log(error);
  }
};
