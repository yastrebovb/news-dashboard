import { ADD_CHANNEL, REMOVE_CHANNEL } from '../constants/actionTypes'

const configurationDefaultState = {
  channels: ['techcrunch']
}

export default (state = configurationDefaultState, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return {
        ...state,
        channels: [...state.channels, action.channel]
      }
    case REMOVE_CHANNEL:
      return {
        ...state,
        channels: state.channels.filter(channel => channel !== action.channel)
      }
    default:
      return state
  }
}
