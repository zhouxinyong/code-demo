import * as types from '../constants/ActionTypes'

const initialState = {
    loadPending: {},
    replyRending: {},
    upPending: {},
    publishPending: false
  }

const topicUIReducer = (state = initialState, action) => {
    const {type, meta ={}} = action
    const {sequence = {}, id } = meta
    const status = sequence.type === 'start'
    switch (type) {
      case types.GET_TOPIC_BY_ID:
        return {
          ...state,
          loadPending: {
            ...state.loadPending,
            [id]: status
          }
        }
      case types.REPLY_TOPIC_BY_ID:
        return {
          ...state,
          replyRending: {
            ...state.replyRending,
            [id]: status
          }
        }
      case types.UP_REPLY:
        return {
          ...state,
          upPending: {
            ...state.upPending,
            [id]: status
          }
        }
      case types.PUBLISH:
        return {
          ...state,
          publishPending: status
        }
      default:
        return state

    }
  }

export default topicUIReducer
