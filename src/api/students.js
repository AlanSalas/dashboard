import API from "./config";

export const getStudents = async () => await API.get("/students");

export const postStudent = async (newStudent) =>
  await API.post("/students", newStudent);

export const putStudent = async (id, student) =>
  await API.put(`/students/${id}`, student);

export const removeStudent = async (id) => await API.delete(`/students/${id}`);
