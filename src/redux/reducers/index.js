import { combineReducers } from "redux";
import courses from "./courses";
import lessons from "./lessons";
import ui from "./ui";

export default combineReducers({ courses, lessons, ui });
