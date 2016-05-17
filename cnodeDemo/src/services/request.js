import qs from 'query-string'
import config from '../configs'

const urlPrefix = config.domain + config.apiPath

const filterJSON = (res) => {
  return res.json()
}

const filterStatus = (res) => {
  const status = res.status
  if (status >= 200 && status < 300) {
    return res
  } else {
    let error = new Error(res.statusText)
    error.res = res
    error.type = 'http'
    throw error
  }
}

export const get = (url, params) => {
  url = urlPrefix + url
  if (params) {
    url += `?${qs.stringify(params)}`
  }

  if (__DEV__) {
    console.info(`GET: ${url}`)
    console.info(`params: ${params}`)
  }

  return fetch(url)
          .then(filterStatus)
          .then(filterJSON)
}

export const post = (url, body) => {
  url = urlPrefix + url

  if (__DEV__) {
    console.info(`post: ${url}`)
    console.info(`body: ${body}`)
  }

  return  fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/jsaon'
            },
            body: JSON.stringify(body)
          })
          .then(filterStatus)
          .then(filterJSON)
}
