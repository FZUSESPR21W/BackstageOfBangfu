import { combineReducers } from "redux-immutable";
import postReducer from "@/pages/post/modules/reducer";

const reducer = combineReducers({
  post: postReducer,
});

export default reducer;
