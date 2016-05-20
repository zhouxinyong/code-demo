
import * as requestService from './request'
import { getToken, setToken } from './token'

const filterData = (data) => {
  return data.data
}

export const getTopicsByTab = (tab = 'all', params = {}) => {
  return requestService.get('/topics', {
            tab,
            page: 1,
            limit: 10,
            ...params
         })
         .then(filterData)
}


export const getTopicById = (id) => {
  return requestService.get(`/topic/${id}`)
            .then(filterData)
            .then((topic) => {
              if (topic && topic.id) {
                return topic
              }
              throw 'getTopicById Error'
            })
}


export const reply = (topicId, content, replyId) => {
  let body = {
        accessToken: getToken(),
        content
    }
  if (replyId) {
    body.reply_id = replyId
  }

  let url = `/topic/${topicId}/replies`

  return requestService.post(url, body)
            .then(data => {
              if (data.success) {
                return data.reply_id
              } else {
                throw 'reply failed'
              }

            })
}

export const unReply = ({replyId}) => {
  let body = {
      accessToken: getToken()
    }
  let url =`/reply/${replyId}/ups`

  return requestService.post(url, body)
            .then(data => {
              if (data.success) {
                return data.action === 'up'
              } else {
                throw 'unReply failed'
              }
            })
}

export const publish = ({title, tab, content}) => {
  const body ={
        title,
        tab,
        content,
        accessToken: getToken()
      }
  return requestService.post('/topics', body)
            .then(data => {
              if (data.success) {
                return data.reply_id
              } else {
                throw 'publish failed'
              }

            })
}
