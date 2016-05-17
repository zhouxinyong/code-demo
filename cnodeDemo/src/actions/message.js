import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'
import * as messageService from '../services/messageService'

export const getUnReadmessageCount = createAction(types.GET_UNREAD_MESSAGE_COUNT, async () => {
        return  await messageService.getUnReadmessageCount()
      })

export const markAsRead = createAction(types.MARK_AS_READ, async () => {
        return  await messageService.markAsRead()
      }, (resolved, rejected) => {
        return {
          resolved,
          rejected,
          sync: 'message'
        }
      })


export const getMessageList = createAction(types.GET_MESSAGES_LIST, async () => {
        return  await messageService.getMessages()
      }, () => {
        return {
          sync: 'message'
        }
      })
