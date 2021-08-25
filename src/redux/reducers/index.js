import { combineReducers } from "redux";
import courses from "./courses";
import lessons from "./lessons";
import ads from "./ads";
import students from "./students";
import ui from "./ui";

export default combineReducers({ courses, lessons, ads, students, ui });
