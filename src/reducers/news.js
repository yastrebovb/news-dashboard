import { REQUEST_NEWS, RECEIVE_NEWS, API_FAIL } from '../constants/actionTypes'

const newsDefaultState = []

export default (state = newsDefaultState, action) => {
  switch (action.type) {
    case REQUEST_NEWS:
      return [
        ...state,
        {
          channelName: action.channel,
          articles: [],
          loading: true,
          failed: false
        }
      ]
    case RECEIVE_NEWS:
      return [...state].map(channel =>
        channel.channelName === action.channel
          ? {
              ...channel,
              articles: action.payload.articles,
              loading: false
            }
          : channel
      )
    default:
      return state
  }
}
