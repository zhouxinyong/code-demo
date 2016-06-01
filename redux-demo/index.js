import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'
import Root from './containers/Root'

const store = configureStore()
render(
	<Root store={store} />,
  document.getElementById('root')
)

// render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// )
