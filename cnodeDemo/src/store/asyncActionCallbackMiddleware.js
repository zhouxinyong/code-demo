
const asyncActionCallbackMiddleware = () => {
    return next => action => {
      const { meta = {}, error, payload } = action
      const { sequence = {}, resolved, rejected } = meta
      if (sequence.type === 'start') return next(action)

      error ? (rejected && rejected(payload)) : (resolved && resolved(payload))
      next(action)
    }
  }

export default asyncActionCallbackMiddleware
