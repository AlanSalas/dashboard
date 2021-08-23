import API from "./config";

export const getCourses = async () => await API.get("/courses");
