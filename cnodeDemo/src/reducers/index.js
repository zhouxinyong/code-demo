import * as home from './home'
import * as message from './message'
import * as messageUI from './messageUI'
import * as topic from './topic'
import * as topicUI from './topicUI'
import * as user from './user'
import * as userUI from './userUI'
import * as utils from './utils'
import { combineReducers } from 'redux'

export default combineReducers({
    home,
    message,
    messageUI,
    topic,
    topicUI,
    user,
    userUI,
    utils
  })
