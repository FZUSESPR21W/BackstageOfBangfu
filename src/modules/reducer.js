import { combineReducers } from "redux-immutable";
import postReducer from "@/pages/post/modules/reducer";
import commentReducer from "@/pages/comment/modules/reducer";
import taskReducer from "@/pages/task/modules/reducer";
import reportReducer from "@/pages/report/modules/reducer"

const reducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
  task: taskReducer,
  report: reportReducer
});

export default reducer;
