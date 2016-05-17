import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'
import * as storageService from '../services/storage'

const syncReducer = ['user', 'message', 'topic']

export const toast = createAction(types.TOAST, (text, timeout) => {
    return {
      text,
      timeout,
      id: new Date().getTime()
    }
  })

export const getReducerFromAsyncStorage = createAction(types.GET_REDUCER_FROM_ASYNC_STORAGE, async () => {
    return  storageService.multiGet(syncReducer)
              .then((value) => {
                let obj = {}
                value.forEach( item => {
                  obj[item[0]] = item[1]
                })
                if (obj.user && obj.user.secret) {
                  global.token = obj.user.secret.token
                }
                return obj
              })
              .catch((err) => {
                console.warn(err)
              })
  }, (resolved, rejected) => {
    return {
      resolved,
      rejected
    }
  })
