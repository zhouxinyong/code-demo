
import React, { AsyncStorage } from 'react-native'

export const setItem = async (key, value) => {
  if (value) {
    return await AsyncStorage.setItem(key, JSON.stringify(value))
  } else {
    return Promise.reject('StorageServiceError: value should not be null or undefined')
  }
}

export const getItem = (key) => {
  return  AsyncStorage.getItem(key)
            .then(value => JSON.parse(value))
}


export const clear = AsyncStorage.clear

export const removeItem = async (...args) => {
  return  await AsyncStorage.removeItem(...args)
}

export const multiGet = (keys) => {
  return  AsyncStorage.multiGet(keys)
            .then((value) => {
              return value.map(item => {
                return [item[0], JSON.parse(item[1])]
              })
            })
}


export const multiRemove = (keys) => {
  return  AsyncStorage.multiRemove(keys)
}
