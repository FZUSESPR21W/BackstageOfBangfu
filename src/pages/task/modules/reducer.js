import { fromJS } from 'immutable' 
import { SEARCH_TASK } from './types'

const defaultState = fromJS({
  totalPage: 0,
  currentPage: 1,
  totalNum: 0,
  tasks: []
})

const reducer = (state = defaultState, action) => {
  if (action.type === SEARCH_TASK) {
    const { tasks, ...restPayload } = action.payload
    return state.merge({
      tasks: fromJS(tasks),
      ...restPayload
    })
  }
  return state
}

export default reducer

