import * as requestService from './request'

export const checkToken = (token) => {
  return  requestService.post('/accessToken',{
            accessToken: token
          }).then(data => {
            if (data.success) {
              data.token = token
              return data
            } else {
              throw 'wrong token'
            }
          })
}

export const getUserInfo = (loginName) => {
  return  requestService.get(`/user/${loginName}`)
          .then(data => data.data)
}
