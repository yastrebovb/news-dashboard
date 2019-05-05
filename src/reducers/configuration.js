import { SELECT_CHANNEL, DESELECT_CHANNEL } from '../constants/actionTypes'

const configurationDefaultState = {
  availableChannels: [
    'the-new-york-times',
    'the-wall-street-journal',
    'the-washington-post',
    'usa-today',
    'bbc-news',
    'cnn',
    'reuters',
    'newsweek',
    'google-news',
    'fortune'
  ],
  selectedChannels: [
    'the-new-york-times',
    'bbc-news',
    'the-wall-street-journal'
  ]
}

export default (state = configurationDefaultState, action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      return {
        ...state,
        selectedChannels: [...state.selectedChannels, action.channel]
      }
    case DESELECT_CHANNEL:
      return {
        ...state,
        selectedChannels: state.selectedChannels.filter(
          channel => channel !== action.channel
        )
      }
    default:
      return state
  }
}
