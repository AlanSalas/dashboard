import API from "./config";

export const getCourses = async () => await API.get("/courses");

export const postCourse = async (newCourse) =>
  await API.post("/courses", newCourse);

export const putCourse = async (id, course) =>
  await API.put(`/courses/${id}`, course);

export const removeCourse = async (id) => await API.delete(`/courses/${id}`);
