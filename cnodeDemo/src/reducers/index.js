// import * as home from './home'
// import * as message from './message'
// import * as messageUI from './messageUI'
// import * as topic from './topic'
// import * as topicUI from './topicUI'
// import * as user from './user'
// import * as userUI from './userUI'
// import * as utils from './utils'
// import { combineReducers } from 'redux'
//
// export default combineReducers({
//     home,
//     message,
//     messageUI,
//     topic,
//     topicUI,
//     user,
//     userUI,
//     utils
//   })
import { combineReducers } from 'redux'
import home from './home'
import user from './user'
import userUI from './userUI'
import utils from './utils'
import message from './message'
import messageUI from './messageUI'
import topic from './topic'
import topicUI from './topicUI'

export default combineReducers({
	home,
	user,
	userUI,
	utils,
	message,
	messageUI,
	topic,
	topicUI
})
