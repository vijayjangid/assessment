import { combineReducers } from "redux";
import {
  okrsReducer as okrs,
  filteredCategoryReducer as filteredCategories
} from "./okrs/reducer";

export default combineReducers({
  okrs,
  filteredCategories
});
