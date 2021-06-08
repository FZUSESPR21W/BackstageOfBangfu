import { fromJS } from 'immutable' 
import { SEARCH_POST } from './types'

const defaultState = fromJS({
  totalPage: 0,
  currentPage: 1,
  totalNum: 0,
  posts: []
})

const reducer = (state = defaultState, action) => {
  if (action.type === SEARCH_POST) {
    const { posts, ...restPayload } = action.payload
    return state.merge({
      posts: fromJS(posts),
      ...restPayload
    })
  }
  return state
}

export default reducer

