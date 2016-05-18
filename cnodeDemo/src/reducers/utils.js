import * as types from '../constants/ActionTypes'

const initialState = {
    toast: {
      text: null,
      timeout: 2000,
      id: null
    }
  }

const utilsReducer = (state = initialState, action) => {
    const { payload = {}, type } = action
    switch (type) {
      case types.TOAST:
        return {
          ...state,
          toast: {
            ...state,
            ...payload
          }
        }
      default:
        return state
    }
  }
  export default utilsReducer
