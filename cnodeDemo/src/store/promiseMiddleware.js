import { isFSA } from 'flux-standard-action'
import _ from 'lodash'

const isPromise = (value) => {
    return value && typeof value.then === 'function'
  }

const promiseMiddleware = ({dispatch}) => {
    return next => action => {
      if (!isFSA(action)) {
        return isPromise(action) ? action.then(dispatch) : next(action)
      }

      const {meta = {}, payload} = action
      const id = _.uniqueId()

      if (isPromise(payload)) {
        dispatch({
          ...action,
          payload: undefined,
          meta: {
            ...meta,
            sequence: {
              type: 'start',
              id
            }
          }
        })

      return payload.then((value) => {
              return dispatch({
                ...action,
                payload: value,
                meta: {
                  ...meta,
                  sequence: {
                    type: 'next',
                    id
                  }
                }
              })
            }, (err) => {
              return dispatch({
                ...action,
                payload: err,
                error: true,
                meta: {
                  ...meta,
                  sequence: {
                    type: 'next',
                    id
                  }
                }
              })
            })
      }

      return next(action)
    }
  }
