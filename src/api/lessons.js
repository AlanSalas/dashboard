import API from "./config";

export const getLessons = async () => await API.get("/lessons");
