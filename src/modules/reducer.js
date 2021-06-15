import { combineReducers } from "redux-immutable";
import postReducer from "@/pages/post/modules/reducer";
import commentReducer from "@/pages/comment/modules/reducer";
import taskReducer from "@/pages/task/modules/reducer";
import reportReducer from "@/pages/report/modules/reducer"
import { fromJS } from 'immutable' 
import { CHANGE_TOKEN } from './type'

const defaultState = fromJS({
  token: ""
})

const mainReducer = (state = defaultState, action) => {
  if (action.type === CHANGE_TOKEN) {
    const { token } = action.payload
    return state.set("token", token)
  }
  return state
}

const reducer = combineReducers({
  main: mainReducer,
  post: postReducer,
  comment: commentReducer,
  task: taskReducer,
  report: reportReducer
});

export default reducer;
