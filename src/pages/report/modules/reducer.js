import { fromJS } from 'immutable' 
import { SEARCH_REPORT } from './types'

const defaultState = fromJS({
  totalPage: 0,
  currentPage: 1,
  totalNum: 0,
  reports: []
})

const reducer = (state = defaultState, action) => {
  if (action.type === SEARCH_REPORT) {
    const { reports, ...restPayload } = action.payload
    return state.merge({
      reports: fromJS(reports),
      ...restPayload
    })
  }
  return state
}

export default reducer

