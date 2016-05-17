import * as requestService from './request'
import { getToken, setToken } from './token'

export const getMessages = () => {
  return  requestService.get('/messages', {
            accessToken: getToken()
          })
          .then(data => data.data)
          .then((messages) => {
            if (messages) {
              return messages
            } else {
              throw 'getMessages failed'
            }
          })
}

export const markAsRead = () => {
  return  requestService.post('message/mark_all', {
            accessToken: getToken()
          })
          .then(data => {
            if (data.success) {
              return data
            } else {
              throw 'markAsRead failed'
            }
          })
}

export const getUnReadmessageCount = () => {
  return  requestService.get('/message/count', {
            accessToken: getToken()
          })
          .then(data => data.data)
}
