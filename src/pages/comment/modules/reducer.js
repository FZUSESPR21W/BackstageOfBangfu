import { fromJS } from 'immutable' 
import { SEARCH_COMMENT } from './types'

const defaultState = fromJS({
  totalPage: 0,
  currentPage: 1,
  totalNum: 0,
  comments: []
})

const reducer = (state = defaultState, action) => {
  if (action.type === SEARCH_COMMENT) {
    const { comments, ...restPayload } = action.payload
    return state.merge({
      comments: fromJS(comments),
      ...restPayload
    })
  }
  return state
}

export default reducer

