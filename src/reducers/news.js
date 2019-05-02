import { REQUEST_NEWS, RECEIVE_NEWS, API_FAIL } from '../constants/actionTypes'

const newsDefaultState = {
  loading: false,
  failed: false,
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
        all: action.payload.articles
      }
    default:
      return state
  }
}
