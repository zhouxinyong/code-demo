import { createStore, compose } from 'redux'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

const handler = compose(
	process.env === 'production' ? null : DevTools.instrument()
)

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, handler)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
