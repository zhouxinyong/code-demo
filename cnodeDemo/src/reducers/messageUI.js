import * as types from '../constants/ActionTypes'

const initialState = {
  fetchMessagesPending: false,
  fetchUnreadMessageCountPending: false,
  markAsReadRending: false
}

const messageUIReducer = (state = initialState, action) => {
    const { type, meta = {} } = action
    const { sequence = {} } = meta
    const status = sequence.type === 'start'

    switch (type) {
      case types.GET_MESSAGES_LIST:
        return {
          ...state,
          fetchMessagesPending: status
        }
      case types.MARK_AS_READ:
        return {
          ...state,
          markAsReadRending: status
        }
      case types.GET_UNREAD_MESSAGE_COUNT:
        return {
          ...state,
          fetchUnreadMessageCountPending: status
        }
      case types.LOGOUT:
        return initialState
      default:
        return state
    }
  }

export default messageUIReducer
