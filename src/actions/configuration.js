import { SELECT_CHANNEL, DESELECT_CHANNEL } from '../constants/actionTypes'
import { makeIsChannelSelected } from '../selectors'

const selectChannel = channel => ({
  type: SELECT_CHANNEL,
  channel
})

const deselectChannel = channel => ({
  type: DESELECT_CHANNEL,
  channel
})

export const toggleChannel = channel => {
  const isChannelSelected = makeIsChannelSelected()

  return (dispatch, getState) => {
    isChannelSelected(getState(), channel)
      ? dispatch(deselectChannel(channel))
      : dispatch(selectChannel(channel))
  }
}
