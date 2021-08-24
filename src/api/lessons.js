import API from "./config";

export const getLessons = async () => await API.get("/lessons");

export const postLesson = async (newLesson) =>
  await API.post("/lessons", newLesson);

export const putLesson = async (id, lesson) =>
  await API.put(`/lessons/${id}`, lesson);

export const removeLesson = async (id) => await API.delete(`/lessons/${id}`);
