import * as types from '../constants/ActionTypes'

const initialState ={
    hasNotRead: [],
    hasRead: [],
    unReadMessageCount: 0
  }

const messageReducer = (state = initialState, action) => {
    const {payload, error, meta = {}} = action
    const {sequence = {}} = meta
    if (sequence.type === 'start' || error) {
      return state
    }

    switch (action.type) {
      case types.GET_MESSAGES_LIST:
        return {
          ...state,
          unReadMessageCount: payload.hasnot_read_messages.length,
          hasRead: payload.has_read_messages,
          hasNotRead: payload.hasnot_read_messages
        }
      case types.GET_REDUCER_FROM_ASYNC_STORAGE:
        return {
          ...state,
          ...payload.message || initialState
        }
      case types.GET_UNREAD_MESSAGE_COUNT:
        return {
          ...state,
          unReadMessageCount: payload
        }
      case types.MARK_AS_READ:
        return {
          ...state,
          hasNotRead: [],
          hasRead: state.hasNotRead.concat(state.hasRead),
          unReadMessageCount: 0
        }
      case types.LOGOUT:
        return initialState
      default:
        return state
    }
  }

export default messageReducer
