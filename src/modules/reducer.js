import { combineReducers } from "redux-immutable";
import postReducer from "@/pages/post/modules/reducer";
import commentReducer from "@/pages/comment/modules/reducer";
import taskReducer from "@/pages/task/modules/reducer";

const reducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
  task: taskReducer,
});

export default reducer;
