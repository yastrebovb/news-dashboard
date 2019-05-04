import { REQUEST_NEWS, RECEIVE_NEWS, API_FAIL } from '../constants/actionTypes'

const newsDefaultState = {
  loading: false,
  failed: false,
  lastUpdated: 0,
  all: []
}

export default (state = newsDefaultState, action) => {
  switch (action.type) {
    case REQUEST_NEWS:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_NEWS:
      return {
        ...state,
        loading: false,
        lastUpdated: action.updateDate,
        all: action.payload.articles
      }
    default:
      return state
  }
}
