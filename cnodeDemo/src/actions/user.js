import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'
import * as userService from '../services/userService'
import * as tokenService from '../services/token'
import * as storageService from '../services/storage'

export const checkToken = createAction(types.CHECK_TOKEN, async (token) => {
    const userLoginInfo = await userService.checkToken(token)
    const user = await userService.getUserInfo(userLoginInfo.loginname)
                    .then((data) => {
                      return {
                        secret: userLoginInfo,
                        publicInfo: data
                      }
                    })
    tokenService.setToken(token)
    return user
  }, (token, resolved) => {
    return {
      resolved,
      sync: 'user'
    }
  })

export  const updateClentUserInfo = createAction(types.UPDATE_CLIENT_USER_INFO, async (user) => {
    return  await userService.getUserInfo(user.secret.loginname)
              .then((userInfo) => {
                if (userInfo) {
                  return userInfo
                } else {
                  throw 'getUserInfo err'
                }
              })
  }, () => {
    return {
      sync: 'user'
    }
  })

export const getUserInfo = createAction(types.GET_USER_INFO, async (loginName) => {
    return  await userService.getUserInfo(loginName)
              .then((userInfo) => {
                if (userInfo) {
                  return userInfo
                } else {
                  throw 'getUserInfo err'
                }
              })
  }, (userName) => {
    return {
      userName,
      sync: 'user'
    }
  })

export const logout = () => {
    return {
      type: types.LOGOUT,
      meta: {
        sync: 'user'
      }
    }
  }

export const clear = () => {
    try {
      storageService.removeItem('topic')
      storageService.removeItem('message')
    } catch (e) {
      console.warn(e)
    }
    return {
      type: types.CLEAR
    }
  }
