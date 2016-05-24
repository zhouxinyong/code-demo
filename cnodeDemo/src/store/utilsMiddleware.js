import * as utilsActions from '../actions/utils'

const utilsMiddleware = ({dispatch}) => {
    return next => action => {
      const { payload, error, meta = {} } = action
      const dispatchToast = (...args) => {
        dispatch(utilsActions.toast(...args))
      }
      if (error && payload.type === 'http') {
        dispatchToast(`网络连接错误[${payload.res.status}]`)
      }
      next(action)
    }
  }

export default utilsMiddleware
