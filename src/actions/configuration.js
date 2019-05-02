import { ADD_CHANNEL, REMOVE_CHANNEL } from '../constants/actionTypes'

export const addChannel = channel => ({
  type: ADD_CHANNEL,
  channel
})

export const removeChannel = channel => ({
  type: REMOVE_CHANNEL,
  channel
})
